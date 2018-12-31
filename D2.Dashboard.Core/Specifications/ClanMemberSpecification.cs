using D2.Dashboard.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Specifications
{
    public class ClanMemberSpecification : BaseSpecification<ClanMember>
    {
        public ClanMemberSpecification(long clanId) : base(x => x.GroupId == clanId)
        {

        }

    }
}
