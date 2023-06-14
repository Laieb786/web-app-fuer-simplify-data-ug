import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Rating,
  Grid,
  Box,
} from '@mui/material';

const feedbacks = [
  {
    id: 1,
    customer: 'Laieb Ahmed',
    content: 'Ein tolles Produkt! Sehr zufrieden.',
    rating: 4,
  },
  {
    id: 2,
    customer: 'Max Mustermann',
    content: 'Der Kundenservice war in Ordnung.',
    rating: 3,
  },
  {
    id: 3,
    customer: 'Firma A',
    content: 'Das Produkt hat meine Erwartungen übertroffen.',
    rating: 5,
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleSearch = () => {
    const results = feedbacks.filter(
      (feedback) =>
        feedback.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleFeedbackClick = (feedback) => {
    setSelectedFeedback(feedback);
  };

  const handleCloseDialog = () => {
    setSelectedFeedback(null);
  };

  return (
      <Container maxWidth="sm">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <TextField
              label="Suche"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              InputProps={{
                style: {
                  borderRadius: '8px',
                  fontFamily: 'Arial, sans-serif',
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              fullWidth
              sx={{
                borderRadius: '8px',
                height: '100%',
                minHeight: '54px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
              }}
            >
              Suchen
            </Button>
          </Grid>
        </Grid>
        {searchResults.length > 0 && (
          <Box sx={{ marginTop: '2rem' }}>
            <Typography variant="h6" sx={{ color: '#4caf50', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
              Suchergebnisse:
            </Typography>
            {searchResults.map((feedback) => (
              <Card
                key={feedback.id}
                sx={{
                  marginTop: '1rem',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease',
                  },
                }}
                onClick={() => handleFeedbackClick(feedback)}
              >
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                    {feedback.customer}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Arial, sans-serif' }}>
                    {feedback.content}
                  </Typography>
                  <Rating name="rating" value={feedback.rating} readOnly />
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
        <Dialog open={selectedFeedback !== null} onClose={handleCloseDialog}>
          {selectedFeedback && (
            <>
              <DialogTitle sx={{ color: '#4caf50', fontFamily: 'Arial, sans-serif' }}>
                {selectedFeedback.customer}
              </DialogTitle>
              <DialogContent>
                <DialogContentText sx={{ fontFamily: 'Arial, sans-serif' }}>
                  {selectedFeedback.content}
                </DialogContentText>
                <Rating name="rating" value={selectedFeedback.rating} readOnly />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary" sx={{ fontFamily: 'Arial, sans-serif' }}>
                  Schließen
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
  );
};

export default App;