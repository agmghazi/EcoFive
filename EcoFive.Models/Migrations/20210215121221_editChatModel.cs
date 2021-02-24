using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editChatModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Chats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "647c2f03-ca8a-450d-8906-07d6d9369e75", "AQAAAAEAACcQAAAAEDbJ8bTpSkwP5rqUEZRimNp7C900XQT0vnNdCXiVztPNiETYrMQjLIOpNYIvhrsddg==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Chats");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a49f86d0-8aa4-4773-b88c-83f458cfbb96", "AQAAAAEAACcQAAAAEOWGJ+Jj23Ysoipt4F/ZQGHDpIPhDrIsyNrkS4df5yooA8y7s0sr+Xc+IJ6jtkEx+A==" });
        }
    }
}
