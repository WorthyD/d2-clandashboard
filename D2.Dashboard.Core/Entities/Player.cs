using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Entities
{
    public class Player : BaseEntity
    {
        public int MemberType { get; set; }

        public long DestinyMembershipId { get; set; }
        public int DestinyMembershiptType { get; set; }
        public string DestinyDisplayName { get; set; }
        public string BungieIconPath { get; set; }

        public PlayerProfile Profile { get; set; }
        public PlayerStats Stats { get; set; }

        public virtual Clan Clan { get; set; }
        //public virtual ClanMember ClanMember { get; set; }
    }
}
