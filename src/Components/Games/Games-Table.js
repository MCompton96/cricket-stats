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
                            <TableCell>{game.opponent}</TableCell>
                            <TableCell>
                                <span>{game.result.win ? 'Won' : 'Lost'}</span>
                                <span> by </span>
                                <span>{game.result.by} {game.result.type}</span>
                            </TableCell>
                            <TableCell>{game.batting.runs}</TableCell>
                            <TableCell>
                                <span>{game.bowling.wickets}</span>
                                <span>/</span>
                                <span>{game.bowling.runs}</span>
                            </TableCell>
                            <TableCell>{game.location.ground} (<span>{game.location.home ? 'H' : 'A'}</span>)</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

export default GamesTable;