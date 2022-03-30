import { useQuery } from '@apollo/client';
import { Container, Grid, Paper, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import BowlingTable from './Bowling-Table';
import AverageChart from './Charts/Average-Chart';
import GameChart from './Charts/Game-Chart';
import { Queries } from '../../GraphQL';

function BowlingStats() {

    const [bowlingData, setBowlingData] = React.useState([]);

    const { data } = useQuery(Queries.GET_BOWLING_DATA);

    React.useEffect(() => {
        if (data) {
            setBowlingData(data.bowling);
        }
    }, [data])

    
    return (
        <React.Fragment>
            <Box
                component="Bowling"
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