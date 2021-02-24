using System.ComponentModel.DataAnnotations;

namespace EcoFive.UI.Areas.Admin.ViewModels
{
    public class ChatRoomViewModel
    {
        [Required]
        [StringLength(30)]
        public string RoomName { get; set; }
        public string Description { get; set; }
    }
}
