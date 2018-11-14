using BungieAPI.Api;
using BungieAPI.Model;
using Newtonsoft.Json;
using System;
using System.Diagnostics;

namespace D2.TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string content = "{\"Response\":{\"detail\":{\"groupId\":\"2916512\",\"name\":\"DoD BFAM\",\"groupType\":1,\"membershipIdCreated\":\"4750546\",\"creationDate\":\"2017-11-23T17:21:13.951Z\",\"modificationDate\":\"2018-01-02T17:59:07.427Z\",\"about\":\"Dudes playing Destiny. Come join us for comradery and fun. Join us on our Discord server. https://discord.gg/fJ28QTu\",\"tags\":[],\"memberCount\":98,\"isPublic\":true,\"isPublicTopicAdminOnly\":false,\"motto\":\"Brothers From Another Mother\",\"allowChat\":true,\"isDefaultPostPublic\":false,\"chatSecurity\":0,\"locale\":\"en\",\"avatarImageIndex\":0,\"homepage\":0,\"membershipOption\":0,\"defaultPublicity\":2,\"theme\":\"Group_Community1\",\"bannerPath\":\"/img/Themes/Group_Community1/struct_images/group_top_banner.jpg\",\"avatarPath\":\"/img/profile/avatars/group/defaultGroup.png\",\"conversationId\":\"34369477\",\"enableInvitationMessagingForAdmins\":false,\"banExpireDate\":\"2001-01-01T00:00:00Z\",\"features\":{\"maximumMembers\":100,\"maximumMembershipsOfGroupType\":1,\"capabilities\":31,\"membershipTypes\":[1,2,4,10],\"invitePermissionOverride\":true,\"updateCulturePermissionOverride\":true,\"hostGuidedGamePermissionOverride\":2,\"updateBannerPermissionOverride\":true,\"joinLevel\":2},\"clanInfo\":{\"d2ClanProgressions\":{\"584850370\":{\"progressionHash\":584850370,\"dailyProgress\":600000,\"dailyLimit\":0,\"weeklyProgress\":0,\"weeklyLimit\":0,\"currentProgress\":600000,\"level\":6,\"levelCap\":6,\"stepIndex\":6,\"progressToNextLevel\":0,\"nextLevelAt\":0},\"1273404180\":{\"progressionHash\":1273404180,\"dailyProgress\":0,\"dailyLimit\":0,\"weeklyProgress\":0,\"weeklyLimit\":0,\"currentProgress\":0,\"level\":1,\"levelCap\":6,\"stepIndex\":1,\"progressToNextLevel\":0,\"nextLevelAt\":1},\"3759191272\":{\"progressionHash\":3759191272,\"dailyProgress\":0,\"dailyLimit\":0,\"weeklyProgress\":0,\"weeklyLimit\":0,\"currentProgress\":0,\"level\":1,\"levelCap\":6,\"stepIndex\":1,\"progressToNextLevel\":0,\"nextLevelAt\":1},\"3381682691\":{\"progressionHash\":3381682691,\"dailyProgress\":0,\"dailyLimit\":0,\"weeklyProgress\":0,\"weeklyLimit\":0,\"currentProgress\":0,\"level\":1,\"levelCap\":6,\"stepIndex\":1,\"progressToNextLevel\":0,\"nextLevelAt\":1}},\"clanCallsign\":\"BFAM\",\"clanBannerData\":{\"decalId\":4142223379,\"decalColorId\":3345832520,\"decalBackgroundColorId\":3585526343,\"gonfalonId\":1473910866,\"gonfalonColorId\":2157636323,\"gonfalonDetailId\":1647698446,\"gonfalonDetailColorId\":4128900499}}},\"founder\":{\"memberType\":5,\"isOnline\":false,\"groupId\":\"2916512\",\"destinyUserInfo\":{\"iconPath\":\"\",\"membershipType\":4,\"membershipId\":\"4611686018467461291\",\"displayName\":\"Callowyn\"},\"bungieNetUserInfo\":{\"supplementalDisplayName\":\"4750546\",\"iconPath\":\"/img/profile/avatars/bungieday_24.jpg\",\"membershipType\":254,\"membershipId\":\"4750546\",\"displayName\":\"Callowyn\"},\"joinDate\":\"2017-11-23T17:21:14Z\"},\"alliedIds\":[],\"allianceStatus\":0,\"groupJoinInviteCount\":0,\"currentUserMemberMap\":{},\"currentUserPotentialMemberMap\":{}},\"ErrorCode\":1,\"ThrottleSeconds\":0,\"ErrorStatus\":\"Success\",\"Message\":\"Ok\",\"MessageData\":{}}";


            JsonConvert.DeserializeObject(content, typeof(InlineResponse20022));


            try
            {

                //BungieAPI.Api.Destiny2Api destiny2Api = new BungieAPI.Api.Destiny2Api();
                //destiny2Api.Destiny2GetClanAggregateStats();
                BungieAPI.Client.Configuration configuration = new BungieAPI.Client.Configuration();
                //configuration.AddApiKey("X-API-Key", "ebe6e29e62be48f98959ebd0a90974ef");
                //configuration.ApiKey = "ebe6e29e62be48f98959ebd0a90974ef";
                //configuration.AddApiKey("X-API-Key", "ebe6e29e62be48f98959ebd0a90974ef");
                configuration.DefaultHeader.Add("X-API-Key", "ebe6e29e62be48f98959ebd0a90974ef");
                var apiInstance = new GroupV2Api(configuration);
                var groupId = 2916512;
                var x = apiInstance.GroupV2GetGroup(groupId);

                Debug.WriteLine(x);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.GetAvailableLocales: " + e.Message);
            }

            Console.ReadKey();
        }
    }
}
