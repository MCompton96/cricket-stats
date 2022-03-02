import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import Title from '../Title/Title';
import * as StatsHelpers from '../../Common/Helpers/StatsHelpers';

function BowlingTable({data}) {
    return (
        <React.Fragment>
            <Title>Bowling Stats</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Matches</TableCell>
                        <TableCell>Total Overs</TableCell>
                        <TableCell>Wickets</TableCell>
                        <TableCell>Runs</TableCell>
                        <TableCell>Maidens</TableCell>
                        <TableCell>Avg</TableCell>
                        <TableCell>Economy</TableCell>
                        <TableCell>Strike Rate</TableCell>
                        <TableCell>Best Figures</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{data.length}</TableCell>
                        <TableCell>{StatsHelpers.totalOvers(data)}</TableCell>
                        <TableCell>{StatsHelpers.totalWickets(data)}</TableCell>
                        <TableCell>{StatsHelpers.calculateRuns(data)}</TableCell>
                        <TableCell>{StatsHelpers.totalMaidens(data)}</TableCell>
                        <TableCell>{StatsHelpers.bowlingAverage(data)}</TableCell>
                        <TableCell>{StatsHelpers.bowlingEconomy(data)}</TableCell>
                        <TableCell>{StatsHelpers.bowlingStrikeRate(data)}</TableCell>
                        <TableCell>{StatsHelpers.bestFigures(data)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default BowlingTable;