using EcoFive.Models.Models.Chatting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace EcoFive.Models.Models
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {

        }

        public DbSet<City> Cities { set; get; }
        public DbSet<Country> Countries { set; get; }
        public DbSet<Governorate> Governorates { set; get; }
        public DbSet<MasterPageDetail> MasterPageDetails { set; get; }
        public DbSet<Contact> Contacts { set; get; }

        public DbSet<Chat> Chats { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<ChatUser> ChatUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Seed();
            base.OnModelCreating(modelBuilder);



            foreach (var foreignKey in modelBuilder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))

            {
                foreignKey.DeleteBehavior = DeleteBehavior.Restrict;
            }
        }
    }
}