import { gql } from "@apollo/client";

export const GET_BATTING_RUNS = gql`
    query getRuns {
        batting {
            runs
        }
    }
`;

export const GET_BATTING_DATA = gql`
    query getBatting {
        batting {
            runs
            boundaries
            sixes
            out
        }
    }
`;

export const GET_BOWLING_DATA = gql`
    query getBowlingRuns {
        bowling {
            wickets
            overs 
            runs
            maidens
        }
    }
`;

export const GET_GAME_DATA = gql`
    query getGame {
        game {
            id
            date
            opponent
            result {
                won
                by
                method
            }
            batting {
                runs
            }
            bowling {
                runs
                wickets
            }
            location {
                ground 
                home
            }
        }
    }
`;