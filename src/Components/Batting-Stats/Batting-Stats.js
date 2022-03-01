import { Container, Grid, Paper, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { battingData } from '../../Data/Batting-Data';
import BattingTable from './Batting-Table';
import AverageChart from './Charts/Average-Chart';
import RunsChart from './Charts/Runs-Chart';

function BattingStats() {
    return (
        <React.Fragment>
            <Box
                component="batting"
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
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <BattingTable data={battingData}/>
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
                            <RunsChart data={battingData} />
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
                            <AverageChart data={battingData} />
                        </Paper>
                    </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default BattingStats;