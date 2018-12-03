using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Entities
{
    public class ClanMember : BaseEntity
    {
        public int MemberType { get; set; }
        public long GroupId { get; set; }
        public long DestinyMembershipId { get; set; }
        public int DestinyMembershiptType { get; set; }
        public string DestinyDisplayName { get; set; }
        public string BungieIconPath { get; set; }

        public ClanMemberProfile Profile { get; set; }
        public ClanMemberStats Stats { get; set; }

    }
}
