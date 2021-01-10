using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required(ErrorMessage = "يرجى ادخال الاميل الخاص بكم")]
        [EmailAddress(ErrorMessage = "يجب ان يكون المدخل اميل")]
        [Display(Name = "البريد الالكترونى")]
        public string Email { get; set; }
    }
}
