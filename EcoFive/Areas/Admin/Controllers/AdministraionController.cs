using EcoFive.Models.Models;
using EcoFive.Models.Repository;
using EcoFive.UI.ViewModels;
using EmployeeManagments.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EcoFive.UI.Areas.Admin.ViewModels;

namespace EcoFive.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "SuperAdmin")]
    public class AdministraionController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<AdministraionController> _logger;
        private readonly IAccountRepository _accountRepository;

        public AdministraionController(RoleManager<IdentityRole> roleManager,
            UserManager<ApplicationUser> userManager,
            ILogger<AdministraionController> logger,
            IAccountRepository accountRepository)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _logger = logger;
            _accountRepository = accountRepository;
        }

        [HttpGet]
        public IActionResult CreateRole()
        {
            return View();
        }

        //[Authorize(Roles = "Admin,User")]   //to add both role first or last role
        [HttpPost]
        public async Task<IActionResult> CreateRole(CreateRoleViewModel model)
        {
            if (ModelState.IsValid)
            {
                IdentityRole identityRole = new IdentityRole
                {
                    Name = model.RoleName
                };
                IdentityResult result = await _roleManager.CreateAsync(identityRole);

                if (result.Succeeded)
                {
                    return RedirectToAction("ListRoles", "Administraion");
                }
                foreach (IdentityError error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult ListRoles()
        {
            var roles = _roleManager.Roles;
            return View(roles);
        }

        [HttpGet]
        public async Task<IActionResult> EditRole(string id)
        {
            var role = await _roleManager.FindByIdAsync(id);
            if (role == null)
            {
                ViewBag.ErrorMessage = $"{id} لا يوجد دور بالرقم المرجعى";
                return View("NotFound");
            }

            var model = new EditRoleViewModel
            {
                Id = role.Id,
                RoleName = role.Name,
            };
            foreach (var user in _userManager.Users)
            {
                if (await _userManager.IsInRoleAsync(user, role.Name))
                {
                    model.Users.Add(user.UserName);
                }

            }
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> EditRole(EditRoleViewModel model)
        {
            var role = await _roleManager.FindByIdAsync(model.Id);

            if (role == null)
            {
                ViewBag.ErrorMessage = $"{model.Id} لا يوجد دور بالرقم المرجعى  ";
                return View("NotFound");
            }
            else
            {
                role.Name = model.RoleName;
                var result = await _roleManager.UpdateAsync(role);
                if (result.Succeeded)
                {
                    return RedirectToAction("ListRoles");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }

                return View(model);
            }
        }

        [HttpGet]
        public async Task<IActionResult> EditUsersInRole(string roleId)
        {
            ViewBag.roleId = roleId;
            var role = await _roleManager.FindByIdAsync(roleId);
            if (role == null)
            {
                ViewBag.ErrorMessage = $"{roleId} لا يوجد دور بالرقم المرجعى  ";
                return View("NotFound");
            }

            var model = new List<UserRoleViewModel>();
            foreach (var user in _userManager.Users)
            {
                var userRoleViewModel = new UserRoleViewModel
                {
                    UserId = user.Id,
                    UserName = user.UserName
                };
                if (await _userManager.IsInRoleAsync(user, role.Name))
                {
                    userRoleViewModel.IsSelected = true;
                }
                else
                {
                    userRoleViewModel.IsSelected = false;
                }
                model.Add(userRoleViewModel);
            }
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> EditUsersInRole(List<UserRoleViewModel> model, string roleId)
        {
            var role = await _roleManager.FindByIdAsync(roleId);
            if (role == null)
            {
                ViewBag.ErrorMessage = $"{roleId} لا يوجد دور بالرقم المرجعى  ";
                return View("NotFound");
            }

            for (int i = 0; i < model.Count; i++)
            {
                var user = await _userManager.FindByIdAsync(model[i].UserId);
                IdentityResult result = null;
                if (model[i].IsSelected && !(await _userManager.IsInRoleAsync(user, role.Name)))
                {
                    result = await _userManager.AddToRoleAsync(user, role.Name);
                }
                else if (!model[i].IsSelected && await _userManager.IsInRoleAsync(user, role.Name))
                {
                    result = await _userManager.RemoveFromRoleAsync(user, role.Name);

                }
                else
                {
                    continue;
                }

                if (result.Succeeded)
                {
                    if (i < (model.Count - 1))
                    {
                        continue;
                    }
                    else
                    {
                        return RedirectToAction("EditRole", new { Id = roleId });
                    }
                }
            }

            return RedirectToAction("EditRole", new { Id = roleId });
        }

        [HttpGet]
        public IActionResult ListUsers()
        {
            var users = _userManager.Users;

            return View(users);
        }

        [HttpPost]
        public JsonResult AccountStatus(string id)
        {
            var result = _accountRepository.ChangeStatus(id);

            return Json(new
            {
                status = result
            });
        }

        [HttpGet]
        //[Authorize(policy: "EditPolePolicy")]
        public async Task<IActionResult> EditUser(string id)
        {
            var countries = _accountRepository.GetAllCountries();
            ViewBag.Countries = countries;


            var user = await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"{id} لا يوجد مستخدم بالرقم المرجعى  ";
                return View("NotFound");
            }

            var userClaims = await _userManager.GetClaimsAsync(user);
            var userRoles = await _userManager.GetRolesAsync(user);

            ViewBag.City = _accountRepository.GetAllCites();
            ViewBag.Governorate = _accountRepository.GetAllGovernorate();


            var model = new EditUserViewModel
            {
                Id = user.Id,
                Email = user.Email,
                CityId = user.CityId,
                CountryId = user.CountryId,
                GovernorateId = user.GovernorateId,
                PhoneNumber = user.PhoneNumber,
                UserName = user.UserName,
                Roles = userRoles,
                Claims = userClaims.Select(c => c.Type + " : " + c.Value).ToList(),
            };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> EditUser(EditUserViewModel model)
        {
            var countries = _accountRepository.GetAllCountries();
            ViewBag.Countries = countries;

            var user = await _userManager.FindByIdAsync(model.Id);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"{model.Id} لا يوجد مستخدم بالرقم المرجعى";
                return View("NotFound");
            }
            else
            {
                user.Email = model.Email;
                user.UserName = model.UserName;
                user.CityId = model.CityId;
                user.GovernorateId = model.GovernorateId;
                user.CountryId = model.CountryId;
                user.PhoneNumber = model.PhoneNumber;

                var result = await _userManager.UpdateAsync(user);

                if (result.Succeeded)
                {
                    return RedirectToAction("ListUsers");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }

                return View(model);
            }
        }

        [HttpPost]
        public async Task<IActionResult> DeleteUser(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"{id} لا يوجد مستخدم بالرقم المرجعى  ";
                return View("NotFound");
            }
            else
            {
                var result = await _userManager.DeleteAsync(user);

                if (result.Succeeded)
                {
                    return RedirectToAction("ListUsers");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }

                return View("ListUsers");
            }

        }

        [HttpPost]
        //[Authorize(policy: "DeletePolePolicy")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            var role = await _roleManager.FindByIdAsync(id);

            if (role == null)
            {
                ViewBag.ErrorMessage = $"{id} لا يوجد دور بالرقم المرجعى  ";
                return View("NotFound");
            }
            else
            {
                try
                {
                    var result = await _roleManager.DeleteAsync(role);

                    if (result.Succeeded)
                    {
                        return RedirectToAction("ListRoles");
                    }

                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }

                    return View("ListRoles");
                }
                catch (DbUpdateException ex)
                {
                    _logger.LogError($"Exception Occured : {ex}");
                    ViewBag.ErrorTitle = $"{role.Name} الدور المختار لديه مستخدمين";
                    ViewBag.ErrorMessage = $" اذا كنت بحاجه لمسح الدور يرجى حذف المستخدمين اولا";
                    return View("Error");
                }
            }
        }

        [HttpGet]
        //[Authorize(policy: "EditPolePolicy")]
        public async Task<IActionResult> ManageUserRoles(string userId)
        {
            ViewBag.userId = userId;

            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"{userId} لا يوجد مستخدم بالرقم المرجعى  ";
                return View("NotFound");
            }

            var model = new List<UserRolesViewModel>();

            foreach (var role in _roleManager.Roles)
            {
                var userRolesViewModel = new UserRolesViewModel
                {
                    RoleId = role.Id,
                    RoleName = role.Name
                };

                if (await _userManager.IsInRoleAsync(user, role.Name))
                {
                    userRolesViewModel.IsSelected = true;
                }
                else
                {
                    userRolesViewModel.IsSelected = false;
                }

                model.Add(userRolesViewModel);
            }

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult>
            ManageUserRoles(List<UserRolesViewModel> model, string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"{userId} لا يوجد مستخدم بالرقم المرجعى  ";

                return View("NotFound");
            }

            var roles = await _userManager.GetRolesAsync(user);
            var result = await _userManager.RemoveFromRolesAsync(user, roles);

            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "لا يمكن إزالة الأدوار الحالية للمستخدم");
                return View(model);
            }

            result = await _userManager.AddToRolesAsync(user,
                model.Where(x => x.IsSelected).Select(y => y.RoleName));

            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "لا يمكن إضافة الأدوار المحددة للمستخدم");
                return View(model);
            }

            return RedirectToAction("EditUser", new { Id = userId });
        }

        [HttpGet]
        public async Task<IActionResult> ManageUserClaims(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"{userId} لا يوجد مستخدم بالرقم المرجعى  ";
                return View("NotFound");
            }

            var existingUserClaims = await _userManager.GetClaimsAsync(user);

            var model = new UserClaimsViewModel
            {
                UserId = userId
            };

            foreach (Claim claim in ClaimsStore.AllClaims)
            {
                UserClaim userClaim = new UserClaim
                {
                    ClaimType = claim.Type
                };

                if (existingUserClaims.Any(c => c.Type == claim.Type && c.Value == "true"))
                {
                    userClaim.IsSelected = true;
                }

                model.Cliams.Add(userClaim);
            }

            return View(model);

        }

        [HttpPost]
        public async Task<IActionResult> ManageUserClaims(UserClaimsViewModel model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId);

            if (user == null)
            {
                ViewBag.ErrorMessage = $"{model.UserId} لا يوجد مستخدم بالرقم المرجعى  ";
                return View("NotFound");
            }

            var claims = await _userManager.GetClaimsAsync(user);
            var result = await _userManager.RemoveClaimsAsync(user, claims);

            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "لايمكن ازاله الادوار الفرعية للمستخدم");
                return View(model);
            }

            result = await _userManager.AddClaimsAsync(user,
                model.Cliams.Select(c => new Claim(c.ClaimType, c.IsSelected ? "true" : "false")));

            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "لايمكن اضافه الدور الفرعى للمستخدم");
                return View(model);
            }

            return RedirectToAction("EditUser", new { Id = model.UserId });

        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult AccessDenied()
        {
            return View();
        }
    }
}
