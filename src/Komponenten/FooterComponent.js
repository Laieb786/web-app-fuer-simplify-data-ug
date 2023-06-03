import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="body2" align="center" color="textSecondary">
        &copy; {new Date().getFullYear()} Simplify-Data-UG. Alle Rechte vorbehalten.
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary">
        Powered by{' '}
        <Link href="https://deine-website.com" color="inherit" target="_blank">
          Deine Website
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
