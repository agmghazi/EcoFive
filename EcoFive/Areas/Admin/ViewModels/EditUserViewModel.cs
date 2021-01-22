using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.Areas.Admin.ViewModels
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

        public List<string> Claims { get; set; }
        public IList<string> Roles { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المدينة")]
        [Display(Name = "المدينة")]
        public int CityId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال الدوله")]
        public int CountryId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المحافظة")]
        public int GovernorateId { get; set; }

        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "يرجى ادخال رقم الهاتف بشكل صحيح 0531234564")]
        [Required(ErrorMessage = "يرجى ادخال رقم الهاتف ")]
        public string PhoneNumber { get; set; }

    }
}
