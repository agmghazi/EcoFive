using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class MFAViewModel
    {
        [Required(ErrorMessage = "يرجى ادخال كود التفعيل")]
        public string Token { get; set; }

        [Display(Name = "كود التحقق")]
        [Required(ErrorMessage = "يرجى ادخال الكود")]
        public string Code { get; set; }

        public string QRCodeUrl { get; set; }
        public bool SwitchMFA { get; set; }
        public bool CheckMFA { get; set; }

    }
}
