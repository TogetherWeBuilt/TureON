import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Project no.</Title>
      <Typography component="p" variant="h4">
        Strings ending with "1"
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        16 August, 2023
      </Typography>
      <div>
        <Link color="#01bf71" href="#" onClick={preventDefault}>
          open
        </Link>
      </div>
    </React.Fragment>
  );
}