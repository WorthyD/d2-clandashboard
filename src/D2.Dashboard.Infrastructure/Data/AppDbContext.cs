using D2.Dashboard.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace D2.Dashboard.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {

        public DbSet<Clan> Clans { get; set; }
      //  public DbSet<ClanMember> ClanMembers { get; set; }

        public DbSet<Player> Player { get; set; }
        public DbSet<PlayerStats> PlayerStats { get; set; }
        public DbSet<PlayerProfile> PlayerProfile { get; set; }

        public AppDbContext(DbContextOptions options): base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.EnableSensitiveDataLogging(true);
            //optionsBuilder.UseSqlite("Data Source=destiny.db");
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Clan>().HasKey(c => new { c.Id });
            builder.Entity<Clan>().Property(c => c.Id).IsRequired().ValueGeneratedNever();
            builder.Entity<Clan>().Ignore(c => c.ClanInfo);
            builder.Entity<Clan>().HasMany(c => c.ClanPlayers).WithOne(i => i.Clan);

            //builder.Entity<ClanMember>().HasKey(c => new { c.ProfileId, c.GroupId });
            //builder.Entity<ClanMember>().HasOne(c => c.Clan).WithOne(x => x.pr)



            builder.Entity<Player>().HasKey(c => new { c.Id });
            builder.Entity<Player>().Property(c => c.Id).IsRequired().ValueGeneratedNever();
            builder.Entity<Player>().HasOne(c => c.Stats).WithOne(i => i.Player).HasForeignKey<PlayerStats>(s => s.Id);
            builder.Entity<Player>().HasOne(c => c.Profile).WithOne(i => i.Player).HasForeignKey<PlayerProfile>(s => s.Id);
            //builder.Entity<Player>().HasOne(c => c.Clan).WithOne(i => i.ClanPlayers).HasForeignKey<PlayerProfile>(s => s.Id);

            builder.Entity<PlayerStats>().HasKey(c => new { c.Id });

            builder.Entity<PlayerProfile>().HasKey(c => new { c.Id });
            
            //builder.Entity<ClanMember>().HasOne(c => c.Stats).WithOne().HasForeignKey(m => m.)
        }
    }
}
