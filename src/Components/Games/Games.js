import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';
import * as React from 'react';
import { battingData } from '../../Data/Batting-Data';
import { bowlingData } from '../../Data/Bowling-Data';
import { gameData } from '../../Data/Game-Data';
import GamesTable from './Games-Table';


function Games() {
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
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                                <GamesTable 
                                    gameData={gameData}
                                    battingData={battingData}
                                    bowlingData={bowlingData}
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