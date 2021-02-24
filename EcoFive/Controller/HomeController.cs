using System;
using DNTCaptcha.Core;
using DNTCaptcha.Core.Providers;
using EcoFive.Models.Models;
using EcoFive.Models.Repository;
using EcoFive.UI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;

namespace EcoFive.UI.Controller
{
    [AllowAnonymous]
    public class HomeController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IContactRepository _contactRepository;
        private readonly IDNTCaptchaValidatorService _validatorService;

        public HomeController(IContactRepository contactRepository, IDNTCaptchaValidatorService validatorService)
        {
            _contactRepository = contactRepository;
            _validatorService = validatorService;
        }

        public IActionResult Index()
        {

            return View();
        }

       public IActionResult Contact()
        {

            return View();
        }

       [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (!_validatorService.HasRequestValidCaptchaEntry(Language.English, DisplayMode.ShowDigits))
                {
                    this.ModelState.AddModelError(DNTCaptchaTagHelper.CaptchaInputName, "الرجاء إدخال كلمة التحقق الصحيحة");
                    return View();
                }
                Contact contact = new Contact
                {
                    Email = model.Email,
                    Name = model.Name,
                    PhoneNumber = model.PhoneNumber,
                    Message = model.Message,
                    DateTime = DateTime.Now
                };
                _contactRepository.Add(contact);

                ViewBag.Message = "تم ارسال الرسالة بنجاح";
            }

            return View(model);
        }

        [HttpGet]
        public IActionResult Chat()
        {

            return View();
        }

    }
}
