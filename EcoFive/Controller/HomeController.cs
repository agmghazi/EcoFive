using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;

namespace EcoFive.UI.Controller
{
    [AllowAnonymous]
    public class HomeController : Microsoft.AspNetCore.Mvc.Controller
    {

        public IActionResult Index()
        {

            return View();
        }

    }
}
