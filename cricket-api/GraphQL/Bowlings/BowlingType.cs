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
            base.Configure(descriptor);
        }
        private class Resolvers
        {
            public Game GetGame(Bowling bowling, [ScopedService] AppDbContext context)
            {
                return context.Games.FirstOrDefault(x => x.Id == bowling.GameId);
            }
        }
    }
}