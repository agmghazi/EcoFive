using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class ResetPasswordViewModel
    {
        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى ")]
        [EmailAddress(ErrorMessage = "يرجى ان يكون المدخل بريد الالكترونى")]
        [Display(Name = "البريد الالكترونى")]
        public string Email { get; set; }

        [Required(ErrorMessage = "يرجى ادخال كلمه المرور الجديدة ")]
        [Display(Name = "كلمه المرور الجديدة")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "تاكيد كلمه المرور الجديدة")]
        [Compare("Password", ErrorMessage =
            "كلمه المرور يرجى ان تطابق تاكيد كلمه المرور")]
        public string ConfirmPassword { get; set; }

        public string Token { get; set; }
    }

}
