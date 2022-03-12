import { Container, Grid, Paper, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

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
                                <h1>Add Game</h1>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default AddGame;