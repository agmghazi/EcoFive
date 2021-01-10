using System;
using System.Collections.Generic;
using System.Text;

namespace EcoFive.Models.Models
{
    public class FileViewModel
    {
        public string FileName { get; set; }
        public DateTime lastModified { get; set; }
        public DateTime FileCreateDate { get; set; }

    }
}
