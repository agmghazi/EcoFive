using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class EditUserViewModel
    {
        public EditUserViewModel()
        {
            Claims = new List<string>();
            Roles = new List<string>();
        }
        public string Id { get; set; }

        [Required(ErrorMessage = "يرجى ادخال اسم المستخدم")]
        [Display(Name = "اسم المستخدم")]
        public string UserName { get; set; }


        [Required(ErrorMessage = "يرجى ادخال الاميل الخاص بكم")]
        [EmailAddress(ErrorMessage = "يجب ان يكون المدخل اميل")]
        [Display(Name = "البريد الالكترونى")]
        public string Email { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المدينة")]
        [Display(Name = "المدينة")]
        public string City { get; set; }
        public List<string> Claims { get; set; }
        public IList<string> Roles { get; set; }
    }
}
