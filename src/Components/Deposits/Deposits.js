import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';
import { Divider } from '@mui/material';


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({title, total}) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {total}
      </Typography>
    </React.Fragment>
  );
}