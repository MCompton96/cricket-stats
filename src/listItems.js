import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsIcon from '@mui/icons-material/Sports';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={'/'}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to={'/games'}>
      <ListItemIcon>
        <SportsIcon />
      </ListItemIcon>
      <ListItemText primary="Games" />
    </ListItemButton>
    <ListItemButton
      component={Link}
      to={'/batting'}
    >
        <ListItemIcon>
          <SportsCricketIcon />
        </ListItemIcon>
        <ListItemText primary="Batting Stats" />
    </ListItemButton>
    <ListItemButton 
      component={Link}
      to={'/bowling'}
    >
      <ListItemIcon>
        <SportsHandballIcon />
      </ListItemIcon>
      <ListItemText primary="Bowling Stats" />
    </ListItemButton>
  </React.Fragment>
);