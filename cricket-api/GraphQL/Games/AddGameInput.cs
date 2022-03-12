using System;

namespace cricket_api.GraphQL.Games
{
    public record AddGameInput(
        string Opponent,
        DateTime Date,
        bool Home,
        string Ground,
        bool Won,
        int By,
        string Method
    );
}