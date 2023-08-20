import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/Folder';
import LayersIcon from '@mui/icons-material/Favorite';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/build">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="HOME" />
    </ListItemButton>
    <ListItemButton component={Link} to="/build">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="BUILD" />
    </ListItemButton>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="PROFILE" />
    </ListItemButton>
    <ListItemButton component={Link} to="/myproject">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="MY PROJECTS" />
    </ListItemButton>
    <ListItemButton component={Link} to="/savedproject">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="FAVORITIES" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      HISTORY
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="CURRENT MONTH" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton> */}
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <LogoutIcon/>
      </ListItemIcon>
      <ListItemText primary="LOG OUT" />
    </ListItemButton>
  </React.Fragment>
);