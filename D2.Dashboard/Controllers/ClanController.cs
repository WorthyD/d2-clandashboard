using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using D2.Dashboard.Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace D2.Dashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClanController : ControllerBase
    {

        private readonly ClanService _clanService;
        public ClanController(ClanService cs)
        {
            this._clanService = cs;

        }

        [HttpGet("[action]/{clanId}")]
        public async Task<IActionResult> Get(long clanId)
        {
            return Ok(await this._clanService.GetClan(clanId));
            //new D2.Dashboard.BLL.Providers.ClanProvider().GetClan(1);
        }

        [HttpGet("[action]/{clanId}/members")]
        public async Task<IActionResult> GetMembers(long clanId)
        {
            return Ok(await this._clanService.GetClan(clanId));
            //new D2.Dashboard.BLL.Providers.ClanProvider().GetClan(1);
        }



        [HttpGet("[action]")]
        public async Task<IActionResult> Stuff()
        {
            return Ok(await this._clanService.GetClan(2916512));
            //new D2.Dashboard.BLL.Providers.ClanProvider().GetClan(1);
        }
    }
}