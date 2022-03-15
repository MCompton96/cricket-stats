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

function BasicInfoForm({basicData, setBasicData}) {
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
                        value={basicData.opponent}
                        onChange={(e) => {
                            const opponent = e.target.value;
                            setBasicData({...basicData, opponent})
                        }}
                    />
                    <TextField 
                        id="date"
                        label="Game Date"
                        type="date"
                        value={moment(basicData.date).format("YYYY-MM-DD")}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={(e) => {
                            const date = moment(e.target.value).toDate();
                            setBasicData({...basicData, date});
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
                    value={basicData.ground}
                    onChange={(e) => {
                        const ground = e.target.value;
                        setBasicData({...basicData, ground});
                    }}
                />
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby='radio-buttons-label'
                        name='radio-buttons-group'
                        value={basicData.home}
                        onChange={(e) => {
                            const home = e.target.value;
                            setBasicData({...basicData, home});
                        }}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Home"/>
                        <FormControlLabel value={false} control={<Radio />} label="Away"/>
                    </RadioGroup>
                </FormControl>
            </Stack>
            </Paper>   
        </Grid>
    </React.Fragment>
    )
}

export default BasicInfoForm;