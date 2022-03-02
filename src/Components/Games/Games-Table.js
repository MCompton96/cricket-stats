import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { formatDate } from '../../Common/Helpers/DateHelpers';
import Title from '../Title/Title';

function GamesTable({gameData, bowlingData, battingData}) {

    gameData.forEach(match => {
        match.batting = battingData.find(x => x.gameId === match.id);
        match.bowling = bowlingData.find(x => x.gameId === match.id);
    });

    return (
        <React.Fragment>
            <Title>Games</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Opponents</TableCell>
                        <TableCell>Result</TableCell>
                        <TableCell>Runs</TableCell>
                        <TableCell>Bowling Figures</TableCell>
                        <TableCell>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gameData.map((game) => (
                        <TableRow key={game.id}>
                            <TableCell>{formatDate(game.date)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

export default GamesTable;