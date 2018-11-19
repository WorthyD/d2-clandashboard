using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.BLL.Providers
{
    public class BaseProvider
    {
        private readonly string API_KEY;

        public BaseProvider(string apiKey)
        {
            this.API_KEY = apiKey;

        }
    }
}
