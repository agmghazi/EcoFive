using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addPhotoPathUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoPath",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b0c32a46-a138-465f-8b78-05ba6684412c", "AQAAAAEAACcQAAAAEHNhf9hbBM0o8CE2FnYSB+papvvFraAuw7xy0T0UdVPecaAHjBc4jBAEAqVzXIkWLQ==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "5f24f8b3-f70a-43ec-850b-269472853d79", "AQAAAAEAACcQAAAAENLoX7wEqO/BMyIDD9HowoQ2HW6wIUeYucqDNwP+0gpgDCjlTiDPY8LLGgfGOhItrQ==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoPath",
                table: "AspNetUsers");

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
    }
}
