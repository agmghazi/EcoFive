using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addsuperAdmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6", "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6", "SuperAdmin", "SuperAdmin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "CityId", "ConcurrencyStamp", "CountryId", "Email", "EmailConfirmed", "FullName", "GovernorateId", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "02174cf0–9412–4cfe - afbf - 59f706d72cf6", 0, 1, "8bc94b14-944a-4e6b-a5eb-cc202a3f6e6e", 1, "agmghazi@hotmail.com", true, null, 1, false, null, "AGMGHAZI@HOTMAIL.COM", "AGMGHAZI", "AQAAAAEAACcQAAAAEAqoS5fHtzMo6pjYhQoSQJVundwzK7kvslBvTGk26Sk3OI/lsJsvRJY5qwYwO4F1yg==", "0534740221", false, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "agmghazi" });

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
