import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Box,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const IdeaList = ({ ideas, onEdit, onDelete }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedIdea, setEditedIdea] = useState('');

  const handleEditDialogOpen = (idea) => {
    setEditedIdea(idea.idea);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditedIdea('');
    setEditDialogOpen(false);
  };

  const handleEditIdea = () => {
    // Pass the edited idea to the onEdit callback
    onEdit({ ...editedIdea });
    handleEditDialogClose();
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Eingereichte Ideen
      </Typography>
      <List>
        {ideas.map((idea, index) => (
          <div key={idea.id}>
            <ListItem
              disablePadding
              sx={{
                bgcolor: index % 2 === 0 ? 'background.paper' : 'background.default',
              }}
            >
              <ListItemText
                primary={idea.idea}
                secondary={`Kategorie: ${idea.category} | Software: ${idea.software}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditDialogOpen(idea)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(idea.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      {ideas.length === 0 && (
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            Keine Ideen vorhanden.
          </Typography>
        </Box>
      )}
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Idee bearbeiten</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Idee"
            value={editedIdea}
            onChange={(e) => setEditedIdea(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Abbrechen</Button>
          <Button onClick={handleEditIdea} variant="contained" color="primary">
            Speichern
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default IdeaList;


