using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class CreateRoleViewModel
    {
        [Display(Name = "اسم الدور")]
        [Required(ErrorMessage = "يرجى ادخال اسم الدور")]
        public string RoleName { get; set; }
    }
}
