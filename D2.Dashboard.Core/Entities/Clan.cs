using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Entities
{
    public class Clan : BaseEntity
    {
        public long GroupId { get; set; }
        public string Name { get; set; }
        public int GroupType { get; set; }
        public long MembershipIdCreated { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        public string About { get; set; }
        public int MemberCount { get; set; }
        public bool IsPublic { get; set; }
        public bool IsPublicTopicAdminOnly { get; set; }
        public string Motto { get; set; }
        public string Locale { get; set; }
        public string Theme { get; set; }
        public string BannerPath { get; set; }
        public string AvatarPath { get; set; }

        public DateTime LastMemberUpdate { get; set; }

        public ClanInfo ClanInfo { get; set; }
        public string ClanInfoJSON { get; set; }



    }
}

