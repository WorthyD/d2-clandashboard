using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Core.Entities
{
    public class ClanMemberStats : BaseEntity
    {
        public int HighestLightLevel { get; set; }
        public long SecondsPlayed { get; set; }

        public int PublicEventsCompleted { get; set; }
        public int HeroicPublicEventsCompleted { get; set; }
        public int AdventuresCompleted { get; set; }
        public int AllParticipantsTimePlayed { get; set; }

        public int PvEKills { get; set; }
        public long PvESecondsPlayed { get; set; }
        public double PvEEfficiency { get; set; }
        public int PvEPrecisionKills { get; set; }
        
        public int PvPActivitiesEntered { get; set; }
        public long PvPSecondsPlayed { get; set; }
        public int PvPActivitiesWon { get; set; }
        public int PvPEfficiency { get; set; }

        public virtual ClanMember Member { get; set; }
    }
}
