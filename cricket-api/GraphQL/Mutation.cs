using System.Threading.Tasks;
using cricket_api.Data;
using cricket_api.GraphQL.Games;
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

            return new AddGamePayload(game);
        }
    }
}