import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) { 
        login(input: {
            email: $email,
            password: $password
        })
    }
`;

export const ADD_BATIING = gql`
    mutation AddBatting($runs: Int!, $boundaries: Int!, $sixes: Int!, $out: Boolean!) {
        addBatting(input: {
            runs: $runs,
            boundaries: $boundaries,
            sixes: $sixes,
            out: $out
        }) {
            batting {
                id
            }
        }
    }
`;

export const ADD_BOWLING = gql`
    mutation AddBowling($overs: Int!, $wickets: Int!, $runs: Int!, $maidens: Int) {
        addBowling(input: {
            overs: $overs,
            wickets: $wickets,
            runs: $runs,
            maidens: $maidens
        }) {
            bowling {
                id
            }
        }
    }
`;

export const ADD_GAME = gql`
    mutation AddGame(
        $date: DateTime!, 
        $opponent: String!,
        $home: Boolean!,
        $ground: String!,
        $won: Boolean!,
        $by: Int!,
        $method: String! 
    ) {
        addGame(input: {
            date: $date,
            opponent: $opponent,
            home: $home,
            ground: $ground,
            won: $won,
            by: $by,
            method: $method
        }) {
            game {
                id
                location {
                    id
                }
                result {
                    id
                }
            }
        }
    }
`;