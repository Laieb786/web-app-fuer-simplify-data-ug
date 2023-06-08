import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import background from '../Grafiken/background.jpg'

function startseite() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Box
          sx={{
            position: 'relative',
            height: '400px', // Höhe des Bildblocks anpassen
            overflow: 'hidden',
          }}
        >
          <img
            src={background}
            alt="Hintergrundbild"
            style={{
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%',
              color: '#171A1F',
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
                fontSize: '40px',
                fontWeight: 'bold',
              }}
            >
              Willkommen zum Ideen und Feedback Portal!
            </Typography>
          </Box>
        </Box>

        {/* Navigationen zu den einzelnen Seiten */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '16px',
          }}
        >
          <Button variant="contained" color="primary" href="/feed">
            Feed
          </Button>
          <Button variant="contained" color="primary" href="/submit">
            Idee/Feedback einreichen
          </Button>
          {/* Weitere Buttons für andere Seiten hinzufügen */}
        </Box>
      </Box>

      <div
        className="rectangle"
        style={{
          position: 'absolute',
          top: '64px', // Adjust this value based on your header height
          left: '0px',
          width: '100%',
          height: '120px',
          background:`repeating-linear-gradient( 45deg,#0000 calc(-650%/13) calc(50%/13),rgba(0, 0, 0, 0.2) 0 calc(100%/13),#0000 0 calc(150%/13),rgba(0, 0, 0, 0.2) 0 calc(200%/13),#0000 0 calc(250%/13),rgba(0, 0, 0, 0.2) 0 calc(300%/13)),repeating-linear-gradient( 45deg,#0000 calc(-650%/13) calc(50%/13),rgba(0, 0, 0, 0.2) 0 calc(100%/13),#0000 0 calc(150%/13),rgba(0, 0, 0, 0.2) 0 calc(200%/13),#0000 0 calc(250%/13),rgba(0, 0, 0, 0.2) 0 calc(300%/13)) 20px 20px,repeating-linear-gradient(-45deg,#0000 calc(-650%/13) calc(50%/13),rgba(0, 0, 0, 0.2) 0 calc(100%/13),#0000 0 calc(150%/13),rgba(0, 0, 0, 0.2) 0 calc(200%/13),#0000 0 calc(250%/13),rgba(0, 0, 0, 0.2) 0 calc(300%/13)),repeating-linear-gradient(-45deg,#0000 calc(-650%/13) calc(50%/13),rgba(0, 0, 0, 0.2) 0 calc(100%/13),#0000 0 calc(150%/13),rgba(0, 0, 0, 0.2) 0 calc(200%/13),#0000 0 calc(250%/13),rgba(0, 0, 0, 0.2) 0 calc(300%/13)) 20px 20px #45A423FF`,
          backgroundSize: '40px 40px',
          borderRadius: '1px', //Hier kann man die Eckenformen ändern
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

export default startseite;
