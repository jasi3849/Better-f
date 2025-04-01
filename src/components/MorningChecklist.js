import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { useState , useEffect} from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
function MorningChecklist() {
  const [newItem, setNewItem] = useState('');
  const [tasks, setTasks] = useState([]);
  // const [error, setError] = useState(null);


  const API_URL = process.env.REACT_APP_API_URL;

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/morning-checklist`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        // Map backend data to match frontend structure
        const fetchedTasks = response.data.data.map(item => ({
          id: item._id,
          text: item.text,
          completed: item.status === 'done'
        }));
        setTasks(fetchedTasks);
      } catch (err) {
        console.error('Error fetching tasks:', err);
        // setError('Failed to load checklist. Please try again.');
      }
    };

    fetchTasks();
  }, [API_URL]); // Runs once on mount


  // const handleAddTask = () => {
  //   if (newItem.trim()) {
  //     setTasks([...tasks, { 
  //       id: Date.now(), // Using timestamp as unique id
  //       text: newItem.trim(), 
  //       completed: false 
  //     }]);
  //     setNewItem('');
  //   }
  // };

  const handleAddTask = async () => {
    if (!newItem.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_URL}/morning-checklist`,
        { text: newItem.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const newTask = {
        id: response.data.data._id,
        text: response.data.data.text,
        completed: response.data.data.status === 'done'
      };

      setTasks([...tasks, newTask]);
      setNewItem('');
      // setError(null);
    } catch (err) {
      console.error('Error adding task:', err);
      // setError('Failed to add task. Please try again.');
    }
  };

  // const toggleTask = (id) => {
  //   setTasks(tasks.map(task => 
  //     task.id === id ? { ...task, completed: !task.completed } : task
  //   ));
  // };

  const toggleTask = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${API_URL}/morning-checklist/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedTask = {
        id: response.data.data._id,
        text: response.data.data.text,
        completed: response.data.data.status === 'done'
      };

      setTasks(tasks.map(task =>
        task.id === id ? updatedTask : task
      ));
      // setError(null);
    } catch (err) {
      console.error('Error toggling task:', err);
      // setError('Failed to update task. Please try again.');
    }
  };


  // const deleteTask = (id, event) => {
  //   event.stopPropagation(); // Prevent triggering the toggle when clicking delete
  //   setTasks(tasks.filter(task => task.id !== id));
  // };

  const deleteTask = async (id, event) => {
    event.stopPropagation();

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URL}/morning-checklist/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setTasks(tasks.filter(task => task.id !== id));
      // setError(null);
    } catch (err) {
      console.error('Error deleting task:', err);
      // setError('Failed to delete task. Please try again.');
    }
  };



  const completedCount = tasks.filter(task => task.completed).length;
  const completionPercentage = (tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0).toFixed(0);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Title and Completion */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Morning Checklist
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {completionPercentage}% Complete
        </Typography>
      </Box>

      {/* Description */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Tasks to start your day right
      </Typography>

      {/* Task List - Scrollable after 5 items */}
      <Box 
        sx={{ 
          flex: 1,
          overflow: 'auto',
          maxHeight: '250px',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        {tasks.map((task) => (
          <Box 
            key={task.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              p: 1,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
              borderRadius: 1,
            }}
          >
            <Box 
              onClick={() => toggleTask(task.id)}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                flex: 1,
                cursor: 'pointer' 
              }}
            >
              {task.completed ? 
                <CheckBoxIcon color="primary" /> : 
                <CheckBoxOutlineBlankIcon />
              }
              <Typography 
                sx={{ 
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'text.secondary' : 'text.primary'
                }}
              >
                {task.text}
              </Typography>
            </Box>
            <IconButton 
              size="small" 
              onClick={(e) => deleteTask(task.id, e)}
              sx={{ 
                opacity: 0,
                transition: 'opacity 0.2s',
                '.MuiBox-root:hover &': {
                  opacity: 1
                }
              }}
            >
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Add New Task */}
      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            }
          }}
        />
        <Button
          variant="contained"
          onClick={handleAddTask}
          sx={{
            bgcolor: '#8B5CF6',
            borderRadius: '8px',
            '&:hover': {
              bgcolor: '#7C3AED'
            }
          }}
        >
          Add
        </Button>
      </Box>

      {/* Helper Text */}
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.75rem', fontStyle: 'italic' }}>
        Add items to your morning checklist
      </Typography>
    </Box>
  );
}

export default MorningChecklist; 