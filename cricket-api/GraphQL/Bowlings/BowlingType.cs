using System.Linq;
using cricket_api.Data;
using cricket_api.Models;
using HotChocolate;
using HotChocolate.Types;

namespace cricket_api.GraphQL.Bowlings
{
    public class BowlingType : ObjectType<Bowling>
    {
        protected override void Configure(IObjectTypeDescriptor<Bowling> descriptor)
        {
            descriptor
                .Field(x => x.Id)
                .Description("Represents the unique id for the bowling stat");

            descriptor
                .Field(x => x.Overs)
                .Description("Represents the total overs bowled for the game");

            descriptor
                .Field(x => x.Wickets)
                .Description("Represents the total number of wickets taken");

            descriptor
                .Field(x => x.Runs)
                .Description("Represents the total runs conceded");

            descriptor
                .Field(x => x.Maidens)
                .Description("Represents the total maidens bowled");

            descriptor
                .Field(x => x.Game)
                .ResolveWith<Resolvers>(x => x.GetGame(default!, default!))
                .UseDbContext<AppDbContext>()
                .Description("Represents the game associated with bowling stats");
        }
        private class Resolvers
        {
            public Game GetGame([Parent] Bowling bowling, [ScopedService] AppDbContext context)
            {
                return context.Games.FirstOrDefault(x => x.Id == bowling.GameId);
            }
        }
    }
}