using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.ViewModels
{
    public class RegisterViewModel
    {
        [Display(Name = "البريد الالكترونى")]
        [Required(ErrorMessage = "يرجى ادخال البريد الالكترونى")]
        [EmailAddress]
        [Remote(action: "IsEmailInUse", controller: "Account")]
        //[ValidEmailDomain(allowedDomain: "gis.com",
        //    ErrorMessage = "Email Domain must be gis.com")]
        public string Email { get; set; }

        [Display(Name = "كلمه المرور")]
        [Required(ErrorMessage = "يرجى ادخال كلمه المرور")]
        [DataType(DataType.Password)]
        [StringLength(
            maximumLength: 100,
            ErrorMessage = " يجب ان لا تزيد عن100 احرف ولا تقل عن 100 حرف",
            MinimumLength = 6)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$", ErrorMessage = @"خطأ. يجب أن تحتوي كلمة المرور على حرف كبير وحرف خاص واحد وحرف رقمي واحد ، لا يمكن أن يبدأ بحرف خاص أو رقم")]

        public string Password { get; set; }

        [Required(ErrorMessage = "يرجى ادخال تاكيد كلمه المرور")]
        [Display(Name = "تأكد كلمه المرور")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "تاكيد كلمه المرور يجب ان يطابق كلمه المرور")]
        public string ConfirmPassword { get; set; }


        [Required(ErrorMessage = "يرجى اسم المستخدم")]
        [Remote(action: "IsUserInUse", controller: "Account")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "يرجى ادخال الاسم الاول")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "يرجى ادخال الاسم الاخير")]
        public string LastName { get; set; }

        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "يرجى ادخال رقم الهاتف بشكل صحيح 0531234564")]
        [Required(ErrorMessage = "يرجى ادخال رقم الهاتف ")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المدينة")]
        [Display(Name = "المدينة")]
        public int CityId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال الدوله")]
        public int CountryId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المحافظة")]
        public int GovernorateId { get; set; }

        public bool Supplier { get; set; }
    }
}
