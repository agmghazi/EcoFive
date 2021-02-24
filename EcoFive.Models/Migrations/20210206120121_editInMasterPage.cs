using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editInMasterPage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CompanyPhone",
                table: "MasterPageDetails",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "CompanyLinePhone",
                table: "MasterPageDetails",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "888e4405-1f3a-43ba-b998-07444e1b3b17", "AQAAAAEAACcQAAAAEEYYTEANMTgGAqvxSYLLxaYdLOs37tEIEbRyS5moiD3aMfzXJYEjNvd6HtByX+OxgQ==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "32055fd5-2091-4bbf-a10f-8191404d0e11", "AQAAAAEAACcQAAAAEO6PfEl+F2abZG1CjEhLHcvyaxCGvTwNGoG0OHt/9wlUaMf7Fp5mCvOTs7mBP35D7Q==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "CompanyPhone",
                table: "MasterPageDetails",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CompanyLinePhone",
                table: "MasterPageDetails",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4173e417-e664-4b1a-b32d-f3fac2dcb316", "AQAAAAEAACcQAAAAEHiMmtRHoy6oGHCG+Kyd8FaRMoi5mJYgJLqAHBC/s1fLd4OhhL3Kq4ib1WDSzik7hg==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "f1388633-a4b3-47e5-b627-ac3015f364d0", "AQAAAAEAACcQAAAAEDkMxq7edWkX6qiNeK8Rg5MEHpFQgwrrvKmyetdYkVqPVf5C+3C3nuhh/ebgWp9qpA==" });
        }
    }
}
