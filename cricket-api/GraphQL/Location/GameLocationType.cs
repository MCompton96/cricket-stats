using System.Linq;
using cricket_api.Data;
using cricket_api.Models;
using HotChocolate;
using HotChocolate.Types;

namespace cricket_api.GraphQL.Location
{
    public class GameLocationType: ObjectType<GameLocation>
    {
        protected override void Configure(IObjectTypeDescriptor<GameLocation> descriptor)
        {
            descriptor
                .Field(x => x.Id)
                .Description("Represents the unique id for the game location");

            descriptor
                .Field(x => x.Home)
                .Description("Boolean value for whether the game was played at home or not");

            descriptor
                .Field(x => x.Ground)
                .Description("Represents the ground where the game was played");

            descriptor
                .Field(x => x.Game)
                .ResolveWith<Resolvers>(x => x.GetGame(default!, default!))
                .UseDbContext<AppDbContext>()
                .Description("Game associated with location");
        }
        private class Resolvers
        {
            public Game GetGame(GameLocation location, [ScopedService] AppDbContext context)
            {
                return context.Games.FirstOrDefault(x => x.Id == location.GameId);
            }
        }
    }
}