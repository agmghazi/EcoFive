﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class EditRoleViewModel
    {
        public EditRoleViewModel()
        {
            Users = new List<string>();
        }
        public string Id { get; set; }

        [Display(Name = "اسم الدور")]
        [Required(ErrorMessage = "يرجى ادخال اسم الدور")]
        public string RoleName { get; set; }

        public List<string> Users { get; set; }
    }
}
