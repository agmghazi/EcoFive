using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addFirstNameInUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "27029d7c-3ead-4868-9f98-15bd8ef90be9", "AQAAAAEAACcQAAAAEJRreecwrGtgUjS3RN1uXaBIkv6CKadCGSDS/XJzXj4MPiUki3NkmqApLtvco9PFxg==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullName",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "36d5798a-cb69-48e1-b202-50d3b64e3461", "AQAAAAEAACcQAAAAENM2CQvG+qxYnlm31L3BDq4ZK95TQ6RihL6npqqT3icYjOS3iyjpg+0UlZ7F9ukOGw==" });
        }
    }
}
