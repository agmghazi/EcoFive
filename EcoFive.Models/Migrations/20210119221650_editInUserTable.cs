using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class editInUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "782037ff-c650-4181-b1b5-6f6bc423458f", "AQAAAAEAACcQAAAAEJEpvkgjqjfRFOUKQF2A80UYWYpeT3eV1JKHezXSjd3BltsFoQGiSIMgV9x7AiCbbQ==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "ec704ba8-b33c-480a-a6ae-fd2c3f9a2f4b", "AQAAAAEAACcQAAAAEKVb/VA6pu8vog+h+j6pgca4f/Wq0jY3YoOQmO1HU56772jdCPrvEFs18SG48drx7w==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
