using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editVisaModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "VisaPassword",
                table: "AspNetUsers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "VisaNumber",
                table: "AspNetUsers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaNumber", "VisaPassword" },
                values: new object[] { "eac2d5ea-cb30-4e50-8b70-f751592aef91", "AQAAAAEAACcQAAAAEGWxm31KjBbJIIknVMfr48byvdGsuLaK2byEExoGRS3q6vqrCiLAX31YRAssKY555Q==", null, null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaNumber", "VisaPassword" },
                values: new object[] { "2e2ed777-8225-4c5d-8219-48073ef75ef0", "AQAAAAEAACcQAAAAELVUh6Hp0RwkX6R59JgG4/NME4pJK1NXVvc9IHSCFMUkVQSlENUXDxmi5ouUqGJKHg==", null, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "VisaPassword",
                table: "AspNetUsers",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "VisaNumber",
                table: "AspNetUsers",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaNumber", "VisaPassword" },
                values: new object[] { "888e4405-1f3a-43ba-b998-07444e1b3b17", "AQAAAAEAACcQAAAAEEYYTEANMTgGAqvxSYLLxaYdLOs37tEIEbRyS5moiD3aMfzXJYEjNvd6HtByX+OxgQ==", 0, 0 });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "VisaNumber", "VisaPassword" },
                values: new object[] { "32055fd5-2091-4bbf-a10f-8191404d0e11", "AQAAAAEAACcQAAAAEO6PfEl+F2abZG1CjEhLHcvyaxCGvTwNGoG0OHt/9wlUaMf7Fp5mCvOTs7mBP35D7Q==", 0, 0 });
        }
    }
}
