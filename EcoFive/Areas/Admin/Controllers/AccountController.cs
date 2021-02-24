using DNTCaptcha.Core;
using DNTCaptcha.Core.Providers;
using EcoFive.Models.Models;
using EcoFive.Models.Repository;
using EcoFive.UI.Areas.Admin.ViewModels;
using EcoFive.UI.Utilities;
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
using System.Threading.Tasks;

namespace EcoFive.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
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

        [AllowAnonymous]
        [AcceptVerbs("Get", "Post")]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public async Task<IActionResult> IsEmailInUse(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return Json(true);
            }
            else
            {
                return Json("الاميل مستخدم من قبل .. يرجى التغير");
            }
        }

        [AllowAnonymous]
        [AcceptVerbs("Get", "Post")]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public async Task<IActionResult> IsUserInUse(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            if (user == null)
            {
                return Json(true);
            }
            else
            {
                return Json("اسم المستخدم مستخدم .. يرجى التغير");
            }
        }

        [AllowAnonymous]
        [AcceptVerbs("Get", "Post")]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public async Task<IActionResult> IsUserCangeCurrentInUse(string userName)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var currentuserName = currentUser.UserName;
            if (currentuserName == userName)
            {
                return Json(true);

            }
            else
            {
                var user = await _userManager.FindByNameAsync(userName);
                if (user == null && currentuserName == userName)
                {
                    return Json(true);
                }
                else
                {
                    return Json("اسم المستخدم مستخدم .. يرجى التغير");
                }
            }

        }

        [AllowAnonymous]
        [AcceptVerbs("Get")]

        public IActionResult FindGovernorates(int id)
        {
            var governorates = _accountRepository.GetGovernorate(id);
            return new JsonResult(governorates);
        }

        [AllowAnonymous]
        [AcceptVerbs("Get")]
        public IActionResult Findcities(int id)
        {
            var cities = _accountRepository.GetCity(id);
            return new JsonResult(cities);
        }

        [HttpGet]
        [AllowAnonymous]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public IActionResult Register(bool? IsSupplier, bool? IsCaptain)
        {
            ViewBag.Countries = _accountRepository.GetAllCountries();
            if (IsSupplier == true)
                ViewBag.IsSupplier = "checked";


            if (IsCaptain == true)
                ViewBag.IsCaptain = "checked";

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> MFASetup()
        {
            const string provider = "EcoFive ";

            var user = await _userManager.GetUserAsync(User);
            await _userManager.ResetAuthenticatorKeyAsync(user);
            var token = await _userManager.GetAuthenticatorKeyAsync(user);

            var qrCodeUrl = $"otpauth://totp/{provider}({user.UserName})?secret={token}&issuer={provider}&digits=6";

            var model = new MFAViewModel { Token = token, QRCodeUrl = qrCodeUrl };
            if (await _userManager.GetTwoFactorEnabledAsync(user))
            {
                ViewBag.MFAValue = true;
            }
            else
            {
                ViewBag.MFAValue = false;

            }
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> MFASetup(MFAViewModel model)
        {
            var user = await _userManager.GetUserAsync(User);
            if (await _userManager.GetTwoFactorEnabledAsync(user))
            {
                ViewBag.MFAValue = true;
            }
            else
            {
                ViewBag.MFAValue = false;

            }

            if (model.CheckMFA)
            {

                if (model.SwitchMFA)
                {
                    ViewBag.Message = " خاصية التحقق الثنائى مفعلة";
                }
                else
                {
                    await _userManager.SetTwoFactorEnabledAsync(user, false);
                    ViewBag.Message = "تم الغاء تفعيل خاصية التحقق الثنائى بنجاح";
                    ViewBag.MFAValue = false;
                }
            }


            if (ModelState.IsValid)
            {

                var succeeded = await _userManager.VerifyTwoFactorTokenAsync(user, _userManager.Options.Tokens.AuthenticatorTokenProvider, model.Code);
                if (succeeded)
                {
                    await _userManager.SetTwoFactorEnabledAsync(user, true);
                    ViewBag.Message = "تم تفعيل خاصية التحقق الثنائى بنجاح";
                    ViewBag.MFAValue = true;

                }
                else
                {
                    ModelState.AddModelError("التحقق", "كود التحقق غير صحيح");
                }
            }
            return View(model);
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("/Admin/Account/MFACheck/{userName?}/{RememberMe?}")]
        public IActionResult MFACheck(string userName, bool RememberMe)
        {
            if (!String.IsNullOrEmpty(userName))
            {
                ViewBag.UserName = userName;
                ViewBag.isRemember = RememberMe;
                return View();
            }
            return View("~/Views/Shared/NotFound.cshtml");
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("/Admin/Account/MFACheck/{userName?}/{RememberMe?}")]
        public async Task<IActionResult> MFACheck(MNFACheckViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(model.UserName);

                var result = await _signInManager.TwoFactorAuthenticatorSignInAsync(model.Code, model.isRemember, model.isRemember);
                if (result.Succeeded)
                {
                    if (await _userManager.IsInRoleAsync(user, "Admin") || await _userManager.IsInRoleAsync(user, "SuperAdmin"))
                    {
                        return RedirectToAction("Index", "Home");
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home", new {area=""});
                    }
                }
                else
                {
                    ModelState.AddModelError("التحقق", "كود التحقق غير صحيح");
                }

            }
            return View(model);
        }


        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            ViewBag.Countries = _accountRepository.GetAllCountries();

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
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    PhoneNumber = model.PhoneNumber,
                    IsSupplier = model.IsSupplier,
                    IsCaptain = model.IsCaptain

                };
                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                    var confirmationLink = Url.Action("ConfirmEmail", "Account",
                        new { userId = user.Id, token = token }, Request.Scheme);


                    //config and send mail to client
                    var messageBody =
                                  $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">{user.FirstName + ' ' + user.LastName} اهلا بك&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp;.نشكرك على انضمامك معنا &nbsp;{user.Email} &nbsp;يرجى تفعيل الاميل&nbsp;</span></p>\r\n                <div style=\"text-align: center;\"><br></div>\r\n                <div style=\"text-align: center;\"><br></div>\r\n                <div data-empty=\"true\" style=\"text-align: center;\"><span style=\"color: rgb(97, 189, 109); font-family: Arial; font-size: 30px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(239, 239, 239); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\">&nbsp;</span><a href=\"{confirmationLink}\" rel=\"noopener noreferrer\" target=\"_blank\"><span style='color: rgb(97, 189, 109); font-family: \"Arial Black\", Gadget, sans-serif; font-size: 30px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(239, 239, 239); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>&lt;&lt; للتفعيل اضغط هنا</span><span style=\"font-family: 'Arial Black', Gadget, sans-serif;\"><span style=\"color: rgb(97, 189, 109);\">&nbsp;<br></span></span></a></div>\r\n                <p style=\"text-align: center;\"><span style=\"font-size: 22px;\">اذا واجهك اى مشكله بالتفعيل من خلال الضغط على الزر اعلاه يرجى نسخ الرابط بالاسفل ولصق داخل المتصفح</span></p>\r\n                <p style=\"text-align: center;\"><a href=\"//{confirmationLink}\">{confirmationLink}</a></p>\r\n                <p style=\"text-align: center;\"><br></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp; تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تقم بعمليه التسجيل يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", model.Email, " تفعيل حسابك بمنصة EcoFive", messageBody);

                    //_logger.Log(LogLevel.Warning, confirmationLink);

                    if (_signInManager.IsSignedIn(User) && User.IsInRole("Admin"))
                    {
                        return RedirectToAction("Index", "Home");
                    }

                    ViewBag.ConfirmTitle = "تم إنشاء حسابك بنجاح";
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

                if (user.CloseAccount == true)
                {
                    ModelState.AddModelError("", "حسابك موقوف. يرجى الاتصال بالدعم ");

                    return View(model);
                }
                else if (result.RequiresTwoFactor)
                {
                    return RedirectToAction("MFACheck", new { userName = model.UserName, RememberMe = model.RememberMe });

                }
                else if (result.Succeeded)
                {
                    if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl)) //to close redirect attacks
                    {
                        return Redirect(returnUrl);

                    }
                    else if (await _userManager.IsInRoleAsync(user, "Admin") || await _userManager.IsInRoleAsync(user, "SuperAdmin"))
                    {
                        return RedirectToAction("Index", "Home");
                    }
                    else
                    {
                        ModelState.AddModelError("", "عفوا غير مصرح لك بالدخول");

                        return View(model);
                    }
                }
                else if (result.IsLockedOut)
                {
                    return View("AccountLocked");
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "خطئ فى كلمه المرور أو البريد الالكترونى ");
                }
            }

            return View(model);
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

            var result = await _userManager.ConfirmEmailAsync(user, token);
            if (result.Succeeded)
            {
                //send mail
                var fullName = user.FirstName + " " + user.LastName;
                var userName = user.UserName;
                var email = user.Email;
                var phoneNumber = user.PhoneNumber;
                var city = _accountRepository.GetCurrentCity(user.CityId);
                var governorate = _accountRepository.GetCurrentGovernorate(user.GovernorateId);
                var Country = _accountRepository.GetCurrentCountry(user.CountryId);


                if (user.IsSupplier == true)
                {
                    //config and send mail to client
                    var messageSupplierBody = $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\"> {fullName} مرحبا&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\">&nbsp; &nbsp;</div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp;<span style=\"color: rgb(34, 34, 34); font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 24px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">نهنئك تم تفعيل حسابك بنجاح ونرجوا الاحتفاظ بهذه المعلومات بسريه تامه</span> &nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 12px;\">&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp;<span style=\"color: rgb(34, 34, 34); font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 24px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">&nbsp; &nbsp;وتم ارسال طلب لتفعيل حسابك كمورد. &nbsp;وسيتم الرد فى القريب العاجل نشكرك لانضامك معنا&nbsp;</span> &nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{userName} :<strong>&nbsp;اسم المستخدم&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{fullName} &nbsp;: &nbsp; <strong>الاسم كامل</strong>&nbsp; &nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{phoneNumber} : &nbsp;<strong>&nbsp;رقم الهاتف&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;{email} &nbsp; : &nbsp;<strong>البريد الالكترونى &nbsp; &nbsp;</strong></span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{Country} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>الدولة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{governorate} &nbsp; : &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المحافظة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{city} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المدينة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><br></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تكن الشخص الموجة له البريد الالكترونى &nbsp;يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>\r\n<p><br></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", email, " معلومات حسابك بمنصة EcoFive", messageSupplierBody);

                    //config and send mail to client
                    var messageSuperAdminBody = $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">مرحبا مدير المنصة&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\">&nbsp; &nbsp;</div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp; مورد جديد بحاجه للمراجعة.&nbsp; يرجى الانتقال للوحه تحكم المنصة ومراجعة البيانات&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 12px;\">&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp;وفيما يلى بيانات المورد الجديد&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{userName} :<strong>&nbsp;اسم المستخدم&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{fullName} &nbsp;: &nbsp; <strong>الاسم كامل</strong>&nbsp; &nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{phoneNumber} : &nbsp;<strong>&nbsp;رقم الهاتف&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;{email} &nbsp; : &nbsp;<strong>البريد الالكترونى &nbsp; &nbsp;</strong></span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{Country} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>الدولة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{governorate} &nbsp; : &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المحافظة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{city} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المدينة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><br></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تكن الشخص الموجة له البريد الالكترونى&nbsp; يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>\r\n<p><br></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", "agmghazi@hotmail.com", " طلب انضمام مورد جديد EcoFive", messageSuperAdminBody);
                }
                else if (user.IsCaptain == true)
                {
                    //config and send mail to client
                    var messageSupplierBody = $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\"> {fullName} مرحبا&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\">&nbsp; &nbsp;</div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp;<span style=\"color: rgb(34, 34, 34); font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 24px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">نهنئك تم تفعيل حسابك بنجاح ونرجوا الاحتفاظ بهذه المعلومات بسريه تامه</span> &nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 12px;\">&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp;<span style=\"color: rgb(34, 34, 34); font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 24px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">&nbsp; &nbsp;وتم ارسال طلب لتفعيل حسابك ككابتن. &nbsp;وسيتم الرد فى القريب العاجل نشكرك لانضامك معنا&nbsp;</span> &nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{userName} :<strong>&nbsp;اسم المستخدم&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{fullName} &nbsp;: &nbsp; <strong>الاسم كامل</strong>&nbsp; &nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{phoneNumber} : &nbsp;<strong>&nbsp;رقم الهاتف&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;{email} &nbsp; : &nbsp;<strong>البريد الالكترونى &nbsp; &nbsp;</strong></span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{Country} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>الدولة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{governorate} &nbsp; : &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المحافظة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{city} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المدينة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><br></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تكن الشخص الموجة له البريد الالكترونى &nbsp;يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>\r\n<p><br></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", email, " معلومات حسابك بمنصة EcoFive", messageSupplierBody);

                    //config and send mail to client
                    var messageSuperAdminBody = $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">مرحبا مدير المنصة&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\">&nbsp; &nbsp;</div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp; كابتن جديد بحاجه للمراجعة.&nbsp; يرجى الانتقال للوحه تحكم المنصة ومراجعة البيانات&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 12px;\">&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp;وفيما يلى بيانات الكابتن الجديد&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{userName} :<strong>&nbsp;اسم المستخدم&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{fullName} &nbsp;: &nbsp; <strong>الاسم كامل</strong>&nbsp; &nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{phoneNumber} : &nbsp;<strong>&nbsp;رقم الهاتف&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;{email} &nbsp; : &nbsp;<strong>البريد الالكترونى &nbsp; &nbsp;</strong></span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{Country} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>الدولة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{governorate} &nbsp; : &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المحافظة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style='color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>{city} &nbsp; &nbsp;: &nbsp;</span><strong style='font-weight: 700; color: rgb(0, 0, 0); font-family: \"Times New Roman\"; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>المدينة &nbsp; &nbsp;</strong>&nbsp;</p>\r\n                <p style=\"text-align: right; line-height: 1;\"><br></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تكن الشخص الموجة له البريد الالكترونى&nbsp; يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>\r\n<p><br></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", "agmghazi@hotmail.com", " طلب انضمام كابتن جديد EcoFive", messageSuperAdminBody);
                }
                else
                {
                    //config and send mail to client
                    var clientMessageBody = $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\"> {fullName} مرحبا&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\">&nbsp; &nbsp;</div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp; نهنئك تم تفعيل حسابك بنجاح ونرجوا الاحتفاظ بهذه المعلومات بسريه تامه&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{userName} :<strong>&nbsp;اسم المستخدم&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{fullName} &nbsp;: &nbsp; <strong>الاسم كامل</strong>&nbsp; &nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{phoneNumber} : &nbsp;<strong>&nbsp;رقم الهاتف&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;{email} &nbsp; : &nbsp;<strong>البريد الالكترونى&nbsp; &nbsp;&nbsp;</strong></span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تقم بعمليه تاكيد البريد الالكترونى &nbsp;يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>\r\n<p><br></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", email, " معلومات حسابك بمنصة EcoFive", clientMessageBody);

                }

                return View();
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

                    //send mail
                    var fullName = user.FirstName + " " + user.LastName;
                    var userName = user.UserName;
                    var email = user.Email;
                    var phoneNumber = user.PhoneNumber;
                    var city = _accountRepository.GetCurrentCity(user.CityId);
                    var governorate = _accountRepository.GetCurrentGovernorate(user.GovernorateId);
                    var Country = _accountRepository.GetCurrentCountry(user.CountryId);
                    // Build the password reset link
                    var passwordResetLink = Url.Action("ResetPassword", "Account",
                        new { email = model.Email, token = token }, Request.Scheme);

                    var messageBody = $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\"> {fullName} مرحبا&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp;. {model.Email} &nbsp;وصلنا طلب لتغير كلمه المرور الخاصة بالاميل&nbsp;</span></p>\r\n                <div style=\"text-align: center;\"><br></div>\r\n                <div style=\"text-align: center;\"><br></div>\r\n                <div data-empty=\"true\" style=\"text-align: center;\"><span style=\"color: rgb(97, 189, 109); font-family: Arial; font-size: 30px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(239, 239, 239); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;\">&nbsp;</span><a href=\"{passwordResetLink}\" rel=\"noopener noreferrer\" target=\"_blank\"><span style='color: rgb(97, 189, 109); font-family: \"Arial Black\", Gadget, sans-serif; font-size: 30px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(239, 239, 239); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>&lt;&lt; للتغير اضغط هنا</span><span style=\"font-family: 'Arial Black', Gadget, sans-serif;\"><span style=\"color: rgb(97, 189, 109);\">&nbsp;<br></span></span></a></div>\r\n                <p style=\"text-align: center;\"><span style=\"font-size: 22px;\">اذا واجهك اى مشكله بتغير كلمه المرور من خلال الضغط على الزر اعلاه يرجى نسخ الرابط بالاسفل ولصق داخل المتصفح</span></p>\r\n                <p style=\"text-align: center;\"><a href=\"//{passwordResetLink}\">{passwordResetLink}</a></p>\r\n                <p style=\"text-align: center;\"><br></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp; تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تقم بعمليه تغير كلمه المرور&nbsp; يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>";

                    SendMailModel.SendMail("gis.csharp@gmail.com", model.Email, " تغير كلمه مرور حسابك بمنصة EcoFive", messageBody);

                    if (model.IsSendDetails == true)
                    {
                        //config and send mail to client
                        var messageSupplierBody = $"<p><span style=\"font-size: 30px;\"><strong><span style=\"color: rgb(65, 168, 95);\">Eco Five</span></strong></span></p>\r\n<table style=\"width: 100%; border-collapse: collapse; border: 2px solid rgb(0, 0, 0);\">\r\n    <tbody>\r\n        <tr>\r\n            <td style=\"width: 100%; border: 2px solid rgb(0, 0, 0);\">\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\"> {fullName} مرحبا&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><br></div>\r\n                <div style=\"text-align: right;\">&nbsp; &nbsp;</div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 24px;\">&nbsp; &nbsp; &nbsp;تم ارسال هذه البيانات بناءا على طلبك. نرجوا الاحتفاظ بهذه المعلومات بسريه تامه&nbsp;</span></div>\r\n                <div style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;</span></div>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{userName} :<strong>&nbsp;اسم المستخدم&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{fullName} &nbsp;: &nbsp; <strong>الاسم كامل</strong>&nbsp; &nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">{phoneNumber} : &nbsp;<strong>&nbsp;رقم الهاتف&nbsp;</strong>&nbsp; &nbsp;</span></p>\r\n                <p style=\"text-align: right;\"><span style=\"font-size: 20px;\">&nbsp;{email} &nbsp; : &nbsp;<strong>البريد الالكترونى &nbsp; &nbsp;</strong></span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"font-size: 22px; line-height: 1;\">&nbsp;تحياتنا&nbsp;</span></p>\r\n                <p style=\"text-align: right; line-height: 1;\"><span style=\"line-height: 1;\"><span style=\"font-size: 22px;\">&nbsp; فريق العمل&nbsp;</span></span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"font-size: 19px; line-height: 1; color: rgb(163, 143, 132);\">اذا لم تقم بعمليه تغير كلمه المرور &nbsp;يرجى اهمال البريد الالكترونى وحذفه نهائيا</span></p>\r\n                <p style=\"text-align: center; line-height: 1;\"><span style=\"color: rgb(163, 143, 132);\"><span style=\"line-height: 1;\"><span style=\"font-size: 19px;\">نشكركم لتعاونكم معنا</span><br></span></span></p>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<p style=\"text-align: center;\"><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/facebook-new.png\"></a><a href=\"http://www.google.com\" rel=\"noopener noreferrer\" target=\"_blank\"><img src=\"https://img.icons8.com/fluent/48/000000/twitter.png\"></a></p>\r\n<p><br></p>";

                        SendMailModel.SendMail("gis.csharp@gmail.com", email, " معلومات حسابك بمنصة EcoFive", messageSupplierBody);
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
                if (ModelState.IsValid)
                {
                    if (!_validatorService.HasRequestValidCaptchaEntry(Language.English, DisplayMode.ShowDigits))
                    {
                        this.ModelState.AddModelError(DNTCaptchaTagHelper.CaptchaInputName, "الرجاء إدخال رمز التحقق الصحيح");
                        return View();
                    }
                }

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
                    else
                    {
                        this.ModelState.AddModelError("", "تصريح الدخول غير صحيح");

                    }
                    //foreach (var error in result.Errors)
                    //{
                    //    ModelState.AddModelError("", error.Description);
                    //}
                    return View(model);
                }

                return View("ResetPasswordConfirmation");
            }
            return View(model);
        }

        [HttpGet]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public async Task<IActionResult> ChangeCurrentProfile()
        {
            var user = await _userManager.GetUserAsync(User);

            ViewBag.Countries = _accountRepository.GetAllCountries();

            ViewBag.Governorate = _accountRepository.GetGovernorate(user.CountryId);

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
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                PhoneNumber = user.PhoneNumber,
                VisaName = user.VisaName,
                VisaDate = user.VisaDate,
                VisaNumber = user.VisaNumber,
                VisaPassword = user.VisaPassword,
                LocationLatitude = user.LocationLatitude,
                LocationLongitude = user.LocationLongitude
            };

            return View(model);
        }

        [HttpPost]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public async Task<IActionResult> ChangeCurrentProfile(ChangeCurrentProfileViewModel model)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return RedirectToAction("Login");
            }

            ViewBag.Countries = _accountRepository.GetAllCountries();

            ViewBag.City = _accountRepository.GetCity(user.GovernorateId);
            ViewBag.Governorate = _accountRepository.GetGovernorate(user.CountryId);


            if (ModelState.IsValid)
            {
                ViewBag.Countries = _accountRepository.GetAllCountries();

                ViewBag.City = _accountRepository.GetCity(user.GovernorateId);
                ViewBag.Governorate = _accountRepository.GetGovernorate(user.CountryId);



                user.CityId = model.CityId;
                user.CountryId = model.CountryId;
                user.GovernorateId = model.GovernorateId;
                user.Email = model.Email;
                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.UserName = model.UserName;
                user.PhoneNumber = model.PhoneNumber;
                user.VisaName = model.VisaName;
                user.VisaDate = model.VisaDate;
                user.VisaNumber = model.VisaNumber;
                user.VisaPassword = model.VisaPassword;
                user.LocationLongitude = model.LocationLongitude;
                user.LocationLatitude = model.LocationLatitude;

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

        [HttpGet]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public IActionResult ChangePassword(string id)
        {
            return View();
        }

        [HttpPost]
        [Authorize(Roles = "SuperAdmin,Admin")]
        public async Task<IActionResult> ChangePassword(ChangePasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByIdAsync(model.Id);

                if (user == null)
                {
                    return RedirectToAction("Login");
                }

                var token = await _userManager.GeneratePasswordResetTokenAsync(user);

                await _userManager.ResetPasswordAsync(user, token, model.NewPassword);

                return View("ChangePasswordConfirmation");
            }

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
