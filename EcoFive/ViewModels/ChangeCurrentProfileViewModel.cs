using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class ChangeCurrentProfileViewModel
    {
        [Display(Name = "البريد الالكترونى")]
        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى")]
        [EmailAddress]
        //[ValidEmailDomain(allowedDomain: "gis.com",
        //    ErrorMessage = "Email Domain must be gis.com")]
        public string Email { get; set; }

        [Required(ErrorMessage = "يرجى اسم المستخدم")]
        [Display(Name = "اسم المستخدم")]
        [Remote(action: "IsUserCangeCurrentInUse", controller: "Account","Admin")]
        public string UserName { get; set; }


        [Required(ErrorMessage = "يرجى ادخال الاسم كامل")]
        [Display(Name = "الاسم كامل")]
        public string FullName { get; set; }

        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "يرجى ادخال رقم الهاتف بشكل صحيح 0531234564")]
        [Required(ErrorMessage = "يرجى ادخال رقم الهاتف ")]
        [Display(Name = "رقم الهاتف")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المدينة")]
        [Display(Name = "المدينة")]
        public int CityId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال الدوله")]
        [Display(Name = "الدوله")]
        public int CountryId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المحافظة")]
        [Display(Name = "المحافظة")]
        public int GovernorateId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال كلمه المرور الحالية ")]
        [Display(Name = "كلمه المرور الحالية")]
        [DataType(DataType.Password)]
        public string CurrentPassword { get; set; }

        [Display(Name = "كلمه المرور الجديدة")]
        [DataType(DataType.Password)]
        [StringLength(
            maximumLength: 100,
            ErrorMessage = " يجب ان لا تزيد عن100 احرف ولا تقل عن 100 حرف",
            MinimumLength = 6)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$",
            ErrorMessage = @"خطأ. يجب أن تحتوي كلمة المرور على حرف كبير وحرف خاص واحد وحرف رقمي واحد ، لا يمكن أن يبدأ بحرف خاص أو رقم")]

        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "تاكيد كلمه المرور الجديدة")]
        [Compare("NewPassword", ErrorMessage =
            "كلمه المرور يجب ان تطابق تاكيد كلمه المرور")]
        public string ConfirmPassword { get; set; }

        public IFormFile PhotoPath { get; set; }

    }
}
