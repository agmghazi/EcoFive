using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class fixUsersIssue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a1fc9356-f9ef-4e88-8f36-9d306de58b39", "AQAAAAEAACcQAAAAEE8vd0rtj4xQW0PmvmuG7eZTXrgQS/IWvEwvtWQHjim10WFoxkzn8IBJKMePs1kVGg==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "415100c0-384f-4e6b-bdf3-be01a87fb7dc", "AQAAAAEAACcQAAAAEIQzbIPw1ZcdL7qTU6S+T/zTiQbRBf0Vh+R1nlhGRCcTkJ7RSm/ZoBoYxgvMwe51fQ==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "054d31bb-72b6-452b-a7a7-7f3562efaf2e", "AQAAAAEAACcQAAAAEKTNhoLeHwi4mRbdbIQy0TEzbB7nlTwyd2vITtAFD2I8t32ZzRn+un7Kr3zV44umTw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "2f465151-cc09-44be-adc5-a936f8856356", null });
        }
    }
}
