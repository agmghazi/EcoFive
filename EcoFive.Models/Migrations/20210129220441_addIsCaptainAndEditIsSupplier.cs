using Microsoft.EntityFrameworkCore.Migrations;

namespace EcoFive.Models.Migrations
{
    public partial class addIsCaptainAndEditIsSupplier : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Supplier",
                table: "AspNetUsers",
                newName: "IsSupplier");

            migrationBuilder.AddColumn<bool>(
                name: "IsCaptain",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b424ddeb-7962-4b7d-b5fe-d903adf78037", "AQAAAAEAACcQAAAAEPRPMiwq3PvLyuJd4zZ7LIBIIQyXuGJFzpxCygmWoCOpW4GqN0Vcx679zo2nnkU+1A==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "40728a23-fabc-4331-8272-c7703d599238", "AQAAAAEAACcQAAAAEFeAvtPsTeCJV5bn1TIqN2APDOku2G6JlLQTzG6A3sD6GTTQFiDr6ZksGuafmMygxQ==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCaptain",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "IsSupplier",
                table: "AspNetUsers",
                newName: "Supplier");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0–9412–4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b0c32a46-a138-465f-8b78-05ba6684412c", "AQAAAAEAACcQAAAAEHNhf9hbBM0o8CE2FnYSB+papvvFraAuw7xy0T0UdVPecaAHjBc4jBAEAqVzXIkWLQ==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02974cw0–9412–4nfe - afbf - 59f701d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "5f24f8b3-f70a-43ec-850b-269472853d79", "AQAAAAEAACcQAAAAENLoX7wEqO/BMyIDD9HowoQ2HW6wIUeYucqDNwP+0gpgDCjlTiDPY8LLGgfGOhItrQ==" });
        }
    }
}
