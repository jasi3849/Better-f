import { Box, Typography, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useState, useEffect } from 'react';

function DailyQuote() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomQuote = async () => {
    try {
      setIsLoading(true);
      // Add timestamp to prevent caching
      const response = await fetch(`https://api.quotable.io/random?t=${new Date().getTime()}`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }

      const data = await response.json();
      console.log('New quote fetched:', data); // Debug log
      
      setCurrentQuote({
        text: data.content,
        author: data.author
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Fallback quote in case of API error
      setCurrentQuote({
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleRefresh = () => {
    console.log('Refresh clicked'); // Debug log
    fetchRandomQuote();
  };

  if (isLoading || !currentQuote) {
    return (
      <Box sx={{ 
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05))',
          borderRadius: '8px',
        }
      }}>
        <Typography sx={{ color: '#6B7280' }}>Loading quote...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05))',
        borderRadius: '8px',
      }
    }}>
      <Box sx={{ 
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 2,
          borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
          pb: 2
        }}>
          <FormatQuoteIcon sx={{ 
            color: '#8B5CF6',
            mr: 1,
            fontSize: '1.5rem'
          }} />
          <Typography variant="h6" sx={{ 
            fontWeight: 500,
            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Daily Quote
          </Typography>
          <IconButton 
            size="small" 
            sx={{ 
              ml: 'auto',
              color: '#8B5CF6',
              '&:hover': {
                bgcolor: 'rgba(139, 92, 246, 0.1)'
              }
            }}
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <AutorenewIcon sx={{
              animation: isLoading ? 'spin 1s linear infinite' : 'none',
              '@keyframes spin': {
                '0%': {
                  transform: 'rotate(0deg)',
                },
                '100%': {
                  transform: 'rotate(360deg)',
                },
              },
            }} />
          </IconButton>
        </Box>

        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          px: 2,
          opacity: isLoading ? 0.5 : 1,
          transition: 'opacity 0.3s ease'
        }}>
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'italic',
              mb: 2,
              lineHeight: 1.6,
              color: '#4B5563',
              fontWeight: 500
            }}
          >
            "{currentQuote.text}"
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'right',
              color: '#6B7280',
              fontWeight: 500
            }}
          >
            — {currentQuote.author}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default DailyQuote; 