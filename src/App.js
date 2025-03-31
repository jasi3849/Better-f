import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C3AED', // Purple color from the design
    },
    background: {
      default: '#F3F4F6',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  if (loading) {
    return null; // or a loading spinner
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              user ? 
                <Navigate to="/dashboard" /> : 
                <Login onLoginSuccess={handleLoginSuccess} />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              user ? 
                <Dashboard onLogout={handleLogout} /> : 
                <Navigate to="/" />
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
