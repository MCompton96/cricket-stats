import { Container, Grid, Paper, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { bowlingData } from '../../Data/Bowling-Data';
import BowlingTable from './Bowling-Table';
import AverageChart from './Charts/Average-Chart';
import GameChart from './Charts/Game-Chart';

function BowlingStats() {
    return (
        <React.Fragment>
            <Box
                component="bowling"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[100],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto'
                }}
            >
                <Toolbar />
                <Container maxWidth='lg' sx={{ mt: 4, mb: 4}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                                <BowlingTable data={bowlingData}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={6}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 355,
                            }}
                        >
                            <GameChart data={bowlingData}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={8} md={4} lg={6}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 355,
                            }}
                        >
                            <AverageChart data={bowlingData} />
                        </Paper>
                    </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default BowlingStats;