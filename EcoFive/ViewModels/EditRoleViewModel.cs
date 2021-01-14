using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class EditRoleViewModel
    {
        public EditRoleViewModel()
        {
            Users = new List<string>();
        }
        public string Id { get; set; }

        [Display(Name = "اسم الدور")]
        [Required(ErrorMessage = "يجب ادخال اسم الدور")]
        public string RoleName { get; set; }

        public List<string> Users { get; set; }
    }
}
