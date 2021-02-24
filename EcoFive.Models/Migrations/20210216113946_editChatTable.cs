using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editChatTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatUsers_AspNetUsers_UserId",
                table: "ChatUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Chats_ChatId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_ChatId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_ChatUsers_UserId",
                table: "ChatUsers");

            migrationBuilder.AddColumn<int>(
                name: "MessagesId",
                table: "Messages",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "CurrentUserId",
                table: "ChatUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MessagesId",
                table: "Chats",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "FirstName", "LastName", "PasswordHash" },
                values: new object[] { "16644342-c75f-4012-bef0-c8288ecb036a", "Ahmed", "Gamal", "AQAAAAEAACcQAAAAEHYgKr1PuUJpSn5iCk1hLCenK2DZvCGLP3NSm4kJE7LpShXJVO9MGTqo6xYbsihYQQ==" });

            migrationBuilder.CreateIndex(
                name: "IX_Messages_MessagesId",
                table: "Messages",
                column: "MessagesId");

            migrationBuilder.CreateIndex(
                name: "IX_ChatUsers_CurrentUserId",
                table: "ChatUsers",
                column: "CurrentUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatUsers_AspNetUsers_CurrentUserId",
                table: "ChatUsers",
                column: "CurrentUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Chats_MessagesId",
                table: "Messages",
                column: "MessagesId",
                principalTable: "Chats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatUsers_AspNetUsers_CurrentUserId",
                table: "ChatUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Chats_MessagesId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_MessagesId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_ChatUsers_CurrentUserId",
                table: "ChatUsers");

            migrationBuilder.DropColumn(
                name: "MessagesId",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "CurrentUserId",
                table: "ChatUsers");

            migrationBuilder.DropColumn(
                name: "MessagesId",
                table: "Chats");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "FirstName", "LastName", "PasswordHash" },
                values: new object[] { "67e7ee1e-5ec9-4813-b558-af7bd30de105", null, null, "AQAAAAEAACcQAAAAECSeHyFalCB7Y1lsIcy7KBW5D1qDmvsXuS2Ter5fofHRzvlXQEAPSuqo7tEfYP862A==" });

            migrationBuilder.CreateIndex(
                name: "IX_Messages_ChatId",
                table: "Messages",
                column: "ChatId");

            migrationBuilder.CreateIndex(
                name: "IX_ChatUsers_UserId",
                table: "ChatUsers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatUsers_AspNetUsers_UserId",
                table: "ChatUsers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Chats_ChatId",
                table: "Messages",
                column: "ChatId",
                principalTable: "Chats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
