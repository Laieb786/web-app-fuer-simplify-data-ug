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
  Input,
  Paper,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

const IdeaFeedback = ({ onIdeaSubmit }) => {
  const [idea, setIdea] = useState([]);
  const [category, setCategory] = useState([]);
  const [software, setSoftware] = useState([]);
  const [files, setFiles] = useState([]);

  const handleIdeaChange = (event) => {
    setIdea(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSoftwareChange = (event) => {
    setSoftware(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      idea,
      category,
      software,
      files,
    };    
    onIdeaSubmit(newIdea);
    setIdea([]);
    setCategory([]);
    setSoftware([]);
    setFiles([]);
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

  return (
    <Paper
      elevation={3}
      sx={{
        padding: '30px',
        marginTop: '15px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#45A423FF',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        Ihre Meinung ist gefragt!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Idee/Feedback"
              variant="outlined"
              value={idea}
              onChange={handleIdeaChange}
              multiline
              rows={4}
              fullWidth
              required
              InputProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="category-label" sx={{ fontFamily: 'Poppins' }}>
                Kategorie
              </InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={category}
                onChange={handleCategoryChange}
                label="Kategorie"
                style={{ fontFamily: 'Poppins' }}
              >
                <MenuItem value="Kategorie 1">Kategorie 1</MenuItem>
                <MenuItem value="Kategorie 2">Kategorie 2</MenuItem>
                <MenuItem value="Kategorie 3">Kategorie 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="software-label" sx={{ fontFamily: 'Poppins' }}>
                Software
              </InputLabel>
              <Select
                labelId="software-label"
                id="software-select"
                value={software}
                onChange={handleSoftwareChange}
                label="Software"
                style={{ fontFamily: 'Poppins' }}
              >
                <MenuItem value="Software 1">Software 1</MenuItem>
                <MenuItem value="Software 2">Software 2</MenuItem>
                <MenuItem value="Software 3">Software 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <Input
                type="file"
                id="file-input"
                multiple
                onChange={handleFileChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <CustomButton
            type="submit"
            variant="contained"
            SendIcon={<SendIcon />}
          >
            Absenden
          </CustomButton>
        </Box>
      </form>
    </Paper>
  );
};

export default IdeaFeedback;




















