import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';

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