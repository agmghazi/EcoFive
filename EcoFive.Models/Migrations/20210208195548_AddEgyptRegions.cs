using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class AddEgyptRegions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "9a3f0426-296f-45fe-8107-ae0736df957b", "AQAAAAEAACcQAAAAELphZUtBwz/khOUaEjDdOPkxFXFMm9MeXR3nhRO63fwMGsiAiwcrLw16Y4UX6BMXJg==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "ff045408-3391-4fe6-9908-8e796d113219", "AQAAAAEAACcQAAAAEAM6Qyn20o6UdcaBj3GQXz+F3wtuZ2Z39heaKNNqndVNGbvCCcN8MvcCwzLlOPNqMw==" });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "مصر" });

            migrationBuilder.InsertData(
                table: "Governorates",
                columns: new[] { "Id", "CountryId", "Name" },
                values: new object[,]
                {
                    { 14, 2, "الإسكندرية" },
                    { 38, 2, "المنوفية" },
                    { 37, 2, "مطروح" },
                    { 36, 2, "كفر الشيخ" },
                    { 35, 2, "قنا" },
                    { 34, 2, "القليوبية" },
                    { 33, 2, "القاهرة" },
                    { 32, 2, "الفيوم" },
                    { 31, 2, "الغربية" },
                    { 30, 2, "شمال سيناء" },
                    { 29, 2, "الشرقية" },
                    { 28, 2, "السويس" },
                    { 39, 2, "المنيا" },
                    { 27, 2, "سوهاج" },
                    { 25, 2, "الدقهلية" },
                    { 24, 2, "الجيزة" },
                    { 23, 2, "جنوب سيناء" },
                    { 22, 2, "بورسعيد" },
                    { 21, 2, "بني سويف" },
                    { 20, 2, "البحيرة" },
                    { 19, 2, "البحر الأحمر" },
                    { 18, 2, "الأقصر" },
                    { 17, 2, "أسيوط" },
                    { 16, 2, "أسوان" },
                    { 15, 2, "الإسماعيلية" },
                    { 26, 2, "دمياط" },
                    { 40, 2, "الوادي الجديد" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Governorates",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Countries",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "734fd1bc-de30-4b50-84fc-ba697c902e7b", "AQAAAAEAACcQAAAAEIq64oor7jNFQ1bByFcINXVZUoFDYWJp2Ehz8/XKsj7CLAdIMnXKlBaFY7+8EpXs+Q==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "6a74d84e-def4-41d7-90a5-14d0b2fb2837", "AQAAAAEAACcQAAAAEJpBtJ44J3/gHEDf1z+D6bVoriDoGYmKH7d0CCdtMPOXqf4Pamsv+3orlyLcuCK+Vw==" });
        }
    }
}
