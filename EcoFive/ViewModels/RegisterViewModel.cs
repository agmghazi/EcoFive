using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class RegisterViewModel
    {
        [Display(Name = "البريد الالكترونى")]
        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى")]
        [EmailAddress]
        [Remote(action: "IsEmailInUse", controller: "Account")]
        //[ValidEmailDomain(allowedDomain: "gis.com",
        //    ErrorMessage = "Email Domain must be gis.com")]
        public string Email { get; set; }

        [Display(Name = "كلمه المرور")]
        [Required(ErrorMessage = "يرجى ادخال كلمه المرور")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "يرجى ادخال تاكيد كلمه المرور")]
        [Display(Name = "تأكد كلمه المرور")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "تاكيد كلمه المرور يجب ان يطابق كلمه المرور")]
        public string ConfirmPassword { get; set; }

        [Display(Name = "المدينة")]
        public string City { get; set; }
    }
}
