using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace D2.Dashboard.Infrastructure.Migrations
{
    public partial class init : Migration
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
                    LastMemberUpdate = table.Column<DateTime>(nullable: false),
                    ClanInfoJSON = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clans", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Player",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    MemberType = table.Column<int>(nullable: false),
                    DestinyMembershipId = table.Column<long>(nullable: false),
                    DestinyMembershiptType = table.Column<int>(nullable: false),
                    DestinyDisplayName = table.Column<string>(nullable: true),
                    BungieIconPath = table.Column<string>(nullable: true),
                    ClanId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Player", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Player_Clans_ClanId",
                        column: x => x.ClanId,
                        principalTable: "Clans",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PlayerProfile",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    LastPlayed = table.Column<DateTime>(nullable: false),
                    TriumpScore = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlayerProfile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PlayerProfile_Player_Id",
                        column: x => x.Id,
                        principalTable: "Player",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PlayerStats",
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
                    table.PrimaryKey("PK_PlayerStats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PlayerStats_Player_Id",
                        column: x => x.Id,
                        principalTable: "Player",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Player_ClanId",
                table: "Player",
                column: "ClanId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlayerProfile");

            migrationBuilder.DropTable(
                name: "PlayerStats");

            migrationBuilder.DropTable(
                name: "Player");

            migrationBuilder.DropTable(
                name: "Clans");
        }
    }
}
