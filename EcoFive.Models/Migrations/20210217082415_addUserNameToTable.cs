using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addUserNameToTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Chats",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Chats");

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
        }
    }
}
