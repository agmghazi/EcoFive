using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

namespace EcoFive.UI.Security
{
    public class SuperAdminHandler :
        AuthorizationHandler<ManageAdminRolesAndClaimsRequirement>
    {
        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context,
            ManageAdminRolesAndClaimsRequirement requirement)
        {
            if (context.User.IsInRole("SuperAdmin"))
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }

}
