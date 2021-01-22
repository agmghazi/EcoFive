using Microsoft.AspNetCore.Authentication;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class LoginViewModel
    {
        [Display(Name = "اسم المستخدم")]
        [Required(ErrorMessage = "يرجى ادخال اسم المستخدم")]
        public string UserName { get; set; }

        [Display(Name = "كلمه المرور")]
        [Required(ErrorMessage = "يرجى ادخال كلمه المرور")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "تذكرنى")]
        public bool RememberMe { get; set; }

        public string ReturnUrl { get; set; }

        // AuthenticationScheme is in Microsoft.AspNetCore.Authentication namespace
        public IList<AuthenticationScheme> ExternalLogins { get; set; }


    }
}
