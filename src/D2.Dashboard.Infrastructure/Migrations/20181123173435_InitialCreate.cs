using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace D2.Dashboard.Infrastructure.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clans",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    GroupId = table.Column<long>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    GroupType = table.Column<int>(nullable: false),
                    MembershipIdCreated = table.Column<long>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    ModificationDate = table.Column<DateTime>(nullable: false),
                    About = table.Column<string>(nullable: true),
                    MemberCount = table.Column<int>(nullable: false),
                    IsPublic = table.Column<bool>(nullable: false),
                    IsPublicTopicAdminOnly = table.Column<bool>(nullable: false),
                    Motto = table.Column<string>(nullable: true),
                    Locale = table.Column<string>(nullable: true),
                    Theme = table.Column<string>(nullable: true),
                    BannerPath = table.Column<string>(nullable: true),
                    AvatarPath = table.Column<string>(nullable: true),
                    ClanInfoJSON = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clans", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clans");
        }
    }
}
