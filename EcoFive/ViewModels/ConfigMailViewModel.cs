using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace EcoFive.UI.ViewModels
{
    public class ConfigMailViewModel
    {
       
        public string To { get; set; }

        public string CC { get; set; }
        public string Subject { get; set; }

        public string Body { get; set; }

        public IFormFile Attachment { get; set; }

    }
}