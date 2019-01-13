using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace D2.Dashboard.Infrastructure.Migrations
{
    public partial class addingexperiationdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LastMemberUpdate",
                table: "Clans",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastMemberUpdate",
                table: "Clans");
        }
    }
}
