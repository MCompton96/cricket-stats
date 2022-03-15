import { FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack } from '@mui/material';
import * as React from 'react';
import Title from '../Title/Title';

function ResultForm() {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper sx={{ p:2, display: 'flex', flexDirection: 'column'}}>
                    <Title>Game Result</Title>
                    <Stack component='form' spacing={5} sx={{p:3}}>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby='radio-buttons-label'
                                name='radio-buttons-group'
                            >
                                <FormControlLabel value="won" control={<Radio />} label="Won"/>
                                <FormControlLabel value="lost" control={<Radio />} label="Lost"/>
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default ResultForm;

