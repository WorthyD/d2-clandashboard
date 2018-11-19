using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Infrastructure.Services
{
    public class BaseBungieService
    {
        private readonly string _apiKey;
        public BaseBungieService(string apiKey)
        {
            this._apiKey = apiKey;
        }

        private BungieAPI.Client.Configuration getConfiguration()
        {
            var config = new BungieAPI.Client.Configuration();
            config.DefaultHeader.Add("X-API-Key", this._apiKey);
            return config;
        }
    }
}
