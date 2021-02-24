using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EcoFive.Models.Models.Chatting
{
    public class Chat
    {
        public Chat()
        {
            Messages = new List<Message>();
            Users = new List<ChatUser>();
        }

        public int Id { get; set; }

        [Required(ErrorMessage = "يرجى ادخال اسم المجموعة")]
        [StringLength(30, ErrorMessage = "يرجى اقصى اسم للمجموعة 30 حرف")]
        public string Name { get; set; }
        public string Description { get; set; }
        public ChatType Type { get; set; }

        public ICollection<Message> Messages { get; set; }

        public ICollection<ChatUser> Users { get; set; }
        public string FirstUserName { get; set; }
        public string SecondUserName { get; set; }

    }
}
