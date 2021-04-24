import React from 'react';
import { Typography, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from '../styles/styles'

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h4">Mars rover photos - check by yourself</Typography>
        </Toolbar>
      </AppBar> 
    </>
    )
}

export default Header;