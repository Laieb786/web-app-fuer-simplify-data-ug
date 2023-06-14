import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepConnector } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import hintergrund from '../Grafiken/hintergrund-2.png';
import thumbsup from '../Grafiken/thumb-up-dynamic-color.png';
import chat from '../Grafiken/chat-text-dynamic-color.png';
import pencil from '../Grafiken/pencil-dynamic-color.png';

const CustomStepper = styled(Stepper)({
  '& .MuiStepConnector-line': {
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderColor: '#000000',
  },
  '& .MuiStepConnector-root': {
    marginLeft: 'calc(50% - 20px)', // Zentrierung des Steppers
  },
  margin: '0 auto', // Zentrierung des Steppers
});

const StyledStep = styled(Step)({
  width: '100px',
});

const StyledLine = styled('div')({
  height: '50px',
  borderLeft: '2px solid #000000',
  marginLeft: 'calc(50% - 1px)', // Zentrierung der Linien
});

function Startseite() {
  const steps = ['Schritt 1', 'Schritt 2', 'Schritt 3'];
  const activeStep = 0;

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

        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', my: 10 }}>
          <CustomStepper alternativeLabel activeStep={activeStep} connector={<StepConnector />}>
  {steps.map((label, index) => (
    <StyledStep key={label}>
      <StepLabel>
        <Tooltip title={label}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {index !== 0 && <StyledLine />}
            {index === 0 && (
              <img
                src={chat}
                alt="Step 1"
                width="100px"
                height="100px"
                style={{ borderRadius: '50%' }}
              />
            )}
            {index === 1 && (
              <img
                src={pencil}
                alt="Step 2"
                width="100px"
                height="100px"
                style={{ borderRadius: '50%' }}
              />
            )}
            {index === 2 && (
              <img
                src={thumbsup}
                alt="Step 3"
                width="100px"
                height="100px"
                style={{ borderRadius: '50%' }}
              />
            )}
          </Box>
        </Tooltip>
      </StepLabel>
    </StyledStep>
  ))}
</CustomStepper>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              mb: 2,
            }}
          >
            Klicken Sie auf die Icons, um mehr über jeden Schritt zu erfahren.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Startseite;































