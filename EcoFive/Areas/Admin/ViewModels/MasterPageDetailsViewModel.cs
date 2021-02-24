using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class MasterPageDetailsViewModel
    {
        [DisplayName("رابط الفيسبوك")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string FacebookAccount { get; set; }

        [DisplayName("رابط تويتر")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string TwitterAccount { get; set; }

        [DisplayName("رابط يوتيوب")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string YoutubeAccount { get; set; }

        [DisplayName("رابط انستجرام")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string InstagramAccount { get; set; }

        [DisplayName("رقم الجوال")]
        [Required(ErrorMessage = "يرجى ادخال رقم الجوال")]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "يرجى ادخال رقم الهاتف بشكل صحيح 0531234564")]
        public string CompanyPhone { get; set; }

        [DisplayName("رقم الهاتف")]
        [Required(ErrorMessage = "يرجى ادخال رقم الهاتف")]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "يرجى ادخال رقم الهاتف بشكل صحيح 0531234564")]
        public string CompanyLinePhone { get; set; }

        [DisplayName("عنوان الشركه")]
        [StringLength(48, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 48 حرف")]
        public string CompanyDetails { get; set; }

        [DisplayName("البريد الالكترونى")]
        [DataType(DataType.EmailAddress, ErrorMessage = "يرجى ان يكون بريد الكترونى ")]
        public string CompanyMail { get; set; }

        [DisplayName("ساعات العمل")]
        [StringLength(48, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 48 حرف")]
        public string CompanyWorkHours { get; set; }

        [DisplayName("عنوان الرابط الاول")]
        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        public string Link1Title { get; set; }

        [DisplayName("الرابط الاول")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link1 { get; set; }

        [DisplayName("عنوان الرابط الثانى")]
        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        public string Link2Title { get; set; }

        [DisplayName("الرابط الثانى")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link2 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط الثالث")]
        public string Link3Title { get; set; }

        [DisplayName("الرابط الثالث")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link3 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط الرابع")]
        public string Link4Title { get; set; }

        [DisplayName("الرابط الرابع")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link4 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط الخامس")]
        public string Link5Title { get; set; }

        [DisplayName("الرابط الخامس")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link5 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط السادس")]
        public string Link6Title { get; set; }

        [DisplayName("الرابط السادس")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link6 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط السابع")]
        public string Link7Title { get; set; }

        [DisplayName("الرابط السابع")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link7 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط الثامن")]
        public string Link8Title { get; set; }

        [DisplayName("الرابط الثامن")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link8 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط التاسع")]
        public string Link9Title { get; set; }

        [DisplayName("الرابط التاسع")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link9 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط العاشر")]
        public string Link10Title { get; set; }

        [DisplayName("الرابط العاشر")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link10 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط الحادى عشر")]
        public string Link11Title { get; set; }

        [DisplayName("الرابط الحادى عشر")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link11 { get; set; }

        [StringLength(19, ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 19 حرف")]
        [DisplayName("عنوان الرابط الثانى عشر")]
        public string Link12Title { get; set; }

        [DisplayName("الرابط الثانى عشر")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string Link12 { get; set; }

        [StringLength(23,ErrorMessage = "يرجى ان لا تزيد عدد الاحرف عن 23 حرف")]
        [DisplayName("عنوان الاعلان العلوى")]
        public string PromoTitle { get; set; }

        [DisplayName("رابط الاعلان العلوى")]
        [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "https://www.any.com/ يرجى ان يكون المدخل رابط مثال")]
        public string PromoTitleURL { get; set; }
    }
}
