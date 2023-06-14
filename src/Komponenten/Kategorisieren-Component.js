import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';

const IdeaFeedback = () => {
  const [idea, setIdea] = useState('');
  const [category, setCategory] = useState('');

  const handleIdeaChange = (event) => {
    setIdea(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Idea:', idea);
    console.log('Category:', category);
    setIdea('');
    setCategory('');
  };

  return (
    <Box
      sx={{
        padding: '24px',
        marginBottom: '24px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#4CAF50', 
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Kundenideen und -feedback
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Idee/Feedback"
          variant="outlined"
          value={idea}
          onChange={handleIdeaChange}
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
        />
        <FormControl fullWidth required margin="normal">
          <InputLabel id="category-label">Kategorie</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            onChange={handleCategoryChange}
            label="Kategorie"
          >
            <MenuItem value="Feedback">Feedback</MenuItem>
            <MenuItem value="Wunsch">Wunsch</MenuItem>
            <MenuItem value="Idee">Idee</MenuItem>
            <MenuItem value="Problem">Problem</MenuItem>
            <MenuItem value="Verbesserungsvorschlag">Verbesserungsvorschlag</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Einreichen
        </Button>
      </form>
    </Box>
  );
};

export default IdeaFeedback;