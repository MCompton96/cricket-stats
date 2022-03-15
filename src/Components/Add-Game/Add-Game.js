import { 
    Container, 
    FormControl, 
    FormControlLabel, 
    Grid, 
    IconButton, 
    Paper, 
    Radio, 
    RadioGroup, 
    Stack, 
    TextField, 
    Toolbar 
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Title from '../Title/Title';
import moment from 'moment';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import BasicInfoForm from './Basic-Info-Form';
import ResultForm from './Result-Form';

function AddGame() {
    const [page, setPage] = React.useState(1);

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
                        {page === 1 && (<BasicInfoForm />)}
                        {page === 2 && (<ResultForm />)}
                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
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