using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace D2.Dashboard.Infrastructure.Migrations
{
    public partial class addingmembers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClanMembers",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    MemberType = table.Column<int>(nullable: false),
                    GroupId = table.Column<long>(nullable: false),
                    DestinyMembershipId = table.Column<long>(nullable: false),
                    DestinyMembershiptType = table.Column<int>(nullable: false),
                    DestinyDisplayName = table.Column<string>(nullable: true),
                    BungieIconPath = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClanMembers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClanMemberProfiles",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    LastPlayed = table.Column<DateTime>(nullable: false),
                    TriumpScore = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClanMemberProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClanMemberProfiles_ClanMembers_Id",
                        column: x => x.Id,
                        principalTable: "ClanMembers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClanMemberStats",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    HighestLightLevel = table.Column<int>(nullable: false),
                    SecondsPlayed = table.Column<long>(nullable: false),
                    PublicEventsCompleted = table.Column<int>(nullable: false),
                    HeroicPublicEventsCompleted = table.Column<int>(nullable: false),
                    AdventuresCompleted = table.Column<int>(nullable: false),
                    AllParticipantsTimePlayed = table.Column<int>(nullable: false),
                    PvEKills = table.Column<int>(nullable: false),
                    PvESecondsPlayed = table.Column<long>(nullable: false),
                    PvEEfficiency = table.Column<double>(nullable: false),
                    PvEPrecisionKills = table.Column<int>(nullable: false),
                    PvPActivitiesEntered = table.Column<int>(nullable: false),
                    PvPSecondsPlayed = table.Column<long>(nullable: false),
                    PvPActivitiesWon = table.Column<int>(nullable: false),
                    PvPEfficiency = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClanMemberStats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClanMemberStats_ClanMembers_Id",
                        column: x => x.Id,
                        principalTable: "ClanMembers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClanMemberProfiles");

            migrationBuilder.DropTable(
                name: "ClanMemberStats");

            migrationBuilder.DropTable(
                name: "ClanMembers");
        }
    }
}
