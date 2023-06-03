import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Simplify-Data-UG
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          Über uns
        </Button>
        {/* Weitere Header-Elemente oder -Buttons */}
      </Toolbar>
    </AppBar>
  );
}

export default HeaderComponent;

