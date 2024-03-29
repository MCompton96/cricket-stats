import { useQuery } from '@apollo/client';
import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';
import * as React from 'react';
import GameBarData from './Charts/Game-Bar-Data';
import WinPctPie from './Charts/Win-Pct-Pie';
import GamesTable from './Games-Table';
import { Queries } from '../../GraphQL';


function Games() {

    const results = {
        totalWins: 0,
        totalLoss: 0,
        homeWin: 0,
        homeLoss: 0,
        awayWin: 0,
        awayLoss: 0
    };

    const [gameData, setGameData] = React.useState([]);

    const { data } = useQuery(Queries.GET_GAME_DATA);

    React.useEffect(() => {
        if (data) {
            setGameData(data.game);
        }
    }, [data])

    gameData.forEach((game) => {
        if (game.result.won) {
            results.totalWins++;
            if (game.location.home) {
                results.homeWin++;
            } else {
                results.awayWin++;
            }
        } else {
            results.totalLoss++;
            if (game.location.home) {
                results.homeLoss++;
            } else {
                results.awayLoss++;
            }
        }
    });

    return (
        <React.Fragment>
            <Box
                component="games"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[100],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',  
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 255
                                }}
                            >
                                <WinPctPie 
                                    won={results.totalWins}
                                    lost={results.totalLoss}
                                    title="Total"
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 255
                                }}                            
                            >
                                <WinPctPie 
                                    won={results.homeWin}
                                    lost={results.homeLoss}
                                    title="Home"
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 255
                                }}
                            >
                                <WinPctPie 
                                    won={results.awayWin}
                                    lost={results.awayLoss}
                                    title="Away"
                                />
                            </Paper>        
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                                <GamesTable 
                                    gameData={gameData}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default Games;