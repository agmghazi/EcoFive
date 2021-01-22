using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addCloseAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "CloseAccount",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "63f0b0f8-2b3a-4646-bd02-212a013a150b", "AQAAAAEAACcQAAAAEPM1HF/VAWU42akg9wrzoEZDjdVJlb/ldQ4jQPkAYOKbC9SsCrBUO6UOMUTJyzgWNg==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CloseAccount",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "8bc94b14-944a-4e6b-a5eb-cc202a3f6e6e", "AQAAAAEAACcQAAAAEAqoS5fHtzMo6pjYhQoSQJVundwzK7kvslBvTGk26Sk3OI/lsJsvRJY5qwYwO4F1yg==" });
        }
    }
}
