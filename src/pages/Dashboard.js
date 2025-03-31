import { Box, Container, Typography, IconButton } from '@mui/material';
import DailyQuote from '../components/DailyQuote';
import MorningChecklist from '../components/MorningChecklist';
import MomentOfDay from '../components/MomentOfDay';
import ProjectsTasks from '../components/ProjectsTasks';
import PastReflections from '../components/PastReflections';
import { useState, useEffect } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LogoutIcon from '@mui/icons-material/Logout';

function Dashboard({ onLogout }) {
  const currentDate = new Date();
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
  const dayNumber = currentDate.getDate();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = new Date(`December 31, ${year} 23:59:59`) - new Date();
    
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30.44),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="xl">
        {/* Better Title with Logout */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          mb: 3 
        }}>
          <Typography
            variant="h4"
            sx={{
              p: 2,
              bgcolor: 'white',
              borderRadius: '4px',
              border: '1px solid #e0e0e0'
            }}
          >
            Better
          </Typography>
          <IconButton
            onClick={onLogout}
            sx={{
              bgcolor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              p: 1,
              '&:hover': {
                bgcolor: 'rgba(139, 92, 246, 0.1)'
              }
            }}
          >
            <LogoutIcon sx={{ color: '#8B5CF6' }} />
          </IconButton>
        </Box>

        {/* Header Row */}
        <Box 
          sx={{ 
            display: 'flex',
            gap: 2,
            mb: 3,
          }}
        >
          <Box sx={{ 
            p: 3,
            borderRadius: '8px',
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              opacity: 0.97,
              zIndex: 1
            }
          }}>
            <Box sx={{ 
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <CalendarTodayIcon sx={{ color: 'white' }} />
              <Typography variant="h6" sx={{ 
                fontWeight: 500,
                color: 'white',
                textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
              }}>
                Today
              </Typography>
            </Box>
            <Box sx={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 3
            }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 700,
                color: 'white',
                textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                lineHeight: 1
              }}>
                {dayNumber}
              </Typography>
              <Box>
                <Typography sx={{ 
                  color: 'white',
                  opacity: 0.95,
                  fontWeight: 500,
                  fontSize: '1.1rem'
                }}>
                  {currentDate.toLocaleDateString('en-US', { month: 'long' })}
                </Typography>
                <Typography sx={{ 
                  color: 'white',
                  opacity: 0.85,
                  fontSize: '0.9rem'
                }}>
                  {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ 
            p: 3,
            borderRadius: '8px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96C3EB, #8B5CF6)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              opacity: 0.9,
              zIndex: 1
            },
            '@keyframes gradient': {
              '0%': {
                backgroundPosition: '0% 50%'
              },
              '50%': {
                backgroundPosition: '100% 50%'
              },
              '100%': {
                backgroundPosition: '0% 50%'
              }
            }
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 500, 
                color: 'white',
                position: 'relative',
                zIndex: 2,
                textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Time Left in {new Date().getFullYear()}
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 4,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {String(timeLeft.months).padStart(2, '0')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Months
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {String(timeLeft.days).padStart(2, '0')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Days
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {String(timeLeft.hours).padStart(2, '0')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Hours
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {String(timeLeft.minutes).padStart(2, '0')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Minutes
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {String(timeLeft.seconds).padStart(2, '0')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Seconds
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Main Content */}
        <Box>
          {/* First Row */}
          <Box 
            sx={{ 
              display: 'flex',
              gap: 2,
              mb: 3,
            }}
          >
            <Box sx={{ 
              flex: 1,
              bgcolor: 'white',
              borderRadius: '8px',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              <DailyQuote />
            </Box>

            <Box sx={{ 
              flex: 1,
              bgcolor: 'white',
              borderRadius: '8px',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              <MorningChecklist />
            </Box>

            <Box sx={{ 
              flex: 1,
              bgcolor: 'white',
              borderRadius: '8px',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              <MomentOfDay />
            </Box>
          </Box>

          {/* Second Row */}
          <Box 
            sx={{ 
              display: 'flex',
              gap: 2,
              mt: 3
            }}
          >
            <Box sx={{ 
              flex: 2,
              bgcolor: 'white',
              borderRadius: '8px',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>Projects & Tasks</Typography>
              <ProjectsTasks />
            </Box>

            <Box sx={{ 
              flex: 1,
              bgcolor: 'white',
              borderRadius: '8px',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>Past Reflections</Typography>
              <PastReflections />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Dashboard; 