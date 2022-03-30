import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { formatDate } from '../../Common/Helpers/DateHelpers';
import Title from '../Title/Title';

function GamesTable({gameData}) {

    const formatBowling = (bowling) => {
        return `${bowling.wickets}/${bowling.runs}`;
    }

    const formatResult = (result) => {
        return `${result.won ? 'Won' : 'Lost'} by ${result.by} ${result.method}`;
    }

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
                            <TableCell>{game.opponent}</TableCell>
                            <TableCell>{formatResult(game.result)}</TableCell>
                            <TableCell>{game.batting ? game.batting.runs : 'N/A'}</TableCell>
                            <TableCell>{game.bowling ? formatBowling(game.bowling) : 'N/A'}</TableCell>
                            <TableCell>{game.location.ground} (<span>{game.location.home ? 'H' : 'A'}</span>)</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

export default GamesTable;