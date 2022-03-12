using cricket_api.Models;

namespace cricket_api.GraphQL.Games
{
    public record AddGamePayload(
        Game game,
        GameLocation location,
        Result result
    );
}