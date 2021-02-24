using EcoFive.Models.Models.Chatting;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcoFive.Models.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser() : base()
        {
            Chats = new List<ChatUser>();
        }
        public int CountryId { get; set; }

        [ForeignKey("CountryId")]
        public Country Country { get; set; }

        public int CityId { get; set; }

        [ForeignKey("CityId")]
        public City City { get; set; }

        public int GovernorateId { get; set; }

        [ForeignKey("GovernorateId")]
        public Governorate Governorate { get; set; }

        public bool CloseAccount { get; set; }

        public bool IsSupplier { get; set; }

        public string PhotoPath { get; set; }

        public bool IsCaptain { get; set; }

        public string VisaNumber { get; set; }

        public string VisaDate { get; set; }

        public string VisaPassword { get; set; }

        public string VisaName { get; set; }

        public string LocationLongitude { get; set; }

        public string LocationLatitude { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<ChatUser> Chats { get; set; }

    }
}