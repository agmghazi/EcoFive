using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى ")]
        [EmailAddress(ErrorMessage = "يرجى ان يكون بريد الالكترونى")]
        [Display(Name = "البريد الالكترونى")]
        public string Email { get; set; }

        public bool IsSendDetails { get; set; }
    }
}
