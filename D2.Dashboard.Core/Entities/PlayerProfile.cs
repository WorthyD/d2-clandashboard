using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Entities
{
    public class PlayerProfile: BaseEntity
    {
        public DateTime LastPlayed { get; set; }
        public long TriumpScore { get; set; }

        public virtual Player Player { get; set; }
    }
}
