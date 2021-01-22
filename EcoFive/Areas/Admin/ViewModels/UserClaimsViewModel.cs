using EmployeeManagments.Models;
using System.Collections.Generic;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class UserClaimsViewModel
    {
        public UserClaimsViewModel()
        {
            Cliams = new List<UserClaim>();
        }

        public string UserId { get; set; }
        public List<UserClaim> Cliams { get; set; }

    }
}
