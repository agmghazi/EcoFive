using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class fixChatTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Chats_MessagesId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_MessagesId",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "MessagesId",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "MessagesId",
                table: "Chats");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "232de8c3-7273-4b7b-97a2-bfe9a1e6b8c9", "AQAAAAEAACcQAAAAEKAXRoXLqfz6KKCu6FF7q9lKN15Jx3Jma+l4WPyqM/2FCcSMROuqZkMgce/rMv+rLQ==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "9cbe79c1-bb71-45eb-bf48-dfc7c8ee4e65", "AQAAAAEAACcQAAAAEPr4g/Eu8OMvRT4wEMxCEqPilX9RKjqlgPW1H6PaVtnX4u/QMSUz44rUsrhqrzZijQ==" });

            migrationBuilder.CreateIndex(
                name: "IX_Messages_ChatId",
                table: "Messages",
                column: "ChatId");

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Chats_ChatId",
                table: "Messages",
                column: "ChatId",
                principalTable: "Chats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Chats_ChatId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_ChatId",
                table: "Messages");

            migrationBuilder.AddColumn<int>(
                name: "MessagesId",
                table: "Messages",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "MessagesId",
                table: "Chats",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "3d278f0b-fb87-49ef-be94-d6f19a198869", "AQAAAAEAACcQAAAAEK+28Fxwy6Y4xVUBKhCAtgh0Ee17BPEoyMId4ff9ovMixKNfOnIyEfhUd839NAQg8g==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "1a8e1bc3-1976-461e-9298-f167e2dd6344", "AQAAAAEAACcQAAAAEOScOA9B3S77fbHqNkBtq5Hf8nLX/ya28yHbLfsL/yw7tnsVtGC5GD8XThZYDIjxug==" });

            migrationBuilder.CreateIndex(
                name: "IX_Messages_MessagesId",
                table: "Messages",
                column: "MessagesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Chats_MessagesId",
                table: "Messages",
                column: "MessagesId",
                principalTable: "Chats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
