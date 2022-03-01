import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title/Title';

// Generate Order Data
function createData(id, date, opponent, result, runs, bowlingFigures, location) {
  return { id, date, opponent, result, runs, bowlingFigures, location };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Didsbury 2nd XI',
    'Won by 44 runs',
    22,
    '11/1',
    'Whaley Range (H)'
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Wilmslow 1st XI',
    'Lost by 2 Wickets',
    5,
    '15/0',
    'Wilmslow (A)',
  ),
  // createData(
  //   2, 
  //   '16 Mar, 2019', 
  //   'Prestwich ', 
  //   'Boston, MA', 
  //   'MC ⠀•••• 1253', 
  //   100.81
  // ),
  // createData(
  //   3,
  //   '16 Mar, 2019',
  //   'Michael Jackson',
  //   'Gary, IN',
  //   'AMEX ⠀•••• 2000',
  //   654.39,
  // ),
  // createData(
  //   4,
  //   '15 Mar, 2019',
  //   'Bruce Springsteen',
  //   'Long Branch, NJ',
  //   'VISA ⠀•••• 5919',
  //   212.79,
  // ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
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
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.result}</TableCell>
              <TableCell>{row.opponent}</TableCell>
              <TableCell>{row.runs}</TableCell>
              <TableCell>{row.bowlingFigures}</TableCell>
              <TableCell>{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more games
      </Link>
    </React.Fragment>
  );
}