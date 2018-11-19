using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Extensions
{
    public static class Numeric
    {
        public static long ZeroIfNull(this long? n)
        {
            return (n.HasValue) ? n.Value : 0;
        }
        public static int ZeroIfNull(this int? n)
        {
            return (n.HasValue) ? n.Value : 0;
        }
        public static uint ZeroIfNull(this uint? n)
        {
            return (n.HasValue) ? n.Value : 0;
        }

    }
}
