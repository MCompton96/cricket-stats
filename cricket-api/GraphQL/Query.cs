using System.Linq;
using cricket_api.Models;
using HotChocolate;
using HotChocolate.Data;
using cricket_api.Data;

namespace cricket_api.GraphQL
{
    public class Query
    {
        [UseDbContext(typeof(AppDbContext))]
        [UseProjection]
        public IQueryable<Game> GetGame([ScopedService] AppDbContext context)
        {
            return context.Games;
        }

        [UseDbContext(typeof(AppDbContext))]
        [UseProjection]
        public IQueryable<Batting> GetBatting([ScopedService] AppDbContext context)
        {
            return context.Battings;
        }

        [UseDbContext(typeof(AppDbContext))]
        [UseProjection]
        public IQueryable<Bowling> GetBowling([ScopedService] AppDbContext context)
        {
            return context.Bowlings;
        }

        [UseDbContext(typeof(AppDbContext))]
        [UseProjection]
        public IQueryable<Result> GetResult([ScopedService] AppDbContext context)
        {
            return context.Results;
        }
    }
}