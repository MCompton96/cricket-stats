using System.Threading.Tasks;
using cricket_api.Data;
using cricket_api.GraphQL.Battings;
using cricket_api.GraphQL.Bowlings;
using cricket_api.GraphQL.Games;
using cricket_api.GraphQL.Location;
using cricket_api.Models;
using HotChocolate;
using HotChocolate.Data;

namespace cricket_api.GraphQL
{
    public class Mutation
    {
        [UseDbContext(typeof(AppDbContext))]
        public async Task<AddGamePayload> AddGameAsync(
            AddGameInput input,
            [ScopedService] AppDbContext context
        )
        {
            var game = new Game
            {
                Opponent = input.Opponent,
                Date = input.Date
            };

            context.Games.Add(game);
            await context.SaveChangesAsync();

            var location = new GameLocation
            {
                GameId = game.Id,
                Home = input.Home,
                Ground = input.Ground
            };

            context.Locations.Add(location);
            await context.SaveChangesAsync();

            var result = new Result
            {
                GameId = game.Id,
                Won = input.Won,
                By = input.By,
                Method = input.Method
            };

            context.Results.Add(result);
            await context.SaveChangesAsync();

            return new AddGamePayload(
                game,
                location,
                result
            );
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<AddBowlingPayload> AddBowlingAsync(
            AddBowlingInput input,
            [ScopedService] AppDbContext context
        )
        {
            var bowling = new Bowling
            {
                GameId = input.GameId,
                Overs = input.Overs,
                Wickets = input.Wickets,
                Runs = input.Runs,
                Maidens = input.Maidens
            };

            context.Bowlings.Add(bowling);
            await context.SaveChangesAsync();

            return new AddBowlingPayload(bowling);
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<AddBattingPayload> AddBattingAsync(
            AddBattingInput input,
            [ScopedService] AppDbContext context
        )
        {
            var batting = new Batting
            {
                GameId = input.GameId,
                Runs = input.Runs,
                Out = input.Out,
                Boundaries = input.Boundaries,
                Sixes = input.Sixes
            };

            context.Battings.Add(batting);
            await context.SaveChangesAsync();

            return new AddBattingPayload(batting);
        }
    }
}