using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Entities
{
    public abstract class BaseEntity
    {
        public long Id { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}
