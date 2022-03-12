using System.Linq;
using cricket_api.Models;
using HotChocolate;
using HotChocolate.Data;
using cricket_api.Data;

namespace cricket_api.GraphQL
{
    [GraphQLDescription("Represents the queries available")]
    public class Query
    {
        [GraphQLDescription("Represents the queries for the cricket games")]
        [UseDbContext(typeof(AppDbContext))]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Game> GetGame([ScopedService] AppDbContext context)
        {
            return context.Games;
        }

        [GraphQLDescription("Represents the queries for the batting stats")]
        [UseDbContext(typeof(AppDbContext))]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Batting> GetBatting([ScopedService] AppDbContext context)
        {
            return context.Battings;
        }

        [GraphQLDescription("Represents the queries for the bowling stats")]
        [UseDbContext(typeof(AppDbContext))]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Bowling> GetBowling([ScopedService] AppDbContext context)
        {
            return context.Bowlings;
        }

        [GraphQLDescription("Represents the queries for game results")]
        [UseDbContext(typeof(AppDbContext))]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Result> GetResult([ScopedService] AppDbContext context)
        {
            return context.Results;
        }

        [GraphQLDescription("Represents the queries for the game locations")]
        [UseDbContext(typeof(AppDbContext))]
        [UseFiltering]
        [UseSorting]
        public IQueryable<GameLocation> GetLocation([ScopedService] AppDbContext context)
        {
            return context.Locations;
        }
    }
}