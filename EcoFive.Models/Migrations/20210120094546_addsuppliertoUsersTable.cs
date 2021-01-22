using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addsuppliertoUsersTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Supplier",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "279a1c3d-f779-4438-897e-f1f0ee3f4613", "AQAAAAEAACcQAAAAEHR6CSl3ZMiOhFXxbB1oJ8TH1rOYp01cyuvKCmMrkdQMCrVgJyp5u9aT50qiWlTG6Q==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "7d4b66a0-5fc4-4e48-bff8-e9b7ad07b15c", "AQAAAAEAACcQAAAAEIrzRzfjAwLD1/UYq9krSMqKM2NdRp8XcYxlElIAUw+5MsTtuTAX4wfxUbQahDztVA==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Supplier",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "782037ff-c650-4181-b1b5-6f6bc423458f", "AQAAAAEAACcQAAAAEJEpvkgjqjfRFOUKQF2A80UYWYpeT3eV1JKHezXSjd3BltsFoQGiSIMgV9x7AiCbbQ==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "ec704ba8-b33c-480a-a6ae-fd2c3f9a2f4b", "AQAAAAEAACcQAAAAEKVb/VA6pu8vog+h+j6pgca4f/Wq0jY3YoOQmO1HU56772jdCPrvEFs18SG48drx7w==" });
        }
    }
}
