using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class EditIDSuperAdminAndUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { "02174cf0–9412–4cfe - afbf - 59f706d72cf6", "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6" });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { "02974cw0–9412–4nfe - afbf - 59f701d72cf6", "341749f0 - asu2–42de - afbf - 600mkkmk72cf6" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341749f0 - asu2–42de - afbf - 600mkkmk72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "341743f0-asd2–42de-afbf-59kmkkmk72cf6", "341743f0-asd2–42de-afbf-59kmkkmk72cf6", "SuperAdmin", "SuperAdmin" },
                    { "341749f0-asu2–42de-afbf-600mkkmk72cf6", "341749f0-asu2–42de-afbf-600mkkmk72cf6", "User", "User" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "CityId", "CloseAccount", "ConcurrencyStamp", "CountryId", "Email", "EmailConfirmed", "FullName", "GovernorateId", "IsCaptain", "IsSupplier", "LocationLatitude", "LocationLongitude", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "PhotoPath", "SecurityStamp", "TwoFactorEnabled", "UserName", "VisaDate", "VisaName", "VisaNumber", "VisaPassword" },
                values: new object[,]
                {
                    { "02174cf0–9412–4cfe-afbf-59f706d72cf6", 0, 1, false, "bfa39272-5e40-41ce-9824-520d4bde0164", 1, "agmghazi@hotmail.com", true, null, 1, false, false, null, null, false, null, "AGMGHAZI@HOTMAIL.COM", "AGMGHAZI", "AQAAAAEAACcQAAAAEBdziiZDeeqo2ppsUT9NTS03In2fDe+bgf2YQTsn7b1TmF1sLtBywbBHa7a9cRCoTQ==", "0534740221", true, null, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "agmghazi", null, null, null, null },
                    { "02974cw0–9412–4nfe-afbf-59f701d72cf6", 0, 1, false, "fc0a31ad-1b04-42b8-a3e6-1663b739f2f3", 1, "user1@hotmail.com", true, null, 1, false, false, null, null, false, null, "USER1@HOTMAIL.COM", "USER1", "AQAAAAEAACcQAAAAEGKbvHWhUakjXQ7j2K1UZUiFTdHP31MZTUy3cBB50w0xfrS7PFfkIEJPrZnBFwwlOA==", "051265136845", true, null, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "user1", null, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "02174cf0–9412–4cfe-afbf-59f706d72cf6", "341743f0-asd2–42de-afbf-59kmkkmk72cf6" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "02974cw0–9412–4nfe-afbf-59f701d72cf6", "341749f0-asu2–42de-afbf-600mkkmk72cf6" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { "02174cf0–9412–4cfe-afbf-59f706d72cf6", "341743f0-asd2–42de-afbf-59kmkkmk72cf6" });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { "02974cw0–9412–4nfe-afbf-59f701d72cf6", "341749f0-asu2–42de-afbf-600mkkmk72cf6" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341743f0-asd2–42de-afbf-59kmkkmk72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341749f0-asu2–42de-afbf-600mkkmk72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6", "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6", "SuperAdmin", "SuperAdmin" },
                    { "341749f0 - asu2–42de - afbf - 600mkkmk72cf6", "341749f0 - asu2–42de - afbf - 600mkkmk72cf6", "User", "User" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "CityId", "CloseAccount", "ConcurrencyStamp", "CountryId", "Email", "EmailConfirmed", "FullName", "GovernorateId", "IsCaptain", "IsSupplier", "LocationLatitude", "LocationLongitude", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "PhotoPath", "SecurityStamp", "TwoFactorEnabled", "UserName", "VisaDate", "VisaName", "VisaNumber", "VisaPassword" },
                values: new object[,]
                {
                    { "02174cf0–9412–4cfe - afbf - 59f706d72cf6", 0, 1, false, "8e87cd25-658f-42b5-9afa-34985439b0b3", 1, "agmghazi@hotmail.com", true, null, 1, false, false, null, null, false, null, "AGMGHAZI@HOTMAIL.COM", "AGMGHAZI", "AQAAAAEAACcQAAAAEB6xbVyY3ZA2B4Jx0+OBm4ZTJ3p+7RAL6bfbsO9CAC6GMJ/lvcUWYWLwkfZn0kMzTw==", "0534740221", true, null, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "agmghazi", null, null, null, null },
                    { "02974cw0–9412–4nfe - afbf - 59f701d72cf6", 0, 1, false, "22f18027-2677-42e2-981c-8df089849933", 1, "user1@hotmail.com", true, null, 1, false, false, null, null, false, null, "USER1@HOTMAIL.COM", "USER1", "AQAAAAEAACcQAAAAEEy0of3A1JwD3k2HQucJTtUnMVwHVeTuDI06Wzdb5vwxopLeA71t2r0ZFZ/mbRBVMg==", "051265136845", true, null, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "user1", null, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "02174cf0–9412–4cfe - afbf - 59f706d72cf6", "341743f0 - asd2–42de - afbf - 59kmkkmk72cf6" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "02974cw0–9412–4nfe - afbf - 59f701d72cf6", "341749f0 - asu2–42de - afbf - 600mkkmk72cf6" });
        }
    }
}
