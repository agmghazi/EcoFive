using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EcoFive.Models.Models
{
   public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int GovernorateId { set; get; }

        [ForeignKey("GovernorateId")]
        public Governorate Governorate { set; get; }

        public int CountryId { set; get; }

        [ForeignKey("CountryId")]
        public Country Country { set; get; }
    }
}
