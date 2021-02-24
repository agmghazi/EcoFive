using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "LocationLatitude", "LocationLongitude", "PasswordHash", "VisaDate", "VisaName", "VisaNumber", "VisaPassword" },
                values: new object[] { "3d278f0b-fb87-49ef-be94-d6f19a198869", "24.728287478442276", "46.66198973512585", "AQAAAAEAACcQAAAAEK+28Fxwy6Y4xVUBKhCAtgh0Ee17BPEoyMId4ff9ovMixKNfOnIyEfhUd839NAQg8g==", "06/30", "ahmed ghazy", "555555555555555", "123" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "CityId", "CloseAccount", "ConcurrencyStamp", "CountryId", "Email", "EmailConfirmed", "FirstName", "GovernorateId", "IsCaptain", "IsSupplier", "LastName", "LocationLatitude", "LocationLongitude", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "PhotoPath", "SecurityStamp", "TwoFactorEnabled", "UserName", "VisaDate", "VisaName", "VisaNumber", "VisaPassword" },
                values: new object[] { "02974cw0–9412–4nfe-afbf-59f701d72cf6", 0, 1, false, "1a8e1bc3-1976-461e-9298-f167e2dd6344", 1, "user1@hotmail.com", true, "User", 1, false, false, "User", "30.156351019625248", "37.156914062556666", false, null, "USER1@HOTMAIL.COM", "USER1", "AQAAAAEAACcQAAAAEOScOA9B3S77fbHqNkBtq5Hf8nLX/ya28yHbLfsL/yw7tnsVtGC5GD8XThZYDIjxug==", "051265136845", true, null, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "user1", "06/21", "user user", "555551111111122", "123" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "LocationLatitude", "LocationLongitude", "PasswordHash", "VisaDate", "VisaName", "VisaNumber", "VisaPassword" },
                values: new object[] { "16644342-c75f-4012-bef0-c8288ecb036a", null, null, "AQAAAAEAACcQAAAAEHYgKr1PuUJpSn5iCk1hLCenK2DZvCGLP3NSm4kJE7LpShXJVO9MGTqo6xYbsihYQQ==", null, null, null, null });
        }
    }
}
