using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addVisaPayment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "VisaDate",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "VisaName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "VisaNumber",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "VisaPassword",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "ac09a983-0944-43fd-b3b9-83190b47cfcc", "AQAAAAEAACcQAAAAEGYrewCLI8zI2MBW715iuQbycLh343vmcoy3gAG0vbHMBHeHBfsz1xpoPxXbNe2xmA==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4cc49a05-bb5f-44bd-b7d4-32206fc3f84d", "AQAAAAEAACcQAAAAEJNeY04L2qBMfYrgCXjIGfY1trD69mZK07r8RwUKnBE1jjkmVv26DBliecLCD3mzCg==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VisaDate",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "VisaName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "VisaNumber",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "VisaPassword",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b424ddeb-7962-4b7d-b5fe-d903adf78037", "AQAAAAEAACcQAAAAEPRPMiwq3PvLyuJd4zZ7LIBIIQyXuGJFzpxCygmWoCOpW4GqN0Vcx679zo2nnkU+1A==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "40728a23-fabc-4331-8272-c7703d599238", "AQAAAAEAACcQAAAAEFeAvtPsTeCJV5bn1TIqN2APDOku2G6JlLQTzG6A3sD6GTTQFiDr6ZksGuafmMygxQ==" });
        }
    }
}
