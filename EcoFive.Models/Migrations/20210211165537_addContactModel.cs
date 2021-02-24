using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addContactModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Message = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "774b4a13-af1e-4ccc-a8e9-7ed56319d62d", "AQAAAAEAACcQAAAAEAZahUDxLSKoNiG+QZVw4JFQoMnewhFs2klclfPWkvrH6Jxu1Yio7lybhttFWE+0yg==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4fde8c74-321d-495c-b664-ccc401b1d9ce", "AQAAAAEAACcQAAAAEHfXFOOyLilla+sE8985MjIkfoCuBZBEnNivtGL2/FtuOUxRFCljPbtal5UXRsI+1Q==" });
        }
    }
}
