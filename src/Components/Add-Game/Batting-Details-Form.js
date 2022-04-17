import Title from '../Title/Title';
import { Grid, Paper, Stack, TextField } from '@mui/material';
import * as React from 'react';
import styles from './game.module.css';
import ImageMarker from 'react-image-marker';

function BattingDetailsForm({bowlingData, setBowlingData}) {

    const [count, setCount] = React.useState(0);

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper sx ={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Title>Bowling Information</Title>
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
                                value={bowlingData.overs}
                                onChange={(e) => {
                                    const overs = e.target.value;
                                    setBowlingData({...bowlingData, overs});
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '25%'}}>
                            <TextField 
                                id='runs-conceded'
                                label='Runs Conceded'
                                type='number'
                                variant='outlined'
                                value={bowlingData.runsConceded}
                                onChange={(e) => {
                                    const runsConceded = e.target.value;
                                    setBowlingData({...bowlingData, runsConceded})
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '25%'}}>
                            <TextField 
                                id='wickets'
                                label='Wickets'
                                type='number'
                                variant='outlined'
                                value={bowlingData.wickets}
                                onChange={(e) => {
                                    const wickets = e.target.value;
                                    setBowlingData({...bowlingData, wickets});
                                }}
                            />
                        </Stack>
                        <Stack component='form' spacing={5} sx={{p:3, width: '25%'}}>
                            <TextField 
                                id='maidens'
                                label='Maidens'
                                type='number'
                                variant='outlined'
                                value={bowlingData.maidens}
                                onChange={(e) => {
                                    const maidens = e.target.value;
                                    setBowlingData({...bowlingData, maidens})
                                }}
                            />
                        </Stack>
                    </Grid>
                    {bowlingData.wickets > 0 && (
                        <div className={styles.container}>
                            <h3>Add the location of the wickets</h3>
                            <ImageMarker 
                                src="cricket.jpg"
                                markers={bowlingData.wicketMarkers}
                                onAddMarker={(marker) => {
                                    setCount(count + 1);
                                    if (count < bowlingData.wickets) {
                                        setBowlingData({
                                            ...bowlingData, 
                                            wicketMarkers: [...bowlingData.wicketMarkers, marker]
                                        })
                                    }
                                }}
                            />
                        </div>
                    )}
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default BattingDetailsForm;