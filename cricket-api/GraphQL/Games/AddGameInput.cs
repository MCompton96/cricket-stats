using System;

namespace cricket_api.GraphQL.Games
{
    public record AddGameInput(
        string Opponent,
        DateTime Date
    );
}