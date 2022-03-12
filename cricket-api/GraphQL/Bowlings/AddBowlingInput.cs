using System;

namespace cricket_api.GraphQL.Bowlings
{
    public record AddBowlingInput(
        Guid GameId,
        int Overs,
        int Wickets,
        int Runs,
        int? Maidens
    );
}