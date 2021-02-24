using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class FixUsersTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatUsers_AspNetUsers_CurrentUserId",
                table: "ChatUsers");

            migrationBuilder.DropIndex(
                name: "IX_ChatUsers_CurrentUserId",
                table: "ChatUsers");

            migrationBuilder.DropColumn(
                name: "CurrentUserId",
                table: "ChatUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "7fbaa786-8fbd-4071-b2eb-a99b887788d1", "AQAAAAEAACcQAAAAEKsBbuUbmrc7dSOFsnFxy8S237u6S+9FLtqEhDcXDzF5x12BZf7Zt4C4TeqMDSzTkg==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "9bc445de-b291-4acd-b2e3-3c9da10641d3", "AQAAAAEAACcQAAAAEI0uNDTweoyJUEUHzyXnW0+L7IJHLarIMCKe8ITMSs4HB8669QEYFDTnrNG1vOVXEw==" });

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatUsers_AspNetUsers_UserId",
                table: "ChatUsers");

            migrationBuilder.DropIndex(
                name: "IX_ChatUsers_UserId",
                table: "ChatUsers");

            migrationBuilder.AddColumn<string>(
                name: "CurrentUserId",
                table: "ChatUsers",
                nullable: true);

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
        }
    }
}
