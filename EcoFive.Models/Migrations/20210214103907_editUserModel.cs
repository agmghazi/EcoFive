using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editUserModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { "02974cw0–9412–4nfe-afbf-59f701d72cf6", "341749f0-asu2–42de-afbf-600mkkmk72cf6" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341749f0-asu2–42de-afbf-600mkkmk72cf6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "AspNetUsers",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "aac9d23c-04cf-4eeb-9c5d-4e006c75fe22", "AQAAAAEAACcQAAAAEJc+ptj2E+BQEzwRYLQvLzl1Z1VP47QamCiZLDeL7J/5SqQfnpkoc6CoJUE1SRmuRA==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "AspNetUsers",
                newName: "FullName");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "341749f0-asu2–42de-afbf-600mkkmk72cf6", "341749f0-asu2–42de-afbf-600mkkmk72cf6", "User", "User" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "bfa39272-5e40-41ce-9824-520d4bde0164", "AQAAAAEAACcQAAAAEBdziiZDeeqo2ppsUT9NTS03In2fDe+bgf2YQTsn7b1TmF1sLtBywbBHa7a9cRCoTQ==" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "CityId", "CloseAccount", "ConcurrencyStamp", "CountryId", "Email", "EmailConfirmed", "FullName", "GovernorateId", "IsCaptain", "IsSupplier", "LocationLatitude", "LocationLongitude", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "PhotoPath", "SecurityStamp", "TwoFactorEnabled", "UserName", "VisaDate", "VisaName", "VisaNumber", "VisaPassword" },
                values: new object[] { "02974cw0–9412–4nfe-afbf-59f701d72cf6", 0, 1, false, "fc0a31ad-1b04-42b8-a3e6-1663b739f2f3", 1, "user1@hotmail.com", true, null, 1, false, false, null, null, false, null, "USER1@HOTMAIL.COM", "USER1", "AQAAAAEAACcQAAAAEGKbvHWhUakjXQ7j2K1UZUiFTdHP31MZTUy3cBB50w0xfrS7PFfkIEJPrZnBFwwlOA==", "051265136845", true, null, "WN5B25J5JIF93FMHPKPOSUSVZ5BA3EFF", false, "user1", null, null, null, null });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "02974cw0–9412–4nfe-afbf-59f701d72cf6", "341749f0-asu2–42de-afbf-600mkkmk72cf6" });
        }
    }
}
