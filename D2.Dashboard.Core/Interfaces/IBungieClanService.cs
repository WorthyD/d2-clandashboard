using System.Collections.Generic;
using System.Threading.Tasks;

namespace D2.Dashboard.Core.Interfaces
{
    public interface IBungieClanService
    {
        Task<Entities.Clan> GetClan(long clanId);
        Task<List<Entities.ClanMember>> GetClanMembers(long clanId);
    }
}
