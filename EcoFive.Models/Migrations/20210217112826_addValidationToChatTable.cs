using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addValidationToChatTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Chats",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "c4f48c3b-df7b-462e-afe0-81acb7954f2a", "AQAAAAEAACcQAAAAEEZMAfE8DzJVHIvxYGfJBVOr0aKV1yuFvDLISIEfjAl0T0usNSdI73gXK8hypZLFZA==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "0373501b-335d-4c59-9d1b-2c91a734a7b7", "AQAAAAEAACcQAAAAEOjOemNoe80UkCazczR/DQNF/w5z4bkURKQ/Gn5nT4F0+ccFuhdZ/Mi100PSc7ftbQ==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Chats",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 30);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "e0aae300-78d5-409e-8b48-05a8c8e3d8cb", "AQAAAAEAACcQAAAAEBYdYM1WRybkKdP7/nfUGYGD0klngH0HUWrJWoYrxExg+sZIcBqI/+BweJARmCLZ1A==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe-afbf-59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "92ee347d-90cb-4497-ad25-867591f83d38", "AQAAAAEAACcQAAAAEO8EmCCAa3P/mq6U8IyKX+ROaNY9PwZzLybI4HfOAi00iBCGYqCQJJVBooZDYZD63g==" });
        }
    }
}
