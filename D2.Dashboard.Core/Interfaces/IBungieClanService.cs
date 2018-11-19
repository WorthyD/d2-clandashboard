using System.Threading.Tasks;

namespace D2.Dashboard.Core.Interfaces
{
    public interface IBungieClanService
    {
        Task<Entities.Clan> GetClan(long clanId);
    }
}
