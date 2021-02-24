using EcoFive.Models.Models;
using EcoFive.Models.Models.Chatting;
using EcoFive.Models.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.DataAccessLayer
{
    public class ChatRepository : IChatRepository
    {
        private readonly AppDbContext _context;

        public ChatRepository(AppDbContext context) => _context = context;

        public async Task<Message> CreateMessage(int chatId, string message, string userId)
        {
            var Message = new Message
            {
                ChatId = chatId,
                Text = message,
                Name = userId,
                Timestamp = DateTime.Now
            };

            await _context.Messages.AddAsync(Message);
            await _context.SaveChangesAsync();

            return Message;
        }

        public async Task<int> CreatePrivateRoom(string rootId, string targetId, string firstUserName, string secondUserName)
        {
            var chatId = _context.ChatUsers.ToList();

            int getChatId = 0;

            foreach (var userChat in chatId)
            {
                if (userChat.UserId == rootId)
                {
                    var chatName = _context.Chats
                        .Where(x => x.Type == ChatType.Private).FirstOrDefault(x => x.Id == userChat.ChatId);

                    if (chatName != null && ((chatName.FirstUserName == firstUserName && chatName.SecondUserName == secondUserName) || (chatName.FirstUserName == secondUserName && chatName.SecondUserName == firstUserName)))
                    {
                        getChatId = userChat.ChatId;
                    }
                }
            }

            if (getChatId > 0)
            {
                return getChatId;
            }
            else
            {
                var chat = new Chat
                {
                    Type = ChatType.Private,
                    Name = "Private",
                    Description = $"Private chat with {firstUserName} and {secondUserName}",
                    SecondUserName = secondUserName,
                    FirstUserName = firstUserName

                };

                chat.Users.Add(new ChatUser
                {
                    UserId = targetId
                });

                chat.Users.Add(new ChatUser
                {
                    UserId = rootId
                });

                await _context.Chats.AddAsync(chat);

                await _context.SaveChangesAsync();

                return chat.Id;
            }

        }

        public async Task CreateRoom(string name, string description, string userId)
        {
            var chat = new Chat
            {
                Name = name,
                Type = ChatType.Room,
                Description = description
            };

            chat.Users.Add(new ChatUser
            {
                UserId = userId,
                Role = ChatUserRole.Admin
            });

            await _context.Chats.AddAsync(chat);

            await _context.SaveChangesAsync();
        }

        public Chat GetChat(int id)
        {
            return _context.Chats
                .Include(x => x.Messages)
                .FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Chat> GetChats(string userId)
        {
            return _context.Chats
                .Include(x => x.Users)
                .Where(x => x.Users.All(y => y.UserId != userId))
                .ToList();
        }

        public IEnumerable<Chat> GetPrivateChats(string userId)
        {
            return _context.Chats
                   .Include(x => x.Users)
                       .ThenInclude(x => x.User)
                   .Where(x => x.Type == ChatType.Private
                       && x.Users
                           .Any(y => y.UserId == userId))
                   .ToList();
        }

        public async Task JoinRoom(int chatId, string userId)
        {
            var chatUser = new ChatUser
            {
                ChatId = chatId,
                UserId = userId,
                Role = ChatUserRole.Member
            };

            await _context.ChatUsers.AddAsync(chatUser);

            await _context.SaveChangesAsync();
        }
    }
}
