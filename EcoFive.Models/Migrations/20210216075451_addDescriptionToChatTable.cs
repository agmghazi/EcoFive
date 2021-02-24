using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addDescriptionToChatTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Chats",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "67e7ee1e-5ec9-4813-b558-af7bd30de105", "AQAAAAEAACcQAAAAECSeHyFalCB7Y1lsIcy7KBW5D1qDmvsXuS2Ter5fofHRzvlXQEAPSuqo7tEfYP862A==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Chats");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "647c2f03-ca8a-450d-8906-07d6d9369e75", "AQAAAAEAACcQAAAAEDbJ8bTpSkwP5rqUEZRimNp7C900XQT0vnNdCXiVztPNiETYrMQjLIOpNYIvhrsddg==" });
        }
    }
}
