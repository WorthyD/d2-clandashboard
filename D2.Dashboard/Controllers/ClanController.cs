using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace D2.Dashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClanController : ControllerBase
    {
        [HttpGet("[action]")]
        public string Stuff()
        {

            new D2.Dashboard.BLL.Providers.ClanProvider().GetClan(1);
            return "testing";
        }
    }
}