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
import { useMutation } from '@apollo/client';
import { Mutations } from '../../GraphQL';
import { useNavigate } from 'react-router-dom';
import BattingDetailsForm from './Batting-Details-Form';

function AddGame() {

    const navigate = useNavigate();

    const [addBatting] = useMutation(Mutations.ADD_BATIING, {
        onCompleted: () => {
            navigate('/');
        }
    });
    const [addBowling] = useMutation(Mutations.ADD_BOWLING);

    const [addGame] = useMutation(Mutations.ADD_GAME, { 
        onCompleted: ({addGame}) => {
            addBowling({variables: {
                gameId: addGame.game.id,
                overs: parseInt(resultData.overs),
                wickets: parseInt(resultData.wickets),
                runs: parseInt(resultData.runsConceded),
                maidens: parseInt(resultData.wickets)
            }});
    
            addBatting({variables: {
                gameId: addGame.game.id,
                runs: parseInt(resultData.runs),
                out: resultData.out,
                boundaries: parseInt(resultData.boundaries),
                sixes: parseInt(resultData.sixes)
            }});
        }});
    
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
        out: true
    });

    const [bowlingData, setBowlingData] = React.useState({
        overs: 0,
        runsConceded: 0,
        wickets: 0,
        maidens: 0,
        wicketMarkers: []
    });

    const handleClick = async () => {
        await addGame({ variables: {
            date: basicData.date,
            opponent: basicData.opponent,
            home: basicData.home,
            ground: basicData.ground,
            won: resultData.won,
            by: parseInt(resultData.by),
            method: resultData.method
        }});
    }

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
                <Container sx={{ mt: 4, mb: 4}}>
                    <Grid container spacing={3}>
                        {page === 1 && (<BasicInfoForm basicData={basicData} setBasicData={setBasicData}/>)}
                        {page === 2 && (<ResultForm resultData={resultData} setResultData={setResultData}/>)}
                        {page === 3 && (<BattingDetailsForm bowlingData={bowlingData} setBowlingData={setBowlingData}/>)}
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
                            {page === 3 && (
                                <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="contained" style={{background: 'rgb(25, 118, 210)', color: 'white'}}
                                    onClick={handleClick}>
                                    Submit
                                    </Button>
                                </Grid>
                            )}
                            <IconButton 
                                onClick={() => {
                                    const nextPage = page + 1;
                                    setPage(nextPage);
                                }}
                                disabled={page === 3}
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