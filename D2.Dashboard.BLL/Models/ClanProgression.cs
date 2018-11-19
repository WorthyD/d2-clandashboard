using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.BLL.Models
{
    public class ClanProgression
    {
        public int ProgressionHash { get; set; }
        public int DailyProgress { get; set; }
        public int DailyLimit { get; set; }
        public int WeeklyProgress { get; set; }
        public int WeeklyLimit { get; set; }
        public int CurrentProgress { get; set; }
        public int Level { get; set; }
        public int LevelCap { get; set; }
        public int StepIndex { get; set; }
        public int ProgressToNextLevel { get; set; }
        public int NextLevelAt { get; set; }

    }
}
