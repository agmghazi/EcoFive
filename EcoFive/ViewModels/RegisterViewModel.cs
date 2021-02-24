using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class RegisterViewModel
    {
        [Display(Name = "البريد الالكترونى")]
        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى")]
        [EmailAddress(ErrorMessage = "ahmed@gmail.com يرجى الادخال بدون مسافات كالتالى ")]
        [Remote(action: "IsEmailInUse", controller: "Account", "Admin")]
        //[ValidEmailDomain(allowedDomain: "gis.com",
        //    ErrorMessage = "Email Domain must be gis.com")]
        public string Email { get; set; }

        [Display(Name = "كلمه المرور")]
        [Required(ErrorMessage = "يرجى ادخال كلمه المرور")]
        [DataType(DataType.Password)]
        [StringLength(
            maximumLength: 100,
            ErrorMessage = " يرجى ان لا تزيد عن 100 احرف ولا تقل عن 6 حرف",
            MinimumLength = 6)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$", ErrorMessage = @"خطأ. يرجى أن تحتوي كلمة المرور على حرف كبير وحرف خاص واحد وحرف رقمي واحد ، لا يمكن أن يبدأ بحرف خاص أو رقم")]

        public string Password { get; set; }

        [Required(ErrorMessage = "يرجى ادخال تاكيد كلمه المرور")]
        [Display(Name = "تأكيد كلمه المرور")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "تاكيد كلمه المرور يرجى ان يطابق كلمه المرور")]
        public string ConfirmPassword { get; set; }


        [Required(ErrorMessage = "يرجى اسم المستخدم")]
        [Remote(action: "IsUserInUse", controller: "Account", "Admin")]
        [Display(Name = "اسم الستخدم")]
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

        [Required(ErrorMessage = "يرجى ادخال الدولة")]
        [Display(Name = "الدولة")]
        public int CountryId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المحافظة")]
        [Display(Name = "المحافظة")]
        public int GovernorateId { get; set; }

        public bool IsSupplier { get; set; }
        public bool IsCaptain { get; set; }
    }
}
