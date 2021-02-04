using EcoFive.Models.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "SuperAdmin,Admin")]
    public class HomeController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly AppDbContext _context;
        private readonly IStringLocalizer<HomeController> _localizer;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public HomeController(AppDbContext context,
            IStringLocalizer<HomeController> localizer,
            RoleManager<IdentityRole> roleManager,
            UserManager<ApplicationUser> userManager
        )
        {
            _context = context;
            _localizer = localizer;
            _roleManager = roleManager;
            _userManager = userManager;
        }
        public async Task<IActionResult> Index()
        {

            var RolesList = _roleManager.Roles.OrderBy(x => x.Name).ToList();

            IList<ApplicationUser> adminRoleCount = new List<ApplicationUser>();
            IList<ApplicationUser> superAdminRoleCount = new List<ApplicationUser>();

            foreach (var role in RolesList)
            {
                var RolesUserlist = await _userManager.GetUsersInRoleAsync(role.Name);
                if (role.Name == "Admin")
                {
                    adminRoleCount = RolesUserlist;
                }
                else if (role.Name == "SuperAdmin")
                {
                    superAdminRoleCount = RolesUserlist;
                }
            }

            var uerRoleCount = _userManager.Users.Count() - (superAdminRoleCount.Count + adminRoleCount.Count);
            ViewBag.userRoleCont = uerRoleCount;
            ViewBag.superAdminRoleCont = superAdminRoleCount.Count();
            ViewBag.adminRoleCount = adminRoleCount.Count();

            ViewBag.Message = _localizer["يمكنك الانتقال من هنا"];
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult SetLanguage(string culture, string returnUrl)
        {
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture)),
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddDays(1) }
            );

            return LocalRedirect(returnUrl);
        }

    }
}
