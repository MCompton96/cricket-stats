import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title/Title';
import moment from 'moment';


export default function Orders({rows}) {

  const formatResult = (result) => {
    return `${result.won ? 'Won' : 'Lost'} by ${result.by} ${result.method}`;
  }

  const formatBowlingFigures = (bowling) => {
    return `${bowling.runs}/${bowling.wickets}`;
  }

  const formatLocation = (location) => {
    return `${location.ground} (${location.home ? 'H' : 'A'})`;
  }

  return rows && (
    <React.Fragment>
      <Title>Recent Games</Title>
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{moment(row.date).format('DD MMM YYYY')}</TableCell>
              <TableCell>{formatResult(row.result)}</TableCell>
              <TableCell>{row.opponent}</TableCell>
              <TableCell>{row.batting ? row.batting.runs : 'N/A'}</TableCell>
              <TableCell>{row.bowling ? formatBowlingFigures(row.bowling) : 'N/A'}</TableCell>
              <TableCell>{formatLocation(row.location)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" sx={{ mt: 3 }} onClick={(e) => { e.preventDefault()}}>
        See more games
      </Link>
    </React.Fragment>
  );
}