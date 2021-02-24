using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editVisaTabel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "VisaDate",
                table: "AspNetUsers",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaDate" },
                values: new object[] { "734fd1bc-de30-4b50-84fc-ba697c902e7b", "AQAAAAEAACcQAAAAEIq64oor7jNFQ1bByFcINXVZUoFDYWJp2Ehz8/XKsj7CLAdIMnXKlBaFY7+8EpXs+Q==", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaDate" },
                values: new object[] { "6a74d84e-def4-41d7-90a5-14d0b2fb2837", "AQAAAAEAACcQAAAAEJpBtJ44J3/gHEDf1z+D6bVoriDoGYmKH7d0CCdtMPOXqf4Pamsv+3orlyLcuCK+Vw==", null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "VisaDate",
                table: "AspNetUsers",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaDate" },
                values: new object[] { "eac2d5ea-cb30-4e50-8b70-f751592aef91", "AQAAAAEAACcQAAAAEGWxm31KjBbJIIknVMfr48byvdGsuLaK2byEExoGRS3q6vqrCiLAX31YRAssKY555Q==", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaDate" },
                values: new object[] { "2e2ed777-8225-4c5d-8219-48073ef75ef0", "AQAAAAEAACcQAAAAELVUh6Hp0RwkX6R59JgG4/NME4pJK1NXVvc9IHSCFMUkVQSlENUXDxmi5ouUqGJKHg==", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }
    }
}
