using EcoFive.Models.Models;
using Microsoft.AspNetCore.Mvc;

namespace EcoFive.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class HomeController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }

    }
}
