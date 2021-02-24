using EcoFive.Models.Models;
using EcoFive.Models.Models.Chatting;
using EcoFive.Models.Repository;
using EcoFive.UI.Hubs;
using EcoFive.UI.Infrastructure;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ChatRoomController : BaseController
    {
        private readonly IChatRepository _chatRepository;
        private readonly UserManager<ApplicationUser> _userManager;

        public ChatRoomController(IChatRepository chatRepository,
            UserManager<ApplicationUser> userManager)
        {
            _chatRepository = chatRepository;
            _userManager = userManager;
        }


        public IActionResult Index()
        {
            var chats = _chatRepository.GetChats(GetUserId());

            return View(chats);
        }

        public IActionResult Find([FromServices] AppDbContext ctx)
        {
            var users = ctx.Users
                .Where(x => x.Id != User.GetUserId())
                .ToList();

            return View(users);
        }

        public IActionResult Private()
        {
            var chats = _chatRepository.GetPrivateChats(GetUserId());

            return View(chats);
        }

        public async Task<IActionResult> CreatePrivateRoom(string userId)
        {
            var secondUserName = _userManager.FindByIdAsync(userId);
            var firstUserName = _userManager.FindByIdAsync(GetUserId());

            var id = await _chatRepository.CreatePrivateRoom(GetUserId(), userId, firstUserName.Result.UserName, secondUserName.Result.UserName);

            return RedirectToAction("Chat", new { id });
        }

        [HttpGet]
        public IActionResult Chat(int id)
        {
            return View(_chatRepository.GetChat(id));
        }

        [HttpGet]
        public IActionResult CreateRoom()
        {

            return View();
        }

        //[HttpPost]
        //public async Task<IActionResult> CreateRoom(ChatRoomViewModel model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        await _chatRepository.CreateRoom(model.RoomName, model.Description, GetUserId());
        //        return RedirectToAction("Index");
        //    }

        //    return PartialView("_CreateRoomPartial", model);

        //}

        [HttpPost]
        public async Task<IActionResult> CreateRoom(string name, string description)
        {
            if (!string.IsNullOrEmpty(name))
            {
                await _chatRepository.CreateRoom(name, description, GetUserId());
                return RedirectToAction("Index");
            }

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> JoinRoom(int id)
        {
            await _chatRepository.JoinRoom(id, GetUserId());

            return RedirectToAction("Chat", "Home", new { id = id });
        }

        public async Task<IActionResult> SendMessage(
            int roomId,
            string message,
            [FromServices] IHubContext<ChatHub> chat)
        {
            var Message = await _chatRepository.CreateMessage(roomId, message, User.Identity.Name);

            await chat.Clients.Group(roomId.ToString())
                .SendAsync("RecieveMessage", new
                {
                    Text = Message.Text,
                    Name = Message.Name,
                    Timestamp = Message.Timestamp.ToString("dd/MM/yyyy hh:mm:ss")
                });

            return Ok();
        }
    }
}
