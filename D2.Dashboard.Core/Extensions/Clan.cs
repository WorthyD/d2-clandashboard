using System;
using System.Collections.Generic;
using System.Text;
using D2.Dashboard.Core.Entities;

namespace D2.Dashboard.Core.Extensions
{
    public static class ClanExtensions
    {
        public static bool IsDBCacheExpired(this Clan c)
        {
            return c.LastUpdate < DateTime.Now.AddDays(-1);
        }
    }
}
