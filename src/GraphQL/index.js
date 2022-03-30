import {
    gql,
    ApolloClient,
    InMemoryCache,
    useQuery
} from '@apollo/client';
import * as Queries from './query';
import * as Mutations from './mutations';


export const client = new ApolloClient({
    uri: 'https://localhost:5001/api/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `bearer ${localStorage.getItem("token")}`
    }
});


export {
    Queries,
    Mutations
}

// export const battingData = client.query({
//     query: GET_BATTING_DATA
// });

// export const bowlingData = client.query({
//     query: GET_BOWLING_DATA
// });

// export const gameData = client.query({
//     query: GET_GAME_DATA
// });