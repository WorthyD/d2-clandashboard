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

        public AppDbContext(DbContextOptions options): base(options)
        {

        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    //optionsBuilder.UseSqlite("Data Source=destiny.db");
        //}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Clan>().HasKey(c => new { c.Id });
            builder.Entity<Clan>().Property(c => c.Id).IsRequired().ValueGeneratedNever();
            builder.Entity<Clan>().Ignore(c => c.ClanInfo);
        }
    }
}
