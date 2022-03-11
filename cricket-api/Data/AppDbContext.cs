using Microsoft.EntityFrameworkCore;
using cricket_api.Models;

namespace cricket_api.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {}

        public DbSet<Game> Games { get; set; }
        public DbSet<Result> Results { get; set; }
        public DbSet<GameLocation> Locations { get; set; }
        public DbSet<Batting> Battings { get; set; }
        public DbSet<Bowling> Bowlings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Game>()
                .HasOne(g => g.Result)
                .WithOne(r => r.Game)
                .HasForeignKey<Result>(r => r.GameId);

            modelBuilder
                .Entity<Game>()
                .HasOne(g => g.GameLocation)
                .WithOne(l => l.Game)
                .HasForeignKey<GameLocation>(l => l.GameId);

            modelBuilder
                .Entity<Game>()
                .HasOne(g => g.Batting)
                .WithOne(b => b.Game)
                .HasForeignKey<Batting>(b => b.GameId);

            modelBuilder
                .Entity<Game>()
                .HasOne(g => g.Bowling)
                .WithOne(b => b.Game)
                .HasForeignKey<Bowling>(b => b.GameId);
        }
    }
}