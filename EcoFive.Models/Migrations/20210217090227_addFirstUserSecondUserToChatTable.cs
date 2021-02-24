using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addFirstUserSecondUserToChatTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Chats",
                newName: "SecondUserName");

            migrationBuilder.AddColumn<string>(
                name: "FirstUserName",
                table: "Chats",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "e0aae300-78d5-409e-8b48-05a8c8e3d8cb", "AQAAAAEAACcQAAAAEBYdYM1WRybkKdP7/nfUGYGD0klngH0HUWrJWoYrxExg+sZIcBqI/+BweJARmCLZ1A==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "92ee347d-90cb-4497-ad25-867591f83d38", "AQAAAAEAACcQAAAAEO8EmCCAa3P/mq6U8IyKX+ROaNY9PwZzLybI4HfOAi00iBCGYqCQJJVBooZDYZD63g==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstUserName",
                table: "Chats");

            migrationBuilder.RenameColumn(
                name: "SecondUserName",
                table: "Chats",
                newName: "UserName");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "541137a9-fde6-432f-ab9d-d4baced865e0", "AQAAAAEAACcQAAAAEPg2G1MU+1G/ii3s0An36bdNs1UI4LKIEaRFFiIvKxjycHs7mRGF2ZLX/CTKg7pOvg==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "1762b812-99a5-44ed-9e08-d34bf0a95ad9", "AQAAAAEAACcQAAAAEATyurMINNx4ePNtq3X2RaHEAV/Upf+PPiZn7mDuAMLEh0F7bTnl4fStg3yHD+hZEQ==" });
        }
    }
}
