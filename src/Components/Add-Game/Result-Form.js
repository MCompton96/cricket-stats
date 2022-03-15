import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material';
import * as React from 'react';
import Title from '../Title/Title';

function ResultForm({resultData, setResultData}) {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper sx={{ p:2, display: 'flex', flexDirection: 'column'}}>
                    <Title>Game Result</Title>
                    <Stack component='form' spacing={5} sx={{
                        p:3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby='radio-buttons-label'
                                name='radio-buttons-group'
                                value={resultData.won}
                                onChange={(e) => {
                                    const won = e.target.value;
                                    setResultData({...resultData, won});
                                }}
                            >
                                <FormControlLabel value={true} control={<Radio />} label="Won"/>
                                <FormControlLabel value={false} control={<Radio />} label="Lost"/>
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                    <Grid item sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Stack component='form' spacing={5} sx={{p:3, width: '50%'}}>
                            <TextField 
                                id='by'
                                label='By'
                                type='number'
                                variant='outlined'
                                value={resultData.by}
                                onChange={(e) => {
                                    const by = e.target.value;
                                    setResultData({...resultData, by});
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '50%'}}>
                            <FormControl fullWidth>
                                <InputLabel id='method-select-label'>Method</InputLabel>
                                <Select
                                    labelId='method-select-label'
                                    id='method-select'
                                    label='Age'
                                    value={resultData.method}
                                    onChange={(e) => {
                                        const method = e.target.value;
                                        setResultData({...resultData, method})
                                    }}
                                >
                                    <MenuItem value='runs'>Runs</MenuItem>
                                    <MenuItem value='wickets'>Wickets</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p:2, display: 'flex', flexDirection: 'column'}}>
                    <Title>Personal Stats</Title>
                    <Grid item sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <Stack component='form' spacing={5} sx={{p:3, width: '33%'}}>
                            <TextField 
                                id='batting-runs'
                                label='Batting Runs'
                                type='number'
                                variant='outlined'
                                value={resultData.runs}
                                onChange={(e) => {
                                    const runs = e.target.value;
                                    setResultData({...resultData, runs});
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '33%'}}>
                            <TextField 
                                id='boundaries'
                                label='Boundaries'
                                type='number'
                                variant='outlined'
                                value={resultData.boundaries}
                                onChange={(e) => {
                                    const boundaries = e.target.value;
                                    setResultData({...resultData, boundaries});
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '33%'}}>
                            <TextField 
                                id='sixes'
                                label='Sixes'
                                type='number'
                                variant='outlined'
                                value={resultData.sixes}
                                onChange={(e) => {
                                    const sixes = e.target.value;
                                    setResultData({...resultData, sixes});
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <Stack component='form' spacing={5} sx={{p:3, width: '25%'}}>
                            <TextField 
                                id='overs'
                                label='Overs'
                                type='number'
                                variant='outlined'
                                value={resultData.overs}
                                onChange={(e) => {
                                    const overs = e.target.value;
                                    setResultData({...resultData, overs});
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '25%'}}>
                            <TextField 
                                id='runs-conceded'
                                label='Runs Conceded'
                                type='number'
                                variant='outlined'
                                value={resultData.runsConceded}
                                onChange={(e) => {
                                    const runsConceded = e.target.value;
                                    setResultData({...resultData, runsConceded})
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '25%'}}>
                            <TextField 
                                id='wickets'
                                label='Wickets'
                                type='number'
                                variant='outlined'
                                value={resultData.wickets}
                                onChange={(e) => {
                                    const wickets = e.target.value;
                                    setResultData({...resultData, wickets});
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '25%'}}>
                            <TextField 
                                id='maidens'
                                label='Maidens'
                                type='number'
                                variant='outlined'
                                value={resultData.maidens}
                                onChange={(e) => {
                                    const maidens = e.target.value;
                                    setResultData({...resultData, maidens})
                                }}
                            />
                        </Stack>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default ResultForm;

