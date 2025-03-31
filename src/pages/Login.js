// import { useState } from 'react';
// import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
// import LockIcon from '@mui/icons-material/Lock';
// import axios from 'axios';

// function Login({ onLoginSuccess }) {
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!password) return;

//     setIsLoading(true);
//     setError('');

//     try {
//       console.log('Making login request to:', `${process.env.REACT_APP_API_URL}/auth/login`);
//       console.log('With password:', password);
      
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { password });
//       console.log('Login response:', response.data);
      
//       const { data } = response;

//       if (data.status === 'success') {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
//         onLoginSuccess(data.user);
//       } else if (data.status === 'signup_required') {
//         console.log('User not found, attempting signup');
//         // If user doesn't exist, create a new account
//         const signupResponse = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
//           name: 'User',
//           email: `user${Date.now()}@example.com`,
//           password
//         });
        
//         console.log('Signup response:', signupResponse.data);
//         const signupData = signupResponse.data;
//         localStorage.setItem('token', signupData.token);
//         localStorage.setItem('user', JSON.stringify(signupData.user));
//         onLoginSuccess(signupData.user);
//       }
//     } catch (error) {
//       console.error('Detailed login error:', error);
//       if (error.code === 'ERR_NETWORK') {
//         setError('Cannot connect to server. Please try again later.');
//       } else {
//         setError(error.response?.data?.error || 'An error occurred. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default'
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           elevation={3}
//           sx={{
//             p: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2
//           }}
//         >
//           <Typography
//             variant="h3"
//             component="h1"
//             sx={{
//               color: 'primary.main',
//               mb: 3,
//               fontWeight: 600
//             }}
//           >
//             Better
//           </Typography>

//           <Box
//             sx={{
//               bgcolor: '#F3E8FF',
//               p: 2,
//               borderRadius: '50%',
//               mb: 2
//             }}
//           >
//             <LockIcon sx={{ color: 'primary.main', fontSize: 32 }} />
//           </Box>

//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Enter your password to start your day
//           </Typography>

//           <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
//             <TextField
//               fullWidth
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               error={!!error}
//               helperText={error}
//               disabled={isLoading}
//               sx={{ mb: 2 }}
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               size="large"
//               disabled={isLoading || !password}
//               sx={{
//                 py: 1.5,
//                 textTransform: 'none',
//                 fontSize: '1.1rem'
//               }}
//             >
//               {isLoading ? 'Checking...' : 'Start My Day'}
//             </Button>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// }

// // import { useState } from 'react';
// // import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
// // import LockIcon from '@mui/icons-material/Lock';
// // import axios from 'axios';

// // function Login({ onLoginSuccess }) {
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!password) return;

// //     setIsLoading(true);
// //     setError('');

// //     try {
// //       const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { password });
// //       const { data } = response;

// //       if (data.status === 'success') {
// //         localStorage.setItem('token', data.token);
// //         localStorage.setItem('user', JSON.stringify(data.user));
// //         onLoginSuccess(data.user);
// //       } else if (data.status === 'signup_required') {
// //         // If user doesn't exist, create a new account
// //         const signupResponse = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
// //           name: 'User',
// //           email: `user${Date.now()}@example.com`,
// //           password
// //         });
        
// //         const signupData = signupResponse.data;
// //         localStorage.setItem('token', signupData.token);
// //         localStorage.setItem('user', JSON.stringify(signupData.user));
// //         onLoginSuccess(signupData.user);
// //       }
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       if (error.code === 'ERR_NETWORK') {
// //         setError('Cannot connect to server. Please try again later.');
// //       } else {
// //         setError(error.response?.data?.error || 'An error occurred. Please try again.');
// //       }
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         bgcolor: 'background.default'
// //       }}
// //     >
// //       <Container maxWidth="sm">
// //         <Paper
// //           elevation={3}
// //           sx={{
// //             p: 4,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //             gap: 2
// //           }}
// //         >
// //           <Typography
// //             variant="h3"
// //             component="h1"
// //             sx={{
// //               color: 'primary.main',
// //               mb: 3,
// //               fontWeight: 600
// //             }}
// //           >
// //             Better
// //           </Typography>

// //           <Box
// //             sx={{
// //               bgcolor: '#F3E8FF',
// //               p: 2,
// //               borderRadius: '50%',
// //               mb: 2
// //             }}
// //           >
// //             <LockIcon sx={{ color: 'primary.main', fontSize: 32 }} />
// //           </Box>

// //           <Typography variant="h6" sx={{ mb: 2 }}>
// //             Enter your password to start your day
// //           </Typography>

// //           <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
// //             <TextField
// //               fullWidth
// //               type="password"
// //               placeholder="Enter password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               error={!!error}
// //               helperText={error}
// //               disabled={isLoading}
// //               sx={{ mb: 2 }}
// //             />

// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               size="large"
// //               disabled={isLoading || !password}
// //               sx={{
// //                 py: 1.5,
// //                 textTransform: 'none',
// //                 fontSize: '1.1rem'
// //               }}
// //             >
// //               {isLoading ? 'Checking...' : 'Start My Day'}
// //             </Button>
// //           </Box>
// //         </Paper>
// //       </Container>
// //     </Box>
// //   );
// // }

// // export default Login; 


import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';

function Login({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false); // Toggle between login and signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) return;

    setIsLoading(true);
    setError('');

    try {
      if (isSignupMode) {
        // Signup mode: Send username, email, and password
        console.log('Making signup request to:', `${process.env.REACT_APP_API_URL}/auth/signup`);
        const signupResponse = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
          name: username,
          email,
          password
        });
        console.log('Signup response:', signupResponse.data);
        
        const signupData = signupResponse.data;
        if (signupData.status === 'success') {
          localStorage.setItem('token', signupData.token);
          localStorage.setItem('user', JSON.stringify(signupData.user));
          onLoginSuccess(signupData.user);
        }
      } else {
        // Login mode: Try to log in with password only
        console.log('Making login request to:', `${process.env.REACT_APP_API_URL}/auth/login`);
        console.log('With password:', password);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { password });
        console.log('Login response:', response.data);
        
        const { data } = response;

        if (data.status === 'success') {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          onLoginSuccess(data.user);
        } else if (data.status === 'signup_required') {
          console.log('User not found, switching to signup mode');
          setIsSignupMode(true); // Switch to signup form
        }
      }
    } catch (error) {
      console.error('Detailed error:', error);
      if (error.response?.status === 404 && error.response?.data?.status === 'signup_required') {
        setIsSignupMode(true); // Handle 404 signup_required case
      } else if (error.code === 'ERR_NETWORK') {
        setError('Cannot connect to server. Please try again later.');
      } else {
        setError(error.response?.data?.error || 'An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: 'primary.main',
              mb: 3,
              fontWeight: 600
            }}
          >
            Better
          </Typography>

          <Box
            sx={{
              bgcolor: '#F3E8FF',
              p: 2,
              borderRadius: '50%',
              mb: 2
            }}
          >
            <LockIcon sx={{ color: 'primary.main', fontSize: 32 }} />
          </Box>

          <Typography variant="h6" sx={{ mb: 2 }}>
            {isSignupMode ? 'Create your account' : 'Enter your password to start your day'}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            {isSignupMode && (
              <>
                <TextField
                  fullWidth
                  label="Username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={!!error && !username}
                  helperText={error && !username ? 'Username is required' : ''}
                  disabled={isLoading}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!error && !email}
                  helperText={error && !email ? 'Email is required' : ''}
                  disabled={isLoading}
                  sx={{ mb: 2 }}
                />
              </>
            )}
            <TextField
              fullWidth
              type="password"
              label="Password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error}
              helperText={error}
              disabled={isLoading}
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isLoading || !password || (isSignupMode && (!username || !email))}
              sx={{
                py: 1.5,
                textTransform: 'none',
                fontSize: '1.1rem'
              }}
            >
              {isLoading ? 'Processing...' : isSignupMode ? 'Sign Up' : 'Start My Day'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;