﻿using System;
using System.Collections.Generic;
using System.Text;

namespace EcoFive.Models.Models
{
   public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }

        public DateTime DateTime { get; set; }
    }
}
