import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { battingData } from '../../Data/Batting-Data';
import Title from '../Title/Title';
import * as StatsHelpers from '../../Common/Helpers/StatsHelpers';



function BattingTable({data}) {
    return (
        <React.Fragment>
            <Title>Batting Stats</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Matches</TableCell>
                        <TableCell>NO</TableCell>
                        <TableCell>Runs</TableCell>
                        <TableCell>HS</TableCell>
                        <TableCell>Avg</TableCell>
                        <TableCell>Centuries</TableCell>
                        <TableCell>Half-Centuries</TableCell>
                        <TableCell>4s</TableCell>
                        <TableCell>6s</TableCell>
                        <TableCell>0s</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{data.length}</TableCell>
                        <TableCell>{StatsHelpers.totalNotOuts(data)}</TableCell>
                        <TableCell>{StatsHelpers.calculateRuns(data)}</TableCell>
                        <TableCell>{StatsHelpers.calcHighScore(data)}</TableCell>
                        <TableCell>{StatsHelpers.calculateAverage(data)}</TableCell>
                        <TableCell>{StatsHelpers.calculateCenturies(data)}</TableCell>
                        <TableCell>{StatsHelpers.calculateHalfCentures(data)}</TableCell>
                        <TableCell>{StatsHelpers.calcTotalBoundaries(data)}</TableCell>
                        <TableCell>{StatsHelpers.calcTotalSixes(data)}</TableCell>
                        <TableCell>{StatsHelpers.calculateDucks(data)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default BattingTable;