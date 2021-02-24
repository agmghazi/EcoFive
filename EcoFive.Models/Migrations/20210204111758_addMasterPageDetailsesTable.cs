using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addMasterPageDetailsesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MasterPageDetails",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FacebookAccount = table.Column<string>(nullable: true),
                    TwitterAccount = table.Column<string>(nullable: true),
                    YoutubeAccount = table.Column<string>(nullable: true),
                    InstagramAccount = table.Column<string>(nullable: true),
                    CompanyPhone = table.Column<int>(nullable: false),
                    CompanyLinePhone = table.Column<int>(nullable: false),
                    CompanyDetails = table.Column<string>(nullable: true),
                    CompanyMail = table.Column<string>(nullable: true),
                    CompanyWorkHours = table.Column<string>(nullable: true),
                    Link1Title = table.Column<string>(nullable: true),
                    Link1 = table.Column<string>(nullable: true),
                    Link2Title = table.Column<string>(nullable: true),
                    Link2 = table.Column<string>(nullable: true),
                    Link3Title = table.Column<string>(nullable: true),
                    Link3 = table.Column<string>(nullable: true),
                    Link4Title = table.Column<string>(nullable: true),
                    Link4 = table.Column<string>(nullable: true),
                    Link5Title = table.Column<string>(nullable: true),
                    Link5 = table.Column<string>(nullable: true),
                    Link6Title = table.Column<string>(nullable: true),
                    Link6 = table.Column<string>(nullable: true),
                    Link7Title = table.Column<string>(nullable: true),
                    Link7 = table.Column<string>(nullable: true),
                    Link8Title = table.Column<string>(nullable: true),
                    Link8 = table.Column<string>(nullable: true),
                    Link9Title = table.Column<string>(nullable: true),
                    Link9 = table.Column<string>(nullable: true),
                    Link10Title = table.Column<string>(nullable: true),
                    Link10 = table.Column<string>(nullable: true),
                    Link11Title = table.Column<string>(nullable: true),
                    Link11 = table.Column<string>(nullable: true),
                    Link12Title = table.Column<string>(nullable: true),
                    Link12 = table.Column<string>(nullable: true),
                    PromoTitle = table.Column<string>(nullable: true),
                    PromoTitleURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MasterPageDetails", x => x.Id);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MasterPageDetails");

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
    }
}
