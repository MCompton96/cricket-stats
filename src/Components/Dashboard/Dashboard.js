import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Chart from '../Chart/Chart';
import Deposits from '../Deposits/Deposits';
import Orders from '../Orders/Orders';
import { Queries } from '../../GraphQL';
import * as StatsHelpers from '../../Common/Helpers/StatsHelpers';
import { useQuery } from '@apollo/client';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function DashboardContent() {

  const [games, setGames] = React.useState([]);
  const [batting, setBatting] = React.useState([]);
  const [bowling, setBowling] = React.useState([]);

  const { data } = useQuery(Queries.GET_GAME_DATA);
  

  React.useEffect(() => {
    if (data) {
      setGames(data?.game);
    }
  }, [data]);

  React.useEffect(() => {
    const battingStats = games.filter(x => x.batting).map(x => x.batting);
    setBatting(battingStats);
    const bowlingStats = games.filter(x => x.bowling).map(x => x.bowling);
    setBowling(bowlingStats);
  }, [games])

  return (
    <React.Fragment>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 255,
                  }}
                >
                  <Chart battingData={batting}/>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                    mb: 2
                  }}
                >
                  <Deposits 
                    title="Total Batting Runs"
                    total={StatsHelpers.calculateRuns(batting)}
                  />
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <Deposits 
                    title="Total Bowling Wickets"
                    total={StatsHelpers.totalWickets(bowling)}
                  />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders rows={games.slice(0, 2)}/>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
    </React.Fragment>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}