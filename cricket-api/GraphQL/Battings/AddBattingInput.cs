using System;

namespace cricket_api.GraphQL.Battings
{
    public record AddBattingInput(
        Guid GameId,
        int Runs,
        bool Out,
        int? Boundaries,
        int? Sixes
    );
}