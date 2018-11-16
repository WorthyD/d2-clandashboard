using BungieAPI.Api;
using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.BLL.Providers
{
    public class ClanProvider
    {

        public void GetClan(int id)
        {
            //BungieAPI.Api.Destiny2Api destiny2Api = new BungieAPI.Api.Destiny2Api();
            //destiny2Api.Destiny2GetClanAggregateStats();
            BungieAPI.Client.Configuration configuration = new BungieAPI.Client.Configuration();
            //configuration.AddApiKey("X-API-Key", "");
            //configuration.ApiKey = "";
            var apiInstance = new GroupV2Api(configuration);
            var groupId = 2916512;
            var x = apiInstance.GroupV2GetGroup(groupId);

           
            if (x != null)
            {

            }

        }
    }
}
