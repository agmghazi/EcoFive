using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcoFive.Models.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int CountryId { get; set; }

        [ForeignKey("CountryId")]
        public Country Country { get; set; }

        public int CityId { get; set; }

        [ForeignKey("CityId")]
        public City City { get; set; }

        public int GovernorateId { get; set; }

        [ForeignKey("GovernorateId")]
        public Governorate Governorate { get; set; }

        public string FullName { get; set; }

        public bool CloseAccount { get; set; }
        public bool IsSupplier { get; set; }

        public string PhotoPath { get; set; }

        public bool IsCaptain { get; set; }

        public int VisaNumber { get; set; }
        public DateTime VisaDate { get; set; }
        public int VisaPassword { get; set; }
        public string VisaName { get; set; }
    }
}