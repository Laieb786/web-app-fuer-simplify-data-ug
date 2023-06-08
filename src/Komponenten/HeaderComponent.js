import React, { useState } from 'react';
import { AppBar, Toolbar, Button, ButtonGroup, Grid, Menu, MenuItem, useMediaQuery, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import logo from '../Grafiken/logo.png'; // Pfad zum Logo-Bild

function HeaderComponent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width: 755px)'); // Überprüfung, ob der Bildschirm klein ist (<= 600px)

  const theme = createTheme({
    typography: {
      fontFamily: 'Mulish, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            border: '2px solid #45A423FF',
          },
        },
      },
    },
  });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
              </Link>
            </Grid>
            <Grid item xs={10} container justifyContent="flex-end">
              {isMobile ? (
                // Anzeige des Menüs auf kleineren Bildschirmen
                <>
                  <Button
                    onClick={handleMenuOpen}
                    sx={{
                      padding: '9px 10px',
                      color: '#565E6CFF',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      fontSize: '12px',
                      lineHeight: '20px',
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      '&:hover': {
                        background: '#45A423FF',
                        color: 'white',
                      },
                    }}
                  >
                    <MenuIcon sx={{ fontSize: '24px', marginRight: '0px' }} />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem component={Link} to="/feed" onClick={handleMenuClose}>
                      <DynamicFeedOutlinedIcon sx={{ fontSize: '20px', marginRight: '8px' }} />
                      Feed
                    </MenuItem>
                    <MenuItem component={Link} to="/submit" onClick={handleMenuClose}>
                      <DrawOutlinedIcon sx={{ fontSize: '20px', marginRight: '8px' }} />
                      Idee/Feedback einreichen
                    </MenuItem>
                    <MenuItem component={Link} to="/my-ideas" onClick={handleMenuClose}>
                      <DvrOutlinedIcon sx={{ fontSize: '20px', marginRight: '8px' }} />
                      Meine Ideen/Feedbacks
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                // Anzeige der Buttons auf größeren Bildschirmen
                <Grid container spacing={1} justifyContent="flex-end">
                  <Grid item>
                    <Button
                      component={Link}
                      to="/feed"
                      sx={{
                        padding: '9px 15px',
                        color: '#565E6CFF',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        textDecoration: 'none',
                        fontSize: '12.5px',
                        lineHeight: '20px',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        '&:hover': {
                          background: '#45A423FF',
                          color: 'white',
                        },
                      }}
                      startIcon={<DynamicFeedOutlinedIcon sx={{ fontSize: '20px' }} />}
                    >
                      Feed
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/submit"
                      sx={{
                        padding: '9px 15px',
                        color: '#565E6CFF',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        textDecoration: 'none',
                        fontSize: '12.5px',
                        lineHeight: '20px',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        '&:hover': {
                          background: '#45A423FF',
                          color: 'white',
                        },
                      }}
                      startIcon={<DrawOutlinedIcon sx={{ fontSize: '20px' }} />}
                    >
                      Idee/Feedback einreichen
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/my-ideas"
                      sx={{
                        padding: '9px 15px',
                        color: '#565E6CFF',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        textDecoration: 'none',
                        fontSize: '12.5px',
                        lineHeight: '20px',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        '&:hover': {
                          background: '#45A423FF',
                          color: 'white',
                        },
                      }}
                      startIcon={<DvrOutlinedIcon sx={{ fontSize: '20px' }} />}
                    >
                      Meine Ideen/Feedbacks
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default HeaderComponent;






