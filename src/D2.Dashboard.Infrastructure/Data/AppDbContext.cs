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
        public DbSet<ClanMember> ClanMembers { get; set; }
        public DbSet<ClanMemberStats> ClanMemberStats { get; set; }
        public DbSet<ClanMemberProfile> ClanMemberProfiles { get; set; }

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

            builder.Entity<ClanMember>().HasKey(c => new { c.Id });
            builder.Entity<ClanMember>().Property(c => c.Id).IsRequired().ValueGeneratedNever();
            builder.Entity<ClanMember>().HasOne(c => c.Stats).WithOne(i => i.Member).HasForeignKey<ClanMemberStats>(s => s.Id);
            builder.Entity<ClanMember>().HasOne(c => c.Profile).WithOne(i => i.Member).HasForeignKey<ClanMemberProfile>(s => s.Id);

            builder.Entity<ClanMemberStats>().HasKey(c => new { c.Id });

            builder.Entity<ClanMemberProfile>().HasKey(c => new { c.Id });
            
            //builder.Entity<ClanMember>().HasOne(c => c.Stats).WithOne().HasForeignKey(m => m.)
        }
    }
}
