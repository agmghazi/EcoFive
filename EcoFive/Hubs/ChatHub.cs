using EcoFive.Models.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace EcoFive.UI.Hubs
{
    public class ChatHub : Hub
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ChatHub(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        public Task JoinRoom(string roomId)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, roomId);
        }

        public Task LeaveRoom(string roomId)
        {
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, roomId);
        }

        public async Task SendMessage(string userId, string message)
        {
            var user = await _userManager.FindByNameAsync(Context.User.Identity.Name);
            var getUserId = user.Id;

            await Clients.Caller.SendAsync("ReceiveMessage", Context.User.Identity.Name,getUserId,message);

            await Clients.User(userId).SendAsync("ReceiveMessage", Context.User.Identity.Name, getUserId, message);

            //    await Clients.All.SendAsync("ReceiveMessage", Context.User.Identity.Name ?? "anonymous", message);

        }

    
    }
}
