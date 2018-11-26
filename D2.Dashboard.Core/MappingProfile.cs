using AutoMapper;
using D2.Dashboard.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Clan, Clan>();
        }

    }
}
