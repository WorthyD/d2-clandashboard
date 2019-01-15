using AutoMapper;
using BungieAPI.Model;
using D2.Dashboard.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Infrastructure
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<GroupsV2GroupMember, ClanMember>()
                .ForMember(c => c.Id, g => g.MapFrom(x => x.DestinyUserInfo.MembershipId))
                .ForMember(c => c.BungieIconPath, g => g.MapFrom(x => x.BungieNetUserInfo.IconPath))
                .ForMember(c => c.DestinyDisplayName, g => g.MapFrom(x => x.DestinyUserInfo.DisplayName))
                .ForMember(c => c.DestinyMembershipId, g => g.MapFrom(x => x.DestinyUserInfo.MembershipId))
                .ForMember(c => c.DestinyMembershiptType, g => g.MapFrom(x => x.DestinyUserInfo.MembershipType))
                .ReverseMap();


        }
    }
}
