using D2.Dashboard.Core.Interfaces;
using D2.Dashboard.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

using D2.Dashboard.Core.Extensions;
using AutoMapper;

namespace D2.Dashboard.Core.Services
{
    public class ClanService
    {
        private readonly IBungieClanService _bungieClanService;

        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public ClanService(IBungieClanService bungieSrvc, IRepository repository,  IMapper mapper)
        {
            this._bungieClanService = bungieSrvc;
            this._repository = repository;
            this._mapper = mapper;
        }

        public async Task<Clan> GetClan(long clanId)
        {
            // todo:  determine where we retrieve clan from. Cache, DB or service.
            var clan = this._repository.GetById<Clan>(clanId);

            if (clan == null)
            {
                clan = await CreateClan(clanId);
            }

            if (clan.IsDBCacheExpired())
            {
                clan = await UpdateClan(clan);
            }

            return clan;
        }

        private async Task<Clan> CreateClan(long clanId)
        {
            var clan = await this._bungieClanService.GetClan(clanId);

            if (clan == null)
            {
                return null;
            }

            clan.ClanInfoJSON = JsonConvert.SerializeObject(clan.ClanInfo);
            clan.LastUpdate = DateTime.Now;

            this._repository.Add<Clan>(clan);

            return clan;
        }

        private async Task<Clan> UpdateClan(Clan c)
        {
            var clan = await this._bungieClanService.GetClan(c.Id); 
            if (clan == null)
            {
                // throw exception
            }
            //TODO Use automapper
            this._mapper.Map(clan, c);
            c.ClanInfoJSON = JsonConvert.SerializeObject(clan.ClanInfo);
            c.LastUpdate = DateTime.Now;

            this._repository.Update<Clan>(c);

            return c;
        }
    }
}
