import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import LayersIcon from '@mui/icons-material/Favorite';
import ListItemIcon from '@mui/material/ListItemIcon';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Project no.</Title>
      <Typography component="p" variant="h4">
        Check for Palindrome
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        23 July, 2023
      </Typography>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <div>
        <Link color="#01bf71" href="#" onClick={preventDefault}>
          open
        </Link>
      </div>
    </React.Fragment>
  );
}