import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function StartSeite() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {/* Hello World! und andere Inhalte */}
      </Box>

      <div
        className="rectangle"
        style={{
          position: 'absolute',
          top: '64px', // Adjust this value based on your header height
          left: '0px',
          width: '100%',
          height: '120px',
          background: '#45A423FF',
          borderRadius: '4px',
          boxShadow: '0px 0px 1px #171a1f, 0px 0px 2px #171a1f',
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: 'Poppins',
            textAlign: 'center',
            color: 'white',
            paddingTop: '32px', // Adjust this value to vertically center the text
            fontSize: '40px', // Schriftgröße
            fontWeight: 'bold', // Fontgewicht fett (bold)
          }}
        >
          Startseite
        </Typography>
      </div>
    </Container>
  );
}

export default StartSeite;
