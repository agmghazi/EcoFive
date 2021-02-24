using EcoFive.Models.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EcoFive.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "SuperAdmin")]
    public class RegionsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IAccountRepository _accountRepository;

        public RegionsController(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            ViewBag.Countries = _accountRepository.GetAllCountries();


            return View();
        }

    }
}
