using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class CreateRoleViewModel
    {
        [Required]
        public string RoleName { get; set; }
    }
}
