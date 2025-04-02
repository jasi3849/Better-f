import { useState, useEffect } from 'react';
import { Paper, Typography, Box, TextField, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import axios from 'axios';

function MomentOfDay() {
  const [reflection, setReflection] = useState('');
  const API_URL = process.env.REACT_APP_API_URL;

// Fetch the latest reflection on mount (optional)
useEffect(() => {
  const fetchReflection = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/api/moment-of-day`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.data) {
        setReflection(response.data.data.reflection);
      }
    } catch (err) {
      console.error('Error fetching reflection:', err);
      // setError('Failed to load reflection. Please try again.');
    }
  };

  fetchReflection();
}, [API_URL]);


const handleSaveReflection = async () => {
  if (!reflection.trim()) return;

  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${API_URL}/moment-of-day`,
      { reflection: reflection.trim() },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log('Reflection saved:', response.data.data);
    setReflection(''); // Clear the field after saving
    // setError(null);
  } catch (err) {
    console.error('Error saving reflection:', err);
    // setError('Failed to save reflection. Please try again.');
  }
};

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        bgcolor: 'white',
        borderRadius: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <AutoStoriesIcon sx={{ color: 'primary.main', mr: 1 }} />
        <Typography variant="h6" component="h2">
          Moment of the Day
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Reflect on your achievements
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        What great thing did you accomplish today?
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Write your reflection here..."
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleSaveReflection}
        disabled={!reflection.trim()}
        sx={{ textTransform: 'none' }}
      >
        Save Reflection
      </Button>
    </Paper>
  );
}

export default MomentOfDay; 