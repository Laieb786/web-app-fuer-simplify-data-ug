import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '../Grafiken/logo.png'; // Pfad zum Logo-Bild

function HeaderComponent() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
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
