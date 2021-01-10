using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class ChangePasswordViewModel
    {
        [Required(ErrorMessage = "يرجى ادخال المرور السابقه ")]
        [Display(Name = "كلمه المرور السابقه")]
        [DataType(DataType.Password)]
        public string CurrentPassword { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المرور الجديدة ")]
        [Display(Name = "كلمه المرور الجديدة")]
        [DataType(DataType.Password)]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "تاكيد كلمه المرورالجديدة")]
        [Compare("NewPassword", ErrorMessage =
            "كلمه المرور يجب ان تطابق تاكيد كلمه المرور")]
        public string ConfirmPassword { get; set; }

    }
}
