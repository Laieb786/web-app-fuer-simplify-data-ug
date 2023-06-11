import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import hintergrund from '../Grafiken/hintergrund.jpg';

function startseite() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '150vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url(${hintergrund})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        className="rectangle"
        sx={{
          height: '120px',
          background: `repeating-linear-gradient(45deg, #0000 calc(-650%/13) calc(50%/13), rgba(0, 0, 0, 0.15) 0 calc(100%/13), #0000 0 calc(150%/13), rgba(0, 0, 0, 0.15) 0 calc(200%/13), #0000 0 calc(250%/13), rgba(0, 0, 0, 0.15) 0 calc(300%/13)), repeating-linear-gradient(45deg, #0000 calc(-650%/13) calc(50%/13), rgba(0, 0, 0, 0.15) 0 calc(100%/13), #0000 0 calc(150%/13), rgba(0, 0, 0, 0.15) 0 calc(200%/13), #0000 0 calc(250%/13), rgba(0, 0, 0, 0.15) 0 calc(300%/13)) 20px 20px, repeating-linear-gradient(-45deg, #0000 calc(-650%/13) calc(50%/13), rgba(0, 0, 0, 0.15) 0 calc(100%/13), #0000 0 calc(150%/13), rgba(0, 0, 0, 0.15) 0 calc(200%/13), #0000 0 calc(250%/13), rgba(0, 0, 0, 0.15) 0 calc(300%/13)), repeating-linear-gradient(-45deg, #0000 calc(-650%/13) calc(50%/13), rgba(0, 0, 0, 0.15) 0 calc(100%/13), #0000 0 calc(150%/13), rgba(0, 0, 0, 0.15) 0 calc(200%/13), #0000 0 calc(250%/13), rgba(0, 0, 0, 0.15) 0 calc(300%/13)) 20px 20px #45A423FF`,
          backgroundSize: '40px 40px',
          borderRadius: '0px',
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
            paddingTop: '32px',
            fontSize: '40px',
            fontWeight: 'bold',
          }}
        >
          Startseite
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
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
    </Box>
  );
}

export default startseite;
