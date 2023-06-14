import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { LinkedIn, Twitter, Instagram, KeyboardArrowUp, Description, Mail, Phone, Telegram } from '@mui/icons-material';
import { useState } from 'react';
import whitelogo from '../Grafiken/white-logo.png'; 

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [hoveredIcon, setHoveredIcon] = useState('');

  const iconColors = {
    linkedin: '#0A66C2',
    twitter: '#1DA1F2',
    instagram: '#E4405F',
    telegram: '#0088CC',
  };

  const getIconColor = (iconName) => {
    return hoveredIcon === iconName ? '30px' : '24px';
  };

  return (
    <Box
      sx={{
        position: 'relative',
        top: '0px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 0px, 0px 0px 0.5px',
        pt: 1,
        pb: 1,
      }}
    >
      <Box textAlign="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={whitelogo} alt="Logo" style={{ maxWidth: '80%' }} sx={{ mt: 3 }} />
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            sx={{ fontFamily: 'Poppins', mt: 1 }}
          >
            Ihr starker IT-Partner mit innovativen und modernen Lösungen für jede Situation!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <IconButton
            color='primary'
            href="https://www.linkedin.com/company/simplify-data-ug/"
            target="_blank"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon('')}
          >
            <LinkedIn sx={{ fontSize: getIconColor('linkedin'), color: iconColors.linkedin }} />
          </IconButton>

          <IconButton
            color="primary"
            href="https://twitter.com/simplify_data"
            target="_blank"
            onMouseEnter={() => setHoveredIcon('twitter')}
            onMouseLeave={() => setHoveredIcon('')}
          >
            <Twitter sx={{ fontSize: getIconColor('twitter'), color: iconColors.twitter }} />
          </IconButton>

          <IconButton
            color="#45a322"
            href="https://www.instagram.com/simplify.data/"
            target="_blank"
            onMouseEnter={() => setHoveredIcon('instagram')}
            onMouseLeave={() => setHoveredIcon('')}
          >
            <Instagram sx={{ fontSize: getIconColor('instagram'), color: iconColors.instagram }} />
          </IconButton>

          <IconButton
            color="#45a322"
            href="https://t.me/SimplifyData_bot"
            target="_blank"
            onMouseEnter={() => setHoveredIcon('telegram')}
            onMouseLeave={() => setHoveredIcon('')}
          >
            <Telegram sx={{ fontSize: getIconColor('telegram'), color: iconColors.telegram }} />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Typography variant="body2" color="textSecondary" fontFamily='Poppins' fontWeight="bold">
            Kontakt
          </Typography>
          <Box display="flex" alignItems="center">
            <Phone color="primary" />
            <Typography variant="body2" align="left" color="textSecondary" sx={{fontFamily: 'Poppins', ml: 1 }}>
              0431 705 770 24
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Mail color="primary" />
            <Typography variant="body2" align="left" color="textSecondary" sx={{fontFamily: 'Poppins', ml: 1 }}>
              <Link href="mailto:info@simplify-data.de">info@simplify-data.de</Link>
            </Typography>
          </Box>
          <Typography variant="body2" align="center" color="textSecondary" fontFamily= 'Poppins'>
            Simplify Data UG (haftungsbeschränkt)<br />
            Ostring 183, 24143 Kiel
          </Typography>
        </Box>
        <IconButton color="primary" onClick={handleScrollToTop} sx={{ mt: 1}}>
          <KeyboardArrowUp />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Simplify-Data-UG. Alle Rechte vorbehalten.
        </Typography>
        <Box display="flex" justifyContent="center">
          <Link href="/impressum" variant="body2" color="textSecondary" sx={{ mr: 1 }}>
            Impressum
          </Link>
          <Link href="/datenschutz" variant="body2" color="textSecondary">
            Datenschutz
          </Link>
        </Box>
      </Box>
    </Box>
  );  
}

export default Footer;












