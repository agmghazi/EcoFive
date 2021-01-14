using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class seedSadminAndRole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6", "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6", "SuperAdmin", "SuperAdmin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "City", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "02174cf0–9412–4cfe - afbf - 59f706d72cf6", 0, null, "36d5798a-cb69-48e1-b202-50d3b64e3461", "Sadmin@Sadmin.com", true, false, null, "SADMIN@SADMIN.COM", "SADMIN@SADMIN.COM", "AQAAAAEAACcQAAAAENM2CQvG+qxYnlm31L3BDq4ZK95TQ6RihL6npqqT3icYjOS3iyjpg+0UlZ7F9ukOGw==", "", false, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "Sadmin@Sadmin.com" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "02174cf0–9412–4cfe - afbf - 59f706d72cf6", "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { "02174cf0–9412–4cfe - afbf - 59f706d72cf6", "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6");
        }
    }
}
