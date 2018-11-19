using D2.Dashboard.Core.Interfaces;
using D2.Dashboard.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace D2.Dashboard.Core.Services
{
    public class ClanService
    {
        private readonly IBungieClanService _bungieClanService;
        public ClanService(IBungieClanService bungieSrvc)
        {
            this._bungieClanService = bungieSrvc;
        }

        public async Task<Clan> GetClan(long clanId)
        {
            // todo:  determine where we retrieve clan from. Cache, DB or service.

            return await this._bungieClanService.GetClan(clanId);
        }
    }
}
