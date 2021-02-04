using DNTCaptcha.Core;
using DNTCaptcha.Core.Providers;
using EcoFive.Models.Models;
using EcoFive.Models.Repository;
using EcoFive.UI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Threading.Tasks;
using EcoFive.UI.Utilities;

namespace EcoFive.UI.Controller
{
    public class AccountController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger<AccountController> _logger;
        private readonly IDNTCaptchaValidatorService _validatorService;
        private readonly IAccountRepository _accountRepository;
        private IHostingEnvironment _environment;

        public AccountController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<AccountController> logger,
            IDNTCaptchaValidatorService validatorService,
            IAccountRepository accountRepository,
            IHostingEnvironment hostingEnvironment)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _validatorService = validatorService;
            _accountRepository = accountRepository;
            _environment = hostingEnvironment;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Register()
        {
            var countries = _accountRepository.GetAllCountries();
            ViewBag.Countries = countries;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterViewModel model)
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
                    UserName = model.UserName,
                    Email = model.Email,
                    CountryId = model.CountryId,
                    GovernorateId = model.GovernorateId,
                    CityId = model.CityId,
                    FullName = model.FirstName + " " + model.LastName,
                    PhoneNumber = model.PhoneNumber,
                    IsSupplier = false,
                    IsCaptain = false,

                };
                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                    var confirmationLink = Url.Action("ConfirmEmail", "Account",
                        new {area="Admin", userId = user.Id, token = token }, Request.Scheme);


                    //config and send mail to client
                    var messageBody =
                                  $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">{user.FullName} اهلا بك&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp;.نشكرك على انضمامك معنا &nbsp;{user.Email} &nbsp;يرجى تفعيل الاميل&nbsp;</span></p>\r\n                <div style=\"text-align: center;\"><br></div>\r\n                <div style=\"text-align: center;\"><br></div>\r\n                <div data-empty=\"true\" style=\"text-align: center;\"><span style=\"color: rgb(97, 189, 109); font-family: Arial; font-size: 30px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(239, 239, 239); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\">&nbsp;</span><a href=\"{confirmationLink}\" rel=\"noopener noreferrer\" target=\"_blank\"><span style='color: rgb(97, 189, 109); font-family: \"Arial Black\", Gadget, sans-serif; font-size: 30px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(239, 239, 239); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>&lt;&lt; للتفعيل اضغط هنا</span><span style=\"font-family: 'Arial Black', Gadget, sans-serif;\"><span style=\"color: rgb(97, 189, 109);\">&nbsp;<br></span></span></a></div>\r\n                <p style=\"text-align: center;\"><span style=\"font-size: 22px;\">اذا واجهك اى مشكله بالتفعيل من خلال الضغط على الزر اعلاه يرجى نسخ الرابط بالاسفل ولصق داخل المتصفح</span></p>\r\n                <p style=\"text-align: center;\"><a href=\"//{confirmationLink}\">{confirmationLink}</a></p>\r\n                <p style=\"text-align: center;\"><br></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp; تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تقم بعمليه التسجيل يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", model.Email, " تفعيل حسابك بمنصة EcoFive", messageBody);

                    //_logger.Log(LogLevel.Warning, confirmationLink);

                    if (_signInManager.IsSignedIn(User) && User.IsInRole("Admin"))
                    {
                        return RedirectToAction("Index", "Home");
                    }

                    ViewBag.ConfirmTitle = "تم إنشاء حسابك بنجاح ";
                    ViewBag.ConfirmMessage = $" {model.Email}  تم ارسال رساله على اميلك ";
                    return View("Confirm");
                }


                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }
            ViewBag.Countries = _accountRepository.GetAllCountries();
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
                        this.ModelState.AddModelError(DNTCaptchaTagHelper.CaptchaInputName, "الرجاء إدخال رمز التحقق الصحيح");
                        return View();
                    }
                }

                var user = await _userManager.FindByNameAsync(model.UserName);

                if (user != null && !user.EmailConfirmed &&
                    (await _userManager.CheckPasswordAsync(user, model.Password)))
                {
                    ModelState.AddModelError("", "لم يتم تفعيل البريد الالكترونى ");

                    return View(model);
                }

                var result =
                    await _signInManager.PasswordSignInAsync(model.UserName, model.Password,
                        model.RememberMe, true);

                if (result.Succeeded)
                {

                    if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl)) //to close redirect attacks
                    {
                        return Redirect(returnUrl);

                    }
                    else if (user.CloseAccount == true)
                    {
                        ModelState.AddModelError("", "حسابك موقوف. يرجى الاتصال بالدعم ");

                        return View(model);

                    }
                    else if (await _userManager.IsInRoleAsync(user, "Admin") || await _userManager.IsInRoleAsync(user, "SuperAdmin"))
                    {
                        return Redirect("~/Admin/Home/Index");
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");

                    }
                }

                if (result.IsLockedOut)
                {
                    return View("~/Areas/Admin/Views/Account/AccountLocked.cshtml");

                }
                else
                {
                    ModelState.AddModelError(string.Empty, "خطئ فى كلمه المرور أو البريد الالكترونى ");
                }
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
                    ModelState.AddModelError("", "لم يتم تفعيل البريد الالكترونى");
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
        public async Task<IActionResult> ChangeCurrentProfile()
        {

            ViewBag.Countries = _accountRepository.GetAllCountries();

            ViewBag.Governorate = _accountRepository.GetAllGovernorate();

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return RedirectToAction("Login");
            }
            ViewBag.City = _accountRepository.GetCity(user.GovernorateId);

            var model = new ChangeCurrentProfileViewModel
            {
                CityId = user.CityId,
                CountryId = user.CountryId,
                GovernorateId = user.GovernorateId,
                Email = user.Email,
                FullName = user.FullName,
                UserName = user.UserName,
                PhoneNumber = user.PhoneNumber
            };

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> ChangeCurrentProfile(ChangeCurrentProfileViewModel model)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return RedirectToAction("Login");
            }

            ViewBag.Countries = _accountRepository.GetAllCountries();
            ViewBag.City = _accountRepository.GetCity(user.GovernorateId);
            ViewBag.Governorate = _accountRepository.GetAllGovernorate();


            if (ModelState.IsValid)
            {
                ViewBag.Countries = _accountRepository.GetAllCountries();
                ViewBag.City = _accountRepository.GetCity(user.GovernorateId);
                ViewBag.Governorate = _accountRepository.GetAllGovernorate();

                user.CityId = model.CityId;
                user.CountryId = model.CountryId;
                user.GovernorateId = model.GovernorateId;
                user.Email = model.Email;
                user.FullName = model.FullName;
                user.UserName = model.UserName;
                user.PhoneNumber = model.PhoneNumber;

                if (model.PhotoPath != null)
                {
                    var content = model.PhotoPath.ContentType;
                    if (content == "image/JPG" || content == "image/jpeg" || content == "image/png")
                    {
                        if (user.PhotoPath == null || user.PhotoPath == "")
                        {
                        }
                        else
                        {
                            string filePath = Path.Combine(_environment.WebRootPath, "Files/Users/ProfileImages", user.PhotoPath);

                            System.IO.File.Delete(filePath);
                        }
                        user.PhotoPath = ProcessUploadedFile(model);
                    }
                    else
                    {
                        ModelState.AddModelError(string.Empty, "jpg , jpeg , png يرجى اختيار الصوره بصيغ");
                        return View(model);

                    }
                }
                var checkCurrentPassword = await _userManager.CheckPasswordAsync(user, model.CurrentPassword);

                    if (!checkCurrentPassword)
                    {
                        ModelState.AddModelError(string.Empty, "كلمه المرور الحالية غير صحيحه");
                        return View(model);
                    }
                    else
                    {
                        if (!string.IsNullOrWhiteSpace(model.NewPassword) && !string.IsNullOrWhiteSpace(model.ConfirmPassword))
                        {
                            var passwordResult = await _userManager.ChangePasswordAsync(user,
                                model.CurrentPassword, model.NewPassword);
                            if (!passwordResult.Succeeded)
                            {
                                ModelState.AddModelError(string.Empty, "حدث خطئ");
                            }
                        }

                        var userResult = await _userManager.UpdateAsync(user);

                        if (userResult.Succeeded)
                        {
                            ViewBag.Message = "تم التحديث بنجاح";
                        }
                        else
                        {
                            foreach (var error in userResult.Errors)
                            {
                                ModelState.AddModelError("", error.Description);
                            }
                        }
                        await _signInManager.RefreshSignInAsync(user);
                    }
            };
            return View(model);

        }

        private string ProcessUploadedFile(ChangeCurrentProfileViewModel model)
        {
            string uniqueFileName = null;
            if (model.PhotoPath != null)
            {
                string uploadFolder = Path.Combine(_environment.WebRootPath, "Files/Users/ProfileImages");
                uniqueFileName = Guid.NewGuid().ToString() + "_" + model.PhotoPath.FileName;
                string filePath = Path.Combine(uploadFolder, uniqueFileName);

                using var image = Image.Load(model.PhotoPath.OpenReadStream());
                image.Mutate(x => x.Resize(200, 200));
                image.Metadata.HorizontalResolution = 96;
                image.Metadata.VerticalResolution = 96;
                image.Save(filePath);

                //using (var fileSream = new FileStream(filePath, FileMode.Create))
                //{
                //    model.PhotoPath.CopyTo(fileSream);
                //}
            }

            return uniqueFileName;
        }

    }
}
