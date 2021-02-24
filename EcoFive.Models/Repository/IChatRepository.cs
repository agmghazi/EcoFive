using EcoFive.Models.Models.Chatting;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcoFive.Models.Repository
{
    public interface IChatRepository
    {
        Chat GetChat(int id);
        Task CreateRoom(string name, string description, string userId);
        Task JoinRoom(int chatId, string userId);
        IEnumerable<Chat> GetChats(string userId);
        Task<int> CreatePrivateRoom(string rootId, string targetId, string firstUserName, string secondUserName);
        IEnumerable<Chat> GetPrivateChats(string userId);
        Task<Message> CreateMessage(int chatId, string message, string userId);
    }
}
