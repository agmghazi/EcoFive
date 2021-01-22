using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EcoFive.Models.Models
{
    public class Governorate
    {
        public int Id { get; set; }
        public string Name { get; set; }


        public int CountryId { get; set; }

        [ForeignKey("CountryId")]
        public Country Country { get; set; }
    }
}
