import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
      position: 'absolute',
      top: '1206px',
      left: '0px',
      width: '100%',
      height: '200px',
      background: '#FFFFFFFF',
      borderRadius: '0px',
      borderWidth: '1px',
      borderColor: '#BCC1CAFF',
      borderStyle: 'solid',
      boxShadow: '0px 0px 1px #171a1f, 0px 0px 2px #171a1f',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={10} md={6}>
          <Typography variant="body2" align="center" color="textSecondary">
            &copy; {new Date().getFullYear()} Simplify-Data-UG. Alle Rechte vorbehalten.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" align="center" color="textSecondary">
            Powered by{' '}
            <Link href="https://deine-website.com" color="inherit" target="_blank">
              Deine Website
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;


