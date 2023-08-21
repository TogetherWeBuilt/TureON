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
      <Title>TureON User Profile</Title>
      <Typography component="p" variant="h4">
        Ashithosh Kumar
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        15 March, 2023
      </Typography>
      <div>
        <Link color="#01bf71" href="#" onClick={preventDefault}>
          Update Profile
        </Link>
      </div>
    </React.Fragment>
  );
}