import { Checkbox, Container, FormControl, FormGroup, Grid, Input, InputLabel, Paper, Stack, TextField, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Title from '../Title/Title';
import moment from 'moment';

function AddGame() {
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
                        <Grid item xs={12}>
                            <Paper sx={{ p:2, display: 'flex', flexDirection: 'column'}}>
                                <Title>Basic Game Information</Title>
                                <Stack component="form" spacing={5} sx={{p: 3}}>
                                    <TextField 
                                        id="opponent"
                                        label="Opponent"
                                        type="text"
                                        variant="outlined"
                                    />
                                    <TextField 
                                        id="date"
                                        label="Game Date"
                                        type="date"
                                        defaultValue={moment().format("YYYY-MM-DD")}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default AddGame;