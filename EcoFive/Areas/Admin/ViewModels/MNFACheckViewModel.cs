using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class MNFACheckViewModel
    {
        [Display(Name ="كود التحقق")]
        [Required(ErrorMessage = "يرجى ادخال الكود")]
        public string Code { get; set; }

        [Required(ErrorMessage ="يرجى تسجيل الدخول اولا")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "يرجى تسجيل الدخول اولا")]
        public bool isRemember { get; set; }
    }
}
