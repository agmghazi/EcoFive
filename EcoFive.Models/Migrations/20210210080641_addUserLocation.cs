using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addUserLocation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LocationLatitude",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LocationLongitude",
                table: "AspNetUsers",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LocationLatitude",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LocationLongitude",
                table: "AspNetUsers");

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
        }
    }
}
