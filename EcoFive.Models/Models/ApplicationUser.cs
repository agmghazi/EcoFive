using Microsoft.AspNetCore.Identity;

namespace EcoFive.Models.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string City { get; set; }
        public string FullName { get; set; }
    }
}