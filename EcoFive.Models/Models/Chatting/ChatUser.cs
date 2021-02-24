namespace EcoFive.Models.Models.Chatting
{
    public class ChatUser
    {
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        public int ChatId { get; set; }
        public Chat Chat { get; set; }
        public ChatUserRole Role { get; set; }
    }
}
