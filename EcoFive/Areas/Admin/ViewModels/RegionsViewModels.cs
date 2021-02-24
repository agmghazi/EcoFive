using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class RegionsViewModels
    {
        [Required(ErrorMessage = "يرجى ادخال المدينة")]
        [Display(Name = "المدينة")]
        public int CityId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال الدوله")]
        [Display(Name = "الدوله")]
        public int CountryId { get; set; }

        [Required(ErrorMessage = "يرجى ادخال المحافظة")]
        [Display(Name = "المحافظة")]
        public int GovernorateId { get; set; }

    }
}
