import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import hintergrund from '../Grafiken/hintergrund-2.png';
import thumbsup from '../Grafiken/thumb-up-dynamic-color.png';
import chat from '../Grafiken/chat-text-dynamic-color.png';
import pencil from '../Grafiken/pencil-dynamic-color.png';
import { Link } from 'react-router-dom';

const CustomStepper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  marginTop: '80px', /* Increased distance from the top */
});

const StyledIcon = styled(Box)(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: '#FFFFFF', // Weißer Hintergrund für das Icon
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s',
  cursor: 'pointer',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Box-Schatten-Effekt
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.8)', // Erhöhter Box-Schatten-Effekt beim Hovern
  },
  [theme.breakpoints.down('sm')]: {
    width: '80px', // Verringerte Größe der Icons auf kleineren Bildschirmen
    height: '80px', // Verringerte Größe der Icons auf kleineren Bildschirmen
  },
}));

const Arrow = styled(Box)({
  width: '80px', // Increased width of the arrow
  height: '4px', // Increased thickness of the arrow
  background: '#45A423FF',
});

const CustomButton = styled(Button)({
  borderRadius: '20px', /* Rounded corners */
  background: 'transparent', /* Clear background */
  color: '#45A423FF', /* Green text color */
  border: '2px solid #45A423FF', /* Border with green color */
  padding: '10px 20px', /* Added padding */
  fontWeight: 'bold', /* Bold text */
  transition: 'all 0.3s',
  '&:hover': {
    background: '#45A423FF',
    color: '#FFFFFF', /* White text color on hover */
  },
});

function Startseite() {
  const [activeIcon, setActiveIcon] = useState(0);

  const handleIconHover = (index) => {
    setActiveIcon(index);
  };

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
          color: '#171A1F',
          px: 4,
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
            textAlign: 'center',
            mb: 2,
          }}
        >
          Willkommen zum Ideen und Feedback Portal!
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            mb: 2,
            textAlign: 'center',
          }}
        >
          Teilen Sie Ihre Ideen und geben Sie uns wertvolles Feedback, um unsere Produkte und Dienstleistungen zu verbessern. Wir schätzen Ihre Beiträge und freuen uns auf Ihre Mitwirkung. Gemeinsam können wir Großes erreichen!
        </Typography>

        <CustomStepper>
          <Tooltip title="Schritt 1">
            <StyledIcon onMouseEnter={() => handleIconHover(0)}>
              <img src={thumbsup} alt="Daumen hoch" style={{ width: '90px', height: '90px' }} />
            </StyledIcon>
          </Tooltip>
          <Arrow />
          <Tooltip title="Schritt 2">
            <StyledIcon onMouseEnter={() => handleIconHover(1)}>
              <img src={chat} alt="Chat-Sprechblase" style={{ width: '90px', height: '90px' }} />
            </StyledIcon>
          </Tooltip>
          <Arrow />
          <Tooltip title="Schritt 3">
            <StyledIcon onMouseEnter={() => handleIconHover(2)}>
              <img src={pencil} alt="Stift" style={{ width: '90px', height: '90px' }} />
            </StyledIcon>
          </Tooltip>
        </CustomStepper>

        {activeIcon === 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" component="div" sx={{fontFamily: 'Poppins', mb: 2 }}>
              Schritt 1: Daumen hoch!
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
              Geben Sie den Ideen, Vorschlägen oder Funktionen, die Sie unterstützen möchten, einen Daumen hoch.
            </Typography>
          </Box>
        )}

        {activeIcon === 1 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" component="div" sx={{fontFamily: 'Poppins', mb: 2}}>
              Schritt 2: Mit anderen sprechen!
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
              Tauschen Sie sich mit anderen Benutzern aus, diskutieren Sie Ideen und geben Sie Feedback in den entsprechenden Feeds.
            </Typography>
          </Box>
        )}

        {activeIcon === 2 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" component="div" sx={{fontFamily: 'Poppins', mb: 2 }}>
              Schritt 3: Ideen einreichen!
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
              Bringen Sie Ihre eigenen Ideen ein, erstellen Sie Vorschläge und reichen Sie diese zur Bewertung ein.
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 4 }}>
          <CustomButton
            component={Link}
            to="/submit" 
            variant="contained">Los gehts!
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Startseite;







