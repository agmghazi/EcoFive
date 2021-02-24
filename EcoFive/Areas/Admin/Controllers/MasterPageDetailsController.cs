using EcoFive.Models.Models;
using EcoFive.Models.Repository;
using EcoFive.UI.Areas.Admin.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EcoFive.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "SuperAdmin")]
    public class MasterPageDetailsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IMasterPageDetailsRepository _masterPageDetailsRepository;

        public MasterPageDetailsController(IMasterPageDetailsRepository masterPageDetailsRepository)
        {
            _masterPageDetailsRepository = masterPageDetailsRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {

            MasterPageDetail details = _masterPageDetailsRepository.GetDetails(1);

            if (details != null)
            {
                MasterPageDetailsViewModel model = new MasterPageDetailsViewModel
                {
                    YoutubeAccount = details.YoutubeAccount,
                    InstagramAccount = details.InstagramAccount,
                    FacebookAccount = details.FacebookAccount,
                    TwitterAccount = details.TwitterAccount,
                    CompanyDetails = details.CompanyDetails,
                    CompanyLinePhone = details.CompanyLinePhone,
                    CompanyPhone = details.CompanyPhone,
                    CompanyMail = details.CompanyMail,
                    CompanyWorkHours = details.CompanyWorkHours,
                    PromoTitle = details.PromoTitle,
                    PromoTitleURL = details.PromoTitleURL,

                    Link1Title = details.Link1Title,
                    Link1 = details.Link1,

                    Link2Title = details.Link2Title,
                    Link2 = details.Link2,

                    Link3Title = details.Link3Title,
                    Link3 = details.Link3,

                    Link4Title = details.Link4Title,
                    Link4 = details.Link4,

                    Link5Title = details.Link5Title,
                    Link5 = details.Link5,

                    Link6Title = details.Link6Title,
                    Link6 = details.Link6,

                    Link7Title = details.Link7Title,
                    Link7 = details.Link7,

                    Link8Title = details.Link8Title,
                    Link8 = details.Link8,

                    Link9Title = details.Link9Title,
                    Link9 = details.Link9,

                    Link10Title = details.Link10Title,
                    Link10 = details.Link10,

                    Link11Title = details.Link11Title,
                    Link11 = details.Link11,

                    Link12Title = details.Link12Title,
                    Link12 = details.Link12,

                };
                return View(model);
            }

            return View();
        }

        [HttpPost]
        public IActionResult Index(MasterPageDetailsViewModel model)
        {
            if (ModelState.IsValid)
            {
                var details = _masterPageDetailsRepository.GetDetails(1);
                if (details != null)
                {
                    details.YoutubeAccount = model.YoutubeAccount;
                    details.InstagramAccount = model.InstagramAccount;
                    details.FacebookAccount = model.FacebookAccount;
                    details.TwitterAccount = model.TwitterAccount;
                    details.CompanyDetails = model.CompanyDetails;
                    details.CompanyLinePhone = model.CompanyLinePhone;
                    details.CompanyPhone = model.CompanyPhone;
                    details.CompanyMail = model.CompanyMail;
                    details.CompanyWorkHours = model.CompanyWorkHours;
                    details.PromoTitle = model.PromoTitle;
                    details.PromoTitleURL = model.PromoTitleURL;

                    details.Link1Title = model.Link1Title;
                    details.Link1 = model.Link1;

                    details.Link2Title = model.Link2Title;
                    details.Link2 = model.Link2;

                    details.Link3Title = model.Link3Title;
                    details.Link3 = model.Link3;

                    details.Link4Title = model.Link4Title;
                    details.Link4 = model.Link4;

                    details.Link5Title = model.Link5Title;
                    details.Link5 = model.Link5;

                    details.Link6Title = model.Link6Title;
                    details.Link6 = model.Link6;

                    details.Link7Title = model.Link7Title;
                    details.Link7 = model.Link7;

                    details.Link8Title = model.Link8Title;
                    details.Link8 = model.Link8;

                    details.Link9Title = model.Link9Title;
                    details.Link9 = model.Link9;

                    details.Link10Title = model.Link10Title;
                    details.Link10 = model.Link10;

                    details.Link11Title = model.Link11Title;
                    details.Link11 = model.Link11;

                    details.Link12Title = model.Link12Title;
                    details.Link12 = model.Link12;

                    _masterPageDetailsRepository.Update(details);

                    ViewBag.Message = "تم التحديث بنجاح";
                }
                else
                {
                    MasterPageDetail newDetail = new MasterPageDetail
                    {
                        YoutubeAccount = model.YoutubeAccount,
                        InstagramAccount = model.InstagramAccount,
                        FacebookAccount = model.FacebookAccount,
                        TwitterAccount = model.TwitterAccount,
                        CompanyDetails = model.CompanyDetails,
                        CompanyLinePhone = model.CompanyLinePhone,
                        CompanyPhone = model.CompanyPhone,
                        CompanyMail = model.CompanyMail,
                        CompanyWorkHours = model.CompanyWorkHours,
                        PromoTitle = model.PromoTitle,
                        PromoTitleURL = model.PromoTitleURL,

                        Link1Title = model.Link1Title,
                        Link1 = model.Link1,

                        Link2Title = model.Link2Title,
                        Link2 = model.Link2,

                        Link3Title = model.Link3Title,
                        Link3 = model.Link3,

                        Link4Title = model.Link4Title,
                        Link4 = model.Link4,

                        Link5Title = model.Link5Title,
                        Link5 = model.Link5,

                        Link6Title = model.Link6Title,
                        Link6 = model.Link6,

                        Link7Title = model.Link7Title,
                        Link7 = model.Link7,

                        Link8Title = model.Link8Title,
                        Link8 = model.Link8,

                        Link9Title = model.Link9Title,
                        Link9 = model.Link9,

                        Link10Title = model.Link10Title,
                        Link10 = model.Link10,

                        Link11Title = model.Link11Title,
                        Link11 = model.Link11,

                        Link12Title = model.Link12Title,
                        Link12 = model.Link12,
                    };

                    _masterPageDetailsRepository.Add(newDetail);

                    ViewBag.Message = "تم التحديث بنجاح";
                }

            }

            return View(model);
        }
    }
}
