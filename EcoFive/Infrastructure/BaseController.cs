using System.Security.Claims;

namespace EcoFive.UI.Infrastructure
{
    public class BaseController : Microsoft.AspNetCore.Mvc.Controller
    {
        protected string GetUserId()
        {
            return User.FindFirst(ClaimTypes.NameIdentifier).Value;
        }
    }

}
