using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BungieAPI.Model;
using D2.Dashboard.Core.Entities;
using D2.Dashboard.Core.Interfaces;

using D2.Dashboard.Core.Extensions;

namespace D2.Dashboard.Infrastructure.Services
{
    public class BungieClanService : BaseBungieService, IBungieClanService
    {
        private readonly BungieAPI.Api.GroupV2Api _groupAPI;
        private readonly IRepository _repository;

        public BungieClanService(string apiKey) : base(apiKey)
        {
            var config = new BungieAPI.Client.Configuration();
            config.DefaultHeader.Add("X-API-Key", apiKey);
            this._groupAPI = new BungieAPI.Api.GroupV2Api(config);

        }


        public async Task<Clan> GetClan(long clanId)
        {

            var clanResponse = await this._groupAPI.GroupV2GetGroupAsync(clanId);

            var clan = ConvertClanResponse(clanResponse);
            return clan;
        }

        public async Task GetClanMembers(long clanId)
        {
            var clanMemberResponse = await this._groupAPI.GroupV2GetMembersOfGroupAsync(1, clanId);
            var clanMembers = ConvertClanMemberResponse(clanMemberResponse);

        }



        private List<ClanMember> ConvertClanMemberResponse(InlineResponse20025 resp)
        {

            List<ClanMember> clanMembers = new List<ClanMember>();
            foreach (var r in resp.Response.Results)
            {
                //clanMembers.Add();


            }

            return null;
        }


        // Todo: Automapper
        private Clan ConvertClanResponse(InlineResponse20022 resp)
        {
            var clan = new Clan();
            var cd = resp.Response.Detail;
            clan.About = cd.About;
            clan.AvatarPath = cd.AvatarPath;
            clan.BannerPath = cd.BannerPath;
            clan.CreationDate = (cd.CreationDate.HasValue) ? cd.CreationDate.Value : DateTime.MinValue;
            clan.GroupId = (cd.GroupId.HasValue) ? cd.GroupId.Value : 0;
            clan.IsPublic = (cd.IsPublic.HasValue) ? cd.IsPublic.Value : true;
            clan.IsPublicTopicAdminOnly = (cd.IsPublicTopicAdminOnly.HasValue) ? cd.IsPublicTopicAdminOnly.Value : true;
            clan.Locale = cd.Locale;
            clan.MemberCount = (cd.MemberCount.HasValue) ? cd.MemberCount.Value : 0;
            clan.MembershipIdCreated = (cd.MembershipIdCreated.HasValue) ? cd.MembershipIdCreated.Value : 0;
            clan.ModificationDate = (cd.ModificationDate.HasValue) ? cd.ModificationDate.Value : DateTime.MinValue;
            clan.Motto = cd.Motto;
            clan.Name = cd.Name;
            clan.Theme = cd.Theme;

            clan.ClanInfo = ConvertClanInfo(cd.ClanInfo);
            clan.Id = clan.GroupId;

            return clan;
        }
        private ClanInfo ConvertClanInfo(GroupsV2GroupV2ClanInfoAndInvestment ci)
        {
            var info = new ClanInfo();
            info.ClanProgressions = new List<ClanProgression>();
            foreach (var x in ci.D2ClanProgressions)
            {
                if (x.Value != null)
                {
                    var prog = x.Value;
                    info.ClanProgressions.Add(ConvertProgression(prog));
                }
            }
            return info;
        }
        private ClanProgression ConvertProgression(DestinyDestinyProgression prog)
        {
            return new ClanProgression()
            {
                CurrentProgress = prog.CurrentProgress.ZeroIfNull(),
                DailyLimit = prog.DailyLimit.ZeroIfNull(),
                DailyProgress = prog.DailyProgress.ZeroIfNull(),
                Level = prog.Level.ZeroIfNull(),
                LevelCap = prog.Level.ZeroIfNull(),
                NextLevelAt = prog.Level.ZeroIfNull(),
                ProgressionHash = prog.ProgressionHash.ZeroIfNull(),
                ProgressToNextLevel = prog.ProgressToNextLevel.ZeroIfNull(),
                StepIndex = prog.StepIndex.ZeroIfNull(),
                WeeklyLimit = prog.WeeklyLimit.ZeroIfNull(),
                WeeklyProgress = prog.WeeklyProgress.ZeroIfNull()
            };
        }
    }

}