using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editInContactModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateTime",
                table: "Contacts",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "8e87cd25-658f-42b5-9afa-34985439b0b3", "AQAAAAEAACcQAAAAEB6xbVyY3ZA2B4Jx0+OBm4ZTJ3p+7RAL6bfbsO9CAC6GMJ/lvcUWYWLwkfZn0kMzTw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "22f18027-2677-42e2-981c-8df089849933", "AQAAAAEAACcQAAAAEEy0of3A1JwD3k2HQucJTtUnMVwHVeTuDI06Wzdb5vwxopLeA71t2r0ZFZ/mbRBVMg==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateTime",
                table: "Contacts");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "7b7453d6-0142-45e3-bc6d-017a8941101b", "AQAAAAEAACcQAAAAEF1Z5NRLtFC80BwxebM+M1k4j/QmZ26+Up04Z4lS+eRlLAFjyKd0mS87EREzIXWKYQ==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "28b81232-67ba-4090-a8c2-5145889bd8ee", "AQAAAAEAACcQAAAAEAoi35x4e3iUs34d9e0UQIu706AtMH95kNKin44C26Tv0m4bdS3RLTVENKFRG45gMA==" });
        }
    }
}
