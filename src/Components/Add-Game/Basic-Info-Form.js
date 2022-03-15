import { 
    FormControl, 
    FormControlLabel, 
    Grid, 
    Paper, 
    Radio, 
    RadioGroup, 
    Stack, 
    TextField 
} from '@mui/material';
import moment from 'moment';
import * as React from 'react';
import Title from '../Title/Title';

function BasicInfoForm() {
    return (
    <React.Fragment>
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
        <Grid item xs={12}>
            <Paper sx={{ p:2, display: 'flex', flexDirection: 'column'}}>
            <Title>Game Location</Title>
            <Stack component="form" spacing={5} sx={{p: 3}}>
                <TextField
                    id="ground"
                    label="Ground"
                    type="text"
                    variant="outlined"
                />
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby='radio-buttons-label'
                        name='radio-buttons-group'
                    >
                        <FormControlLabel value="home" control={<Radio />} label="Home"/>
                        <FormControlLabel value="away" control={<Radio />} label="Away"/>
                    </RadioGroup>
                </FormControl>
            </Stack>
            </Paper>   
        </Grid>
    </React.Fragment>
    )
}

export default BasicInfoForm;