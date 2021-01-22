using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addUserAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "341749f0 - asu2–42de - afbf - 600mkkmk72cf6", "341749f0 - asu2–42de - afbf - 600mkkmk72cf6", "User", "User" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "PhoneNumberConfirmed" },
                values: new object[] { "054d31bb-72b6-452b-a7a7-7f3562efaf2e", "AQAAAAEAACcQAAAAEKTNhoLeHwi4mRbdbIQy0TEzbB7nlTwyd2vITtAFD2I8t32ZzRn+un7Kr3zV44umTw==", true });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "CityId", "CloseAccount", "ConcurrencyStamp", "CountryId", "Email", "EmailConfirmed", "FullName", "GovernorateId", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "02974cw0–9412–4nfe - afbf - 59f701d72cf6", 0, 1, false, "2f465151-cc09-44be-adc5-a936f8856356", 1, "user1@hotmail.com", true, null, 1, false, null, "USER1@HOTMAIL.COM", "USER1", null, "051265136845", true, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "user1" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "02974cw0–9412–4nfe - afbf - 59f701d72cf6", "341749f0 - asu2–42de - afbf - 600mkkmk72cf6" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { "02974cw0–9412–4nfe - afbf - 59f701d72cf6", "341749f0 - asu2–42de - afbf - 600mkkmk72cf6" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341749f0 - asu2–42de - afbf - 600mkkmk72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "PhoneNumberConfirmed" },
                values: new object[] { "63f0b0f8-2b3a-4646-bd02-212a013a150b", "AQAAAAEAACcQAAAAEPM1HF/VAWU42akg9wrzoEZDjdVJlb/ldQ4jQPkAYOKbC9SsCrBUO6UOMUTJyzgWNg==", false });
        }
    }
}
