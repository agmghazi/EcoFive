using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace EcoFive.UI.ViewModels
{
    public class MailViewModel
    {
        [Required(ErrorMessage = "please, enter valid To")]
        [EmailAddress(ErrorMessage = "please, enter valid mail")]
        public string To { get; set; }

        [EmailAddress(ErrorMessage = "please, enter valid mail")]
        public string CC { get; set; }
        public string Subject { get; set; }

        [Required(ErrorMessage = "please, enter valid body")]
        public string Body { get; set; }

        public IFormFile Attachment { get; set; }

    }
}