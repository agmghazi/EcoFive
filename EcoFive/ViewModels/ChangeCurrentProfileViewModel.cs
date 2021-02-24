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
        [Remote(action: "IsUserCangeCurrentInUse", controller: "Account", "Admin")]
        public string UserName { get; set; }


        [Required(ErrorMessage = "يرجى ادخال الاسم الاول")]
        [Display(Name = "الاسم الاول")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "يرجى ادخال الاسم الاخير")]
        [Display(Name = "الاسم الاخير")]
        public string LastName { get; set; }

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
            ErrorMessage = " يرجى ادخال رقم لا يزيد عن 100 احرف ولا تقل عن 6 حرف",
            MinimumLength = 6)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$",
            ErrorMessage = @"خطأ. يرجى أن تحتوي كلمة المرور على حرف كبير وحرف خاص واحد وحرف رقمي واحد ، لا يمكن أن يبدأ بحرف خاص أو رقم")]

        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "تاكيد كلمه المرور الجديدة")]
        [Compare("NewPassword", ErrorMessage =
            "كلمه المرور يرجى ان تطابق تاكيد كلمه المرور")]
        public string ConfirmPassword { get; set; }

        public IFormFile PhotoPath { get; set; }

        [StringLength(
            maximumLength: 16,
            ErrorMessage = "يرجى ادخال رقم لا يزيد عن 16 احرف")]
        [Display(Name = "Visa Number")]
        public string VisaNumber { get; set; }

        [Display(Name = "Visa Date")]
        [RegularExpression(@"^((0[1-9])|(1[0-2]))\/(\d{2})$", ErrorMessage = "MM/YY يرجى ادخال التاريخ ")]
        public string VisaDate { get; set; }

        [Display(Name = "Visa Password")]
        public string VisaPassword { get; set; }

        [Display(Name = "Visa Name")]
        public string VisaName { get; set; }


        [Required(ErrorMessage = "يرجى اختيار موقعك من الخريطة")]
        public string LocationLongitude { get; set; }

        public string LocationLatitude { get; set; }

    }
}
