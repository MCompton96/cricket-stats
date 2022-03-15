import { 
    Button,
    Container, 
    Grid, 
    IconButton, 
    Toolbar 
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import BasicInfoForm from './Basic-Info-Form';
import ResultForm from './Result-Form';

function AddGame() {
    const [page, setPage] = React.useState(1);

    const [basicData, setBasicData] = React.useState({
        opponent: '',
        date: new Date(),
        home: true,
        ground: ''
    });

    const [resultData, setResultData] = React.useState({
        won: true,
        by: 0,
        method: 'runs',
        runs: 0,
        boundaries: 0,
        sixes: 0,
        overs: 0,
        runsConceded: 0,
        wickets: 0,
        maidens: 0
    })
    return (
        
        <React.Fragment>
            <Box
                component="AddGame"
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
                        {page === 1 && (<BasicInfoForm basicData={basicData} setBasicData={setBasicData}/>)}
                        {page === 2 && (<ResultForm resultData={resultData} setResultData={setResultData}/>)}
                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <IconButton 
                                disabled={page === 1}
                                onClick={() => {
                                    const prevPage = page - 1;
                                    console.log(prevPage);
                                    setPage(prevPage);
                                }}
                                >
                                <NavigateBefore />
                            </IconButton>
                            {page === 2 && (
                                <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="contained" style={{background: 'rgb(25, 118, 210)', color: 'white'}}>
                                    Submit
                                    </Button>
                                </Grid>
                            )}
                            <IconButton 
                                onClick={() => {
                                    const nextPage = page + 1;
                                    console.log(nextPage);
                                    setPage(nextPage);
                                }}
                            >
                                <NavigateNext />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default AddGame;