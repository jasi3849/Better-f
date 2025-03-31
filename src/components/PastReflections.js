// // import { useState, useEffect, useRef } from 'react';
// // import { Box, Typography } from '@mui/material';
// // import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
// // import axios from 'axios';
// // function PastReflections() {
// //   const [pastReflections, setPastReflections] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [loading, setLoading] = useState(false);
// //   // const [error, setError] = useState(null);
// //   const observerRef = useRef(null); // For IntersectionObserver


// //   const API_URL = process.env.REACT_APP_API_URL;


// //   // Fetch reflections
// //   const fetchReflections = async (pageNum) => {
// //     setLoading(true);
// //     try {
// //       const token = localStorage.getItem('token');
// //       const response = await axios.get(`${API_URL}/past-reflections?page=${pageNum}`, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });

// //       const newReflections = response.data.data.map(item => ({
// //         id: item._id,
// //         text: item.reflection,
// //         date: new Date(item.createdAt).toLocaleDateString('en-US', {
// //           year: 'numeric',
// //           month: 'long',
// //           day: 'numeric'
// //         })
// //       }));

// //       setPastReflections(prev => [...prev, ...newReflections]);
// //       setHasMore(pageNum < response.data.pagination.totalPages);
// //     } catch (err) {
// //       console.error('Error fetching past reflections:', err);
// //       // setError('Failed to load past reflections. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Initial fetch on mount
// //   useEffect(() => {
// //     fetchReflections(1);
// //   }, [API_URL]);

// //   // IntersectionObserver for lazy loading
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         if (entries[0].isIntersecting && hasMore && !loading) {
// //           setPage(prev => prev + 1);
// //           fetchReflections(page + 1);
// //         }
// //       },
// //       { threshold: 0.1 } // Trigger when 10% of the target is visible
// //     );

// //     if (observerRef.current) {
// //       observer.observe(observerRef.current);
// //     }

// //     return () => {
// //       if (observerRef.current) {
// //         observer.unobserve(observerRef.current);
// //       }
// //     };
// //   }, [hasMore, loading, page, API_URL]);


// //   return (
// //     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
// //       {/* Header */}
// //       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// //         <HistoryEduIcon sx={{ color: '#8B5CF6' }} />
// //         <Typography variant="h6" sx={{ fontWeight: 500 }}>
// //           Past Reflections
// //         </Typography>
// //       </Box>

// //       <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
// //         Your journey so far
// //       </Typography>

// //       {/* Reflections List */}
// //       <Box 
// //         sx={{ 
// //           flex: 1,
// //           overflowY: 'auto',
// //           '&::-webkit-scrollbar': {
// //             width: '6px'
// //           },
// //           '&::-webkit-scrollbar-track': {
// //             background: '#f1f1f1',
// //             borderRadius: '4px'
// //           },
// //           '&::-webkit-scrollbar-thumb': {
// //             background: '#8B5CF6',
// //             borderRadius: '4px',
// //             '&:hover': {
// //               background: '#7C3AED'
// //             }
// //           }
// //         }}
// //       >
// //         {pastReflections.length > 0 ? (
// //           pastReflections.map((reflection) => (
// //             <Box
// //               key={reflection.id}
// //               sx={{
// //                 p: 2,
// //                 mb: 2,
// //                 bgcolor: 'rgba(139, 92, 246, 0.05)',
// //                 borderRadius: '8px',
// //                 border: '1px solid rgba(139, 92, 246, 0.1)',
// //                 '&:last-child': {
// //                   mb: 0
// //                 }
// //               }}
// //             >
// //               <Typography sx={{ mb: 1 }}>
// //                 {reflection.text}
// //               </Typography>
// //               <Typography 
// //                 variant="caption" 
// //                 color="text.secondary"
// //                 sx={{ 
// //                   display: 'block',
// //                   fontStyle: 'italic'
// //                 }}
// //               >
// //                 {reflection.date}
// //               </Typography>
// //             </Box>
// //           ))
// //         ) : (
// //           <Typography 
// //             color="text.secondary" 
// //             sx={{ 
// //               textAlign: 'center',
// //               fontStyle: 'italic'
// //             }}
// //           >
// //             No reflections yet. Your daily moments will appear here.
// //           </Typography>
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default PastReflections; 

// import { useState, useEffect, useRef } from 'react';
// import { Box, Typography } from '@mui/material';
// import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
// import axios from 'axios';

// function PastReflections() {
//   const [pastReflections, setPastReflections] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const observerRef = useRef(null); // For IntersectionObserver

//   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

//   // Fetch reflections
//   const fetchReflections = async (pageNum) => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get(`${API_URL}/past-reflections?page=${pageNum}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const newReflections = response.data.data.map(item => ({
//         id: item._id,
//         text: item.reflection,
//         date: new Date(item.createdAt).toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         })
//       }));

//       setPastReflections(prev => [...prev, ...newReflections]);
//       setHasMore(pageNum < response.data.pagination.totalPages);
//     } catch (err) {
//       console.error('Error fetching past reflections:', err);
//       setError('Failed to load past reflections. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initial fetch on mount
//   useEffect(() => {
//     fetchReflections(1);
//   }, [API_URL]);

//   // IntersectionObserver for lazy loading
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && hasMore && !loading) {
//           setPage(prev => prev + 1);
//           fetchReflections(page + 1);
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the target is visible
//     );

//     if (observerRef.current) {
//       observer.observe(observerRef.current);
//     }

//     return () => {
//       if (observerRef.current) {
//         observer.unobserve(observerRef.current);
//       }
//     };
//   }, [hasMore, loading, page, API_URL]);

//   return (
//     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
//       {/* Header */}
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
//         <HistoryEduIcon sx={{ color: '#8B5CF6' }} />
//         <Typography variant="h6" sx={{ fontWeight: 500 }}>
//           Past Reflections
//         </Typography>
//       </Box>

//       <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
//         Your journey so far
//       </Typography>

//       {/* Reflections List */}
//       <Box 
//         sx={{ 
//           flex: 1,
//           overflowY: 'auto',
//           '&::-webkit-scrollbar': {
//             width: '6px'
//           },
//           '&::-webkit-scrollbar-track': {
//             background: '#f1f1f1',
//             borderRadius: '4px'
//           },
//           '&::-webkit-scrollbar-thumb': {
//             background: '#8B5CF6',
//             borderRadius: '4px',
//             '&:hover': {
//               background: '#7C3AED'
//             }
//           }
//         }}
//       >
//         {pastReflections.length > 0 ? (
//           pastReflections.map((reflection) => (
//             <Box
//               key={reflection.id}
//               sx={{
//                 p: 2,
//                 mb: 2,
//                 bgcolor: 'rgba(139, 92, 246, 0.05)',
//                 borderRadius: '8px',
//                 border: '1px solid rgba(139, 92, 246, 0.1)',
//                 '&:last-child': {
//                   mb: 0
//                 }
//               }}
//             >
//               <Typography sx={{ mb: 1 }}>
//                 {reflection.text}
//               </Typography>
//               <Typography 
//                 variant="caption" 
//                 color="text.secondary"
//                 sx={{ 
//                   display: 'block',
//                   fontStyle: 'italic'
//                 }}
//               >
//                 {reflection.date}
//               </Typography>
//             </Box>
//           ))
//         ) : (
//           <Typography 
//             color="text.secondary" 
//             sx={{ 
//               textAlign: 'center',
//               fontStyle: 'italic'
//             }}
//           >
//             No reflections yet. Your daily moments will appear here.
//           </Typography>
//         )}
//         {/* Loading Indicator or Sentinel for IntersectionObserver */}
//         {hasMore && (
//           <Box ref={observerRef} sx={{ textAlign: 'center', py: 2 }}>
//             {loading ? (
//               <Typography color="text.secondary">Loading...</Typography>
//             ) : null}
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default PastReflections;


import { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import axios from 'axios';

function PastReflections() {
  const [pastReflections, setPastReflections] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  const API_URL = process.env.REACT_APP_API_URL ;

  const fetchReflections = useCallback(async (pageNum) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/past-reflections?page=${pageNum}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const newReflections = response.data.data.map(item => ({
        id: item._id,
        text: item.reflection,
        date: new Date(item.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }));

      setPastReflections(prev => [...prev, ...newReflections]);
      setHasMore(pageNum < response.data.pagination.totalPages);
    } catch (err) {
      console.error('Error fetching past reflections:', err);
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchReflections(1);
  }, [fetchReflections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(prev => prev + 1);
          fetchReflections(page + 1);
        }
      },
      { threshold: 0.1 }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [hasMore, loading, page, fetchReflections]);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <HistoryEduIcon sx={{ color: '#8B5CF6' }} />
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Past Reflections
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Your journey so far
      </Typography>

      {/* Reflections List */}
      <Box 
        sx={{ 
          flex: 1,
          maxHeight: '500px', // Fixed height for ~5 items
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '6px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#8B5CF6',
            borderRadius: '4px',
            '&:hover': {
              background: '#7C3AED'
            }
          }
        }}
      >
        {pastReflections.length > 0 ? (
          pastReflections.map((reflection) => (
            <Box
              key={reflection.id}
              sx={{
                p: 2,
                mb: 2,
                bgcolor: 'rgba(139, 92, 246, 0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                '&:last-child': {
                  mb: 0
                }
              }}
            >
              <Typography sx={{ mb: 1 }}>
                {reflection.text}
              </Typography>
              <Typography 
                variant="caption" 
                color="text.secondary"
                sx={{ 
                  display: 'block',
                  fontStyle: 'italic'
                }}
              >
                {reflection.date}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography 
            color="text.secondary" 
            sx={{ 
              textAlign: 'center',
              fontStyle: 'italic'
            }}
          >
            No reflections yet. Your daily moments will appear here.
          </Typography>
        )}
        {hasMore && (
          <Box ref={observerRef} sx={{ textAlign: 'center', py: 2 }}>
            {loading ? (
              <Typography color="text.secondary">Loading...</Typography>
            ) : null}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PastReflections;