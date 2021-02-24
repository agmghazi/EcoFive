using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.ViewModels
{
    public class ContactViewModel
    {
        [Display(Name = "الاسم")]
        [Required(ErrorMessage = "يرجى ادخال الاسم")]
        public string Name { get; set; }

        [Display(Name = "رقم الهاتف")]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "يرجى ادخال رقم الهاتف بشكل صحيح 0531234564")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى ")]
        [Display(Name = "البريد الالكترونى")]
        [EmailAddress(ErrorMessage = "يرجى ان يكون المدخل بريد الالكترونى")]
        public string Email { get; set; }

        [Display(Name = "الرساله")]
        [Required(ErrorMessage = "يرجى ادخال الرساله")]
        public string Message { get; set; }

    }
}
