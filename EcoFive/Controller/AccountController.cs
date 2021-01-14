﻿using DNTCaptcha.Core;
using DNTCaptcha.Core.Providers;
using EcoFive.Models.Models;
using EcoFive.UI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Threading.Tasks;

namespace EcoFive.UI.Controllers
{
    public class AccountController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger<AccountController> _logger;
        private readonly IDNTCaptchaValidatorService _validatorService;

        public AccountController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<AccountController> logger,
            IDNTCaptchaValidatorService validatorService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _validatorService = validatorService;
        }

        [AllowAnonymous]
        [AcceptVerbs("Get", "Post")]
        public async Task<IActionResult> IsEmailInUse(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return Json(true);
            }
            else
            {
                return Json("الاميل مستخدم من قبل");
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterViewModel model, ConfigMailViewModel mailViewModel)
        {
            if (ModelState.IsValid)
            {
                if (!_validatorService.HasRequestValidCaptchaEntry(Language.English, DisplayMode.ShowDigits))
                {
                    this.ModelState.AddModelError(DNTCaptchaTagHelper.CaptchaInputName, "الرجاء إدخال كلمة التحقق الصحيحة");
                    return View();
                }

                var user = new ApplicationUser
                {
                    UserName = model.Email,
                    Email = model.Email,
                    City = model.City
                };

                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                    var confirmationLink = Url.Action("ConfirmEmail", "Account",
                        new { userId = user.Id, token = token }, Request.Scheme);


                    //config and send mail to client
                    using (MailMessage message = new MailMessage("gis.csharp@gmail.com", model.Email))
                    {
                        message.Subject = "EcoFive تفعيل حسابك بمنصة ";
                        message.IsBodyHtml = true;
                        message.Body = $"<h2 style=\"text-align: center;\">يمكنك تفعيل حسابك بالضغط على الرابط التالى</h2>\r\n<h2 style=\"text-align: center;\"><a href=\"{confirmationLink}\" rel=\"noopener noreferrer\" target=\"_blank\">اضغط هنا </a></h2>";

                        using (SmtpClient smtp = new SmtpClient())
                        {
                            smtp.Host = "smtp.gmail.com";
                            smtp.EnableSsl = true;
                            NetworkCredential credential = new NetworkCredential("gis.csharp@gmail.com", "Dev**27med20100");
                            smtp.UseDefaultCredentials = true;
                            smtp.Credentials = credential;
                            smtp.Port = 587;
                            smtp.Send(message);
                        }
                    }

                    //_logger.Log(LogLevel.Warning, confirmationLink);

                    if (_signInManager.IsSignedIn(User) && User.IsInRole("Admin"))
                    {
                        return RedirectToAction("Index", "Home");
                    }

                    ViewBag.ErrorTitle = "تم إنشاء حسابك بنجاح ";
                    ViewBag.ErrorMessage = $"من فضلك قم بالضغط على الرابط المرسل للتفعيل {model.Email} لم يتبقى الا خطوه واحده لتفعيل حسابك .. تم ارسال رساله على اميلك ";
                    return View("Error");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string returnUrl)
        {
            //throw new Exception("exption");
            LoginViewModel model = new LoginViewModel
            {
                ReturnUrl = returnUrl,
                ExternalLogins =
                    (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList()
            };

            return View(model);
        }

        [HttpPost, ValidateAntiForgeryToken]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl)
        {
            model.ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();

            if (ModelState.IsValid)
            {
                if (ModelState.IsValid)
                {
                    if (!_validatorService.HasRequestValidCaptchaEntry(Language.English, DisplayMode.ShowDigits))
                    {
                        this.ModelState.AddModelError(DNTCaptchaTagHelper.CaptchaInputName, "الرجاء إدخال كلمة التحقق الصحيحة");
                        return View();
                    }
                }

                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user != null && !user.EmailConfirmed &&
                    (await _userManager.CheckPasswordAsync(user, model.Password)))
                {
                    ModelState.AddModelError("", "لم يتم تفعيل الاميل الخاص بكم");

                    return View(model);
                }
                var result =
                    await _signInManager.PasswordSignInAsync(model.Email, model.Password,
                        model.RememberMe, true);

                if (result.Succeeded)
                {
                    if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl)) //to close redirect attacks
                    {
                        return Redirect(returnUrl);
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }

                }

                if (result.IsLockedOut)
                {
                    return View("AccountLocked");
                }

                ModelState.AddModelError(string.Empty, "خطئ فى كلمه المرور او الاميل الخاص بكم");

            }

            return View(model);
        }


        [AllowAnonymous]
        [HttpPost]
        public IActionResult ExternalLogin(string provider, string returnUrl)
        {
            var redirectUrl = Url.Action("ExternalLoginCallback", "Account",
                new { ReturnUrl = returnUrl });
            var properties = _signInManager
                .ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            return new ChallengeResult(provider, properties);
        }



        [AllowAnonymous]
        public async Task<IActionResult>
            ExternalLoginCallback(string returnUrl = null, string remoteError = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");

            LoginViewModel loginViewModel = new LoginViewModel
            {
                ReturnUrl = returnUrl,
                ExternalLogins =
                        (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList()
            };

            if (remoteError != null)
            {
                ModelState
                    .AddModelError(string.Empty, $"Error from external provider: {remoteError}");

                return View("Login", loginViewModel);
            }

            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                ModelState
                    .AddModelError(string.Empty, "Error loading external login information.");

                return View("Login", loginViewModel);
            }

            ApplicationUser user = null;
            var email = info.Principal.FindFirstValue(ClaimTypes.Email);

            if (email != null)
            {
                user = await _userManager.FindByEmailAsync(email);
                if (user != null && !user.EmailConfirmed)
                {
                    ModelState.AddModelError("", "Email not confirmed yet");
                    return View("Login", loginViewModel);
                }
            }
            var signInResult = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider,
                info.ProviderKey, isPersistent: false, bypassTwoFactor: true);

            if (signInResult.Succeeded)
            {
                return LocalRedirect(returnUrl);
            }
            else
            {

                if (email != null)
                {
                    if (user == null)
                    {
                        user = new ApplicationUser
                        {
                            UserName = info.Principal.FindFirstValue(ClaimTypes.Email),
                            Email = info.Principal.FindFirstValue(ClaimTypes.Email)
                        };

                        await _userManager.CreateAsync(user);

                        var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                        var confirmationLink = Url.Action("ConfirmEmail", "Account",
                            new { userId = user.Id, token = token }, Request.Scheme);
                        //config and send mail to client
                        using (MailMessage message = new MailMessage("gis.csharp@gmail.com", email))
                        {
                            message.Subject = "EcoFive تفعيل حسابك بمنصة ";
                            message.IsBodyHtml = true;
                            message.Body = $"<h2 style=\"text-align: center;\">يمكنك تفعيل حسابك بالضغط على الرابط التالى</h2>\r\n<h2 style=\"text-align: center;\"><a href=\"{confirmationLink}\" rel=\"noopener noreferrer\" target=\"_blank\">اضغط هنا </a></h2>";

                            using (SmtpClient smtp = new SmtpClient())
                            {
                                smtp.Host = "smtp.gmail.com";
                                smtp.EnableSsl = true;
                                NetworkCredential credential = new NetworkCredential("gis.csharp@gmail.com", "Dev**27med20100");
                                smtp.UseDefaultCredentials = true;
                                smtp.Credentials = credential;
                                smtp.Port = 587;
                                smtp.Send(message);
                            }
                        }
                        _logger.Log(LogLevel.Warning, confirmationLink);

                        ViewBag.ErrorTitle = "تم إنشاء حسابك بنجاح ";
                        ViewBag.ErrorMessage = $"من فضلك قم بالضغط على الرابط المرسل للتفعيل {email} لم يتبقى الا خطوه واحده لتفعيل حسابك .. تم ارسال رساله على اميلك ";
                        return View("Error");
                    }

                    // Add a login (i.e insert a row for the user in AspNetUserLogins table)
                    await _userManager.AddLoginAsync(user, info);
                    await _signInManager.SignInAsync(user, isPersistent: false);

                    return LocalRedirect(returnUrl);
                }

                // If we cannot find the user email we cannot continue
                ViewBag.ErrorTitle = $"الاميل المرسل ليس عبر: {info.LoginProvider}";
                ViewBag.ErrorMessage = " agmghazi@hotmail.com يرجى الاتصال بالدعم الفنى";

                return View("Error");
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string token)
        {
            if (userId == null || token == null)
            {
                return RedirectToAction("Index", "Home");
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                ViewBag.ErrorMessage = $"The user Id {userId} is not valid";
                return View("NotFound");
            }

            var result = await _userManager.ConfirmEmailAsync(user, token);
            if (result.Succeeded)
            {
                return View();

                //await _signInManager.SignInAsync(user, isPersistent: false);
                //return RedirectToAction("Index", "Home");

            }

            ViewBag.ErrorTitle = "لا يمكن تفعيل حسابك";
            ViewBag.ErrorMessage = " agmghazi@hotmail.com يرجى الاتصال بالدعم الفنى";

            return View("Error");
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (ModelState.IsValid)
                {
                    if (!_validatorService.HasRequestValidCaptchaEntry(Language.English, DisplayMode.ShowDigits))
                    {
                        this.ModelState.AddModelError(DNTCaptchaTagHelper.CaptchaInputName, "الرجاء إدخال كلمة التحقق الصحيحة");
                        return View();
                    }
                }

                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user != null && await _userManager.IsEmailConfirmedAsync(user))
                {
                    var token = await _userManager.GeneratePasswordResetTokenAsync(user);

                    // Build the password reset link
                    var passwordResetLink = Url.Action("ResetPassword", "Account",
                        new { email = model.Email, token = token }, Request.Scheme);

                    using (MailMessage message = new MailMessage("gis.csharp@gmail.com", model.Email))
                    {
                        message.Subject = "EcoFive تغير كلمه مرور حسابك بمنصة ";
                        message.IsBodyHtml = true;
                        message.Body = $"<h2 style=\"text-align: center;\">يمكنك تغير كلمك مرور حسابك بالضغط على الرابط التالى</h2>\r\n<h2 style=\"text-align: center;\"><a href=\"{passwordResetLink}\" rel=\"noopener noreferrer\" target=\"_blank\">اضغط هنا </a></h2>";

                        using (SmtpClient smtp = new SmtpClient())
                        {
                            smtp.Host = "smtp.gmail.com";
                            smtp.EnableSsl = true;
                            NetworkCredential credential = new NetworkCredential("gis.csharp@gmail.com", "Dev**27med20100");
                            smtp.UseDefaultCredentials = true;
                            smtp.Credentials = credential;
                            smtp.Port = 587;
                            smtp.Send(message);
                        }
                    }

                    // Log the password reset link
                    //_logger.Log(LogLevel.Warning, passwordResetLink);

                    return View("ForgotPasswordConfirmation");
                }

                return View("ForgotPasswordConfirmation");
            }

            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ResetPassword(string token, string email)
        {
            if (token == null || email == null)
            {
                ModelState.AddModelError("", "تصريح الدخول غير صحيح");
            }
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);

                if (user != null)
                {
                    var result = await _userManager.ResetPasswordAsync(user, model.Token, model.Password);
                    if (result.Succeeded)
                    {
                        if (await _userManager.IsLockedOutAsync(user))
                        {
                            await _userManager.SetLockoutEndDateAsync(user, DateTimeOffset.UtcNow);
                        }

                        return View("ResetPasswordConfirmation");
                    }
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                    return View(model);
                }

                return View("ResetPasswordConfirmation");
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult ChangePassword()
        {

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangePasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.GetUserAsync(User);
                if (user == null)
                {
                    return RedirectToAction("Login");
                }

                // ChangePasswordAsync changes the user password
                var result = await _userManager.ChangePasswordAsync(user,
                    model.CurrentPassword, model.NewPassword);

                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, "كلمه المرور السابقه غير صحيحه");
                    }
                    return View();
                }

                await _signInManager.RefreshSignInAsync(user);
                return View("ChangePasswordConfirmation");
            }

            return View(model);
        }
    }
}
