using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class ResetPasswordViewModel
    {
        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى الخاص بكم")]
        [EmailAddress(ErrorMessage = "يجب ان يكون المدخل بريد الالكترونى")]
        public string Email { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المرور الجديدة ")]
        [Display(Name = "كلمه المرور الجديدة")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "تاكيد كلمه المرور الجديدة")]
        [Compare("Password", ErrorMessage =
            "كلمه المرور يجب ان تطابق تاكيد كلمه المرور")]
        public string ConfirmPassword { get; set; }

        public string Token { get; set; }
    }

}
