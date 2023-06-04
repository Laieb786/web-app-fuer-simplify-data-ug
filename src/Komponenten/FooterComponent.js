import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        backgroundColor: '#f5f5f5',
        marginTop: 'auto',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={12} md={6}>
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


