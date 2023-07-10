import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import hintergrund from '../Grafiken/hintergrund-2.png';
import Feedfunktion from '../Komponenten/FeedComponent';
import { styled } from '@mui/material/styles';
import BildSoftware1 from '../Grafiken/Software 1.png';

const softwareAuswahlen = [
  {
    id: 1,
    title: 'Software 1',
    image: BildSoftware1,
  },
  {
    id: 2,
    title: 'Software 2',
    image: 'url-zum-bild-2',
  },
  {
    id: 3,
    title: 'Software 3',
    image: 'url-zum-bild-3',
  },
  {
    id: 4,
    title: 'Software 4',
    image: 'url-zum-bild-4',
  },
  {
    id: 5,
    title: 'Software 5',
    image: 'url-zum-bild-5',
  },
  {
    id: 6,
    title: 'Software 6',
    image: 'url-zum-bild-6',
  },
  // Weitere Software-Auswahlen hier hinzufügen
];

const itemsPerPage = 3;

function AuswahlSeite({ handleSelection }) {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const CustomButton = styled(Button)({
    borderRadius: '20px',
    background: '#45A423FF',
    color: '#FFFFFF',
    padding: '10px 20px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    '&:hover': {
      background: '#2F7E2EFF',
    },
  });

  const startIndex = (page - 1) * itemsPerPage;
  const selectedSoftwareAuswahlen = softwareAuswahlen.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px', 
        }}
      >
        {selectedSoftwareAuswahlen.map((auswahl) => (
          <Container
            key={auswahl.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '300px',
              height: '400px',
              margin: '0 10px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              padding: '20px',
              background: '#fff',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundImage: `url(${auswahl.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '5px',
              }}
            ></div>
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              {auswahl.title}
            </Typography>
            <CustomButton variant="contained" onClick={() => handleSelection(auswahl.id)} sx={{ mt: 5 }}>
              Zum Software-Feed
            </CustomButton>
          </Container>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(softwareAuswahlen.length / itemsPerPage)} 
        page={page}
        onChange={handlePageChange}
        sx={{ marginBottom: '20px' }} 
      />
    </Box>
  );
}


function Feed() {
  const [selectedFeed, setSelectedFeed] = useState(null);

  const handleFeedSelection = (feedId) => {
    setSelectedFeed(feedId);
  };

  const handleGoBack = () => {
    setSelectedFeed(null);
  };

  const renderSelectionPage = () => {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
            marginBottom: '-30px',
            minHeight: '45vh',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontFamily: 'Poppins', fontSize: '17px', textAlign: 'center' }}>
            Hier finden Sie all unsere Softwares, mit den entsprechenden Feeds. Suchen Sie sich die entsprechende Software aus und gelangen Sie zu den Diskussionen!
          </Typography>
        </Box>
        <AuswahlSeite handleSelection={handleFeedSelection} />
      </>
    );
  };

  const renderFeedPage = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 244px)', 
          marginTop: '100px', 
        }}
      >
        <Feedfunktion selectedFeed={selectedFeed} />
      </Box>
    );
  };

  return (
    <Container
      maxWidth="100%"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${hintergrund})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="rectangle"
        style={{
          position: 'absolute',
          top: '64px',
          left: '0px',
          width: '100%',
          height: '120px',
          background: `repeating-linear-gradient(45deg, #0000 calc(-650% / 13) calc(50% / 13), rgba(0, 0, 0, 0.15) 0 calc(100% / 13), #0000 0 calc(150% / 13), rgba(0, 0, 0, 0.15) 0 calc(200% / 13), #0000 0 calc(250% / 13), rgba(0, 0, 0, 0.15) 0 calc(300% / 13)), repeating-linear-gradient(45deg, #0000 calc(-650% / 13) calc(50% / 13), rgba(0, 0, 0, 0.15) 0 calc(100% / 13), #0000 0 calc(150% / 13), rgba(0, 0, 0, 0.15) 0 calc(200% / 13), #0000 0 calc(250% / 13), rgba(0, 0, 0, 0.15) 0 calc(300% / 13)) 20px 20px, repeating-linear-gradient(-45deg, #0000 calc(-650% / 13) calc(50% / 13), rgba(0, 0, 0, 0.15) 0 calc(100% / 13), #0000 0 calc(150% / 13), rgba(0, 0, 0, 0.15) 0 calc(200% / 13), #0000 0 calc(250% / 13), rgba(0, 0, 0, 0.15) 0 calc(300% / 13)), repeating-linear-gradient(-45deg, #0000 calc(-650% / 13) calc(50% / 13), rgba(0, 0, 0, 0.15) 0 calc(100% / 13), #0000 0 calc(150% / 13), rgba(0, 0, 0, 0.15) 0 calc(200% / 13), #0000 0 calc(250% / 13), rgba(0, 0, 0, 0.15) 0 calc(300% / 13)) 20px 20px #45A423FF`,
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
          {selectedFeed ? 'Software-Feed' : 'Auswahl'}
        </Typography>
      </div>
      <Box sx={{ my: 5 }}>
        {selectedFeed ? renderFeedPage() : renderSelectionPage()}
      </Box>
      {selectedFeed && (
        <Box style={{ position: 'absolute', top: '190px', left: '10px', display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
            <Typography variant="h5" component="div" sx={{fontSize: '15px', fontFamily: 'Poppins', color: 'black', marginLeft: '10px' }}>
            Zurück zur Auswahl
            </Typography>
          </IconButton>
        </Box>
      )}
    </Container>
  );
}



export default Feed;








