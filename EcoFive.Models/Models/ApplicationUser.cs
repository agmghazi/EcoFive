using Microsoft.AspNetCore.Identity;
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
        public bool Supplier { get; set; }

        public string PhotoPath { get; set; }
    }
}