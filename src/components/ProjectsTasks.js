// // // // import { Box, Typography, Button, Select, MenuItem, TextField, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
// // // // import { useState } from 'react';
// // // // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // // // import AddIcon from '@mui/icons-material/Add';
// // // // import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// // // // import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// // // // function ProjectsTasks() {
// // // //   const [selectedTaskType, setSelectedTaskType] = useState('Weekly Tasks');
// // // //   const [newTask, setNewTask] = useState('');
// // // //   const [projects, setProjects] = useState([]);
// // // //   const [selectedProject, setSelectedProject] = useState(null);
// // // //   const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
// // // //   const [newProjectName, setNewProjectName] = useState('');

// // // //   // Initialize empty tasks for each project
// // // //   const [projectTasks, setProjectTasks] = useState({});

// // // //   const taskTypes = ['Daily Tasks', 'Weekly Tasks', 'Monthly Tasks', 'Long-term Goals'];

// // // //   const handleAddProject = () => {
// // // //     if (newProjectName.trim()) {
// // // //       const newProject = {
// // // //         id: Date.now(),
// // // //         name: newProjectName.trim()
// // // //       };
// // // //       setProjects([...projects, newProject]);
// // // //       // Initialize empty tasks for the new project
// // // //       setProjectTasks(prev => ({
// // // //         ...prev,
// // // //         [newProject.id]: {
// // // //           'Daily Tasks': [],
// // // //           'Weekly Tasks': [],
// // // //           'Monthly Tasks': [],
// // // //           'Long-term Goals': []
// // // //         }
// // // //       }));
// // // //       setNewProjectName('');
// // // //       setIsNewProjectDialogOpen(false);
// // // //       // Select the newly created project
// // // //       setSelectedProject(newProject.id);
// // // //     }
// // // //   };

// // // //   const handleAddTask = () => {
// // // //     if (newTask.trim() && selectedProject) {
// // // //       setProjectTasks(prev => ({
// // // //         ...prev,
// // // //         [selectedProject]: {
// // // //           ...prev[selectedProject],
// // // //           [selectedTaskType]: [
// // // //             ...prev[selectedProject][selectedTaskType],
// // // //             { id: Date.now(), text: newTask.trim(), completed: false }
// // // //           ]
// // // //         }
// // // //       }));
// // // //       setNewTask('');
// // // //     }
// // // //   };

// // // //   const toggleTask = (taskType, taskId) => {
// // // //     if (selectedProject) {
// // // //       setProjectTasks(prev => ({
// // // //         ...prev,
// // // //         [selectedProject]: {
// // // //           ...prev[selectedProject],
// // // //           [taskType]: prev[selectedProject][taskType].map(task =>
// // // //             task.id === taskId ? { ...task, completed: !task.completed } : task
// // // //           )
// // // //         }
// // // //       }));
// // // //     }
// // // //   };

// // // //   const deleteTask = (taskType, taskId, event) => {
// // // //     event.stopPropagation(); // Prevent any parent click handlers
// // // //     if (selectedProject) {
// // // //       setProjectTasks(prev => ({
// // // //         ...prev,
// // // //         [selectedProject]: {
// // // //           ...prev[selectedProject],
// // // //           [taskType]: prev[selectedProject][taskType].filter(task => task.id !== taskId)
// // // //         }
// // // //       }));
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
// // // //       {/* Header */}
// // // //       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// // // //         <CalendarTodayIcon sx={{ color: '#8B5CF6' }} />
// // // //         <Typography variant="h6" sx={{ fontWeight: 500, flex: 1 }}>
// // // //           Projects & Tasks
// // // //         </Typography>
// // // //         <Button
// // // //           variant="contained"
// // // //           startIcon={<AddIcon />}
// // // //           onClick={() => setIsNewProjectDialogOpen(true)}
// // // //           sx={{
// // // //             bgcolor: '#8B5CF6',
// // // //             borderRadius: '8px',
// // // //             '&:hover': {
// // // //               bgcolor: '#7C3AED'
// // // //             }
// // // //           }}
// // // //         >
// // // //           New Project
// // // //         </Button>
// // // //       </Box>

// // // //       <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
// // // //         Track your goals and progress
// // // //       </Typography>

// // // //       {/* Projects Row */}
// // // //       <Box sx={{ 
// // // //         display: 'flex', 
// // // //         gap: 2, 
// // // //         mb: 3,
// // // //         overflowX: 'auto',
// // // //         pb: 1
// // // //       }}>
// // // //         {projects.map((project) => (
// // // //           <Button
// // // //             key={project.id}
// // // //             variant="outlined"
// // // //             onClick={() => setSelectedProject(project.id)}
// // // //             sx={{
// // // //               borderRadius: '8px',
// // // //               color: selectedProject === project.id ? 'white' : '#6B7280',
// // // //               bgcolor: selectedProject === project.id ? '#8B5CF6' : 'transparent',
// // // //               borderColor: '#E5E7EB',
// // // //               whiteSpace: 'nowrap',
// // // //               '&:hover': {
// // // //                 bgcolor: selectedProject === project.id ? '#7C3AED' : 'rgba(139, 92, 246, 0.04)',
// // // //                 borderColor: '#8B5CF6'
// // // //               }
// // // //             }}
// // // //           >
// // // //             {project.name}
// // // //           </Button>
// // // //         ))}
// // // //       </Box>

// // // //       {selectedProject ? (
// // // //         <>
// // // //           {/* Task Type Selector and Input */}
// // // //           <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
// // // //             <Select
// // // //               value={selectedTaskType}
// // // //               onChange={(e) => setSelectedTaskType(e.target.value)}
// // // //               size="small"
// // // //               IconComponent={KeyboardArrowDownIcon}
// // // //               sx={{
// // // //                 minWidth: 150,
// // // //                 height: 40,
// // // //                 bgcolor: 'white',
// // // //                 border: '2px solid #8B5CF6',
// // // //                 borderRadius: '8px',
// // // //                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
// // // //               }}
// // // //             >
// // // //               {taskTypes.map((type) => (
// // // //                 <MenuItem key={type} value={type}>{type}</MenuItem>
// // // //               ))}
// // // //             </Select>
// // // //             <TextField
// // // //               fullWidth
// // // //               size="small"
// // // //               placeholder="Add a new task"
// // // //               value={newTask}
// // // //               onChange={(e) => setNewTask(e.target.value)}
// // // //               onKeyPress={(e) => {
// // // //                 if (e.key === 'Enter') {
// // // //                   handleAddTask();
// // // //                 }
// // // //               }}
// // // //               sx={{
// // // //                 '& .MuiOutlinedInput-root': {
// // // //                   borderRadius: '8px',
// // // //                   border: '2px solid #8B5CF6',
// // // //                   '& fieldset': { border: 'none' }
// // // //                 }
// // // //               }}
// // // //             />
// // // //             <Button
// // // //               variant="contained"
// // // //               onClick={handleAddTask}
// // // //               sx={{
// // // //                 bgcolor: '#8B5CF6',
// // // //                 borderRadius: '8px',
// // // //                 px: 4,
// // // //                 '&:hover': {
// // // //                   bgcolor: '#7C3AED'
// // // //                 }
// // // //               }}
// // // //             >
// // // //               Add
// // // //             </Button>
// // // //           </Box>

// // // //           {/* Tasks Grid */}
// // // //           <Box sx={{ 
// // // //             display: 'grid',
// // // //             gridTemplateColumns: '1fr 1fr',
// // // //             gap: 3,
// // // //             flex: 1
// // // //           }}>
// // // //             {taskTypes.map((taskType) => (
// // // //               <Box key={taskType}>
// // // //                 <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
// // // //                   {taskType}
// // // //                 </Typography>
// // // //                 {projectTasks[selectedProject][taskType].length > 0 ? (
// // // //                   projectTasks[selectedProject][taskType].map(task => (
// // // //                     <Box 
// // // //                       key={task.id}
// // // //                       sx={{ 
// // // //                         display: 'flex',
// // // //                         alignItems: 'center',
// // // //                         gap: 1,
// // // //                         mb: 1,
// // // //                         '&:hover .delete-icon': {
// // // //                           opacity: 1
// // // //                         }
// // // //                       }}
// // // //                     >
// // // //                       <Box sx={{ 
// // // //                         display: 'flex', 
// // // //                         alignItems: 'center',
// // // //                         gap: 1,
// // // //                         flex: 1
// // // //                       }}>
// // // //                         <Checkbox
// // // //                           checked={task.completed}
// // // //                           onChange={() => toggleTask(taskType, task.id)}
// // // //                           sx={{
// // // //                             color: '#8B5CF6',
// // // //                             '&.Mui-checked': {
// // // //                               color: '#8B5CF6',
// // // //                             }
// // // //                           }}
// // // //                         />
// // // //                         <Typography
// // // //                           sx={{
// // // //                             textDecoration: task.completed ? 'line-through' : 'none',
// // // //                             color: task.completed ? 'text.secondary' : 'text.primary'
// // // //                           }}
// // // //                         >
// // // //                           {task.text}
// // // //                         </Typography>
// // // //                       </Box>
// // // //                       <IconButton
// // // //                         size="small"
// // // //                         onClick={(e) => deleteTask(taskType, task.id, e)}
// // // //                         className="delete-icon"
// // // //                         sx={{
// // // //                           opacity: 0,
// // // //                           transition: 'opacity 0.2s',
// // // //                           color: 'text.secondary',
// // // //                           '&:hover': {
// // // //                             color: 'error.main'
// // // //                           }
// // // //                         }}
// // // //                       >
// // // //                         <DeleteOutlineIcon fontSize="small" />
// // // //                       </IconButton>
// // // //                     </Box>
// // // //                   ))
// // // //                 ) : (
// // // //                   <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
// // // //                     No {taskType.toLowerCase()} yet
// // // //                   </Typography>
// // // //                 )}
// // // //               </Box>
// // // //             ))}
// // // //           </Box>
// // // //         </>
// // // //       ) : (
// // // //         <Box sx={{ 
// // // //           flex: 1, 
// // // //           display: 'flex', 
// // // //           alignItems: 'center', 
// // // //           justifyContent: 'center',
// // // //           flexDirection: 'column',
// // // //           gap: 2
// // // //         }}>
// // // //           <Typography variant="h6" color="text.secondary">
// // // //             No project selected
// // // //           </Typography>
// // // //           <Typography color="text.secondary">
// // // //             Create a new project or select an existing one to manage tasks
// // // //           </Typography>
// // // //         </Box>
// // // //       )}

// // // //       {/* New Project Dialog */}
// // // //       <Dialog 
// // // //         open={isNewProjectDialogOpen} 
// // // //         onClose={() => setIsNewProjectDialogOpen(false)}
// // // //         PaperProps={{
// // // //           sx: { borderRadius: '12px' }
// // // //         }}
// // // //       >
// // // //         <DialogTitle>Create New Project</DialogTitle>
// // // //         <DialogContent>
// // // //           <TextField
// // // //             autoFocus
// // // //             fullWidth
// // // //             label="Project Name"
// // // //             value={newProjectName}
// // // //             onChange={(e) => setNewProjectName(e.target.value)}
// // // //             sx={{ mt: 1 }}
// // // //           />
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           <Button 
// // // //             onClick={() => setIsNewProjectDialogOpen(false)}
// // // //             sx={{ color: 'text.secondary' }}
// // // //           >
// // // //             Cancel
// // // //           </Button>
// // // //           <Button 
// // // //             onClick={handleAddProject}
// // // //             variant="contained"
// // // //             sx={{
// // // //               bgcolor: '#8B5CF6',
// // // //               '&:hover': {
// // // //                 bgcolor: '#7C3AED'
// // // //               }
// // // //             }}
// // // //           >
// // // //             Create
// // // //           </Button>
// // // //         </DialogActions>
// // // //       </Dialog>
// // // //     </Box>
// // // //   );
// // // // }

// // // // export default ProjectsTasks; 


// // // import { Box, Typography, Button, Select, MenuItem, TextField, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
// // // import { useState, useEffect } from 'react';
// // // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // // import AddIcon from '@mui/icons-material/Add';
// // // import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// // // import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// // // import axios from 'axios';

// // // function ProjectsTasks() {
// // //   const [selectedTaskType, setSelectedTaskType] = useState('Weekly Tasks');
// // //   const [newTask, setNewTask] = useState('');
// // //   const [projects, setProjects] = useState([]);
// // //   const [selectedProject, setSelectedProject] = useState(null);
// // //   const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
// // //   const [newProjectName, setNewProjectName] = useState('');
// // //   const [projectTasks, setProjectTasks] = useState({});

// // //   const taskTypes = ['Daily Tasks', 'Weekly Tasks', 'Monthly Tasks', 'Long-term Goals'];
// // //   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// // //   // Fetch projects on mount
// // //   useEffect(() => {
// // //     const fetchProjects = async () => {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         const response = await axios.get(`${API_URL}/projects-tasks/projects`, {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         setProjects(response.data.data);
// // //         // Initialize tasks for fetched projects
// // //         const tasksObj = {};
// // //         response.data.data.forEach(project => {
// // //           tasksObj[project._id] = {
// // //             'Daily Tasks': [],
// // //             'Weekly Tasks': [],
// // //             'Monthly Tasks': [],
// // //             'Long-term Goals': []
// // //           };
// // //         });
// // //         setProjectTasks(tasksObj);
// // //       } catch (err) {
// // //         console.error('Error fetching projects:', err);
// // //       }
// // //     };
// // //     fetchProjects();
// // //   }, [API_URL]);

// // //   // Fetch tasks when a project is selected
// // //   useEffect(() => {
// // //     if (selectedProject) {
// // //       const fetchTasks = async () => {
// // //         try {
// // //           const token = localStorage.getItem('token');
// // //           const response = await axios.get(`${API_URL}/projects-tasks/tasks/${selectedProject}`, {
// // //             headers: { Authorization: `Bearer ${token}` }
// // //           });
// // //           const tasks = response.data.data.reduce((acc, task) => {
// // //             acc[task.type] = acc[task.type] || [];
// // //             acc[task.type].push({ id: task._id, text: task.text, completed: task.completed });
// // //             return acc;
// // //           }, {
// // //             'Daily Tasks': [],
// // //             'Weekly Tasks': [],
// // //             'Monthly Tasks': [],
// // //             'Long-term Goals': []
// // //           });
// // //           setProjectTasks(prev => ({ ...prev, [selectedProject]: tasks }));
// // //         } catch (err) {
// // //           console.error('Error fetching tasks:', err);
// // //         }
// // //       };
// // //       fetchTasks();
// // //     }
// // //   }, [selectedProject, API_URL]);

// // //   const handleAddProject = async () => {
// // //     if (newProjectName.trim()) {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         const response = await axios.post(
// // //           `${API_URL}/projects-tasks/projects`,
// // //           { name: newProjectName.trim() },
// // //           { headers: { Authorization: `Bearer ${token}` } }
// // //         );
// // //         const newProject = response.data.data;
// // //         setProjects([...projects, newProject]);
// // //         setProjectTasks(prev => ({
// // //           ...prev,
// // //           [newProject._id]: {
// // //             'Daily Tasks': [],
// // //             'Weekly Tasks': [],
// // //             'Monthly Tasks': [],
// // //             'Long-term Goals': []
// // //           }
// // //         }));
// // //         setNewProjectName('');
// // //         setIsNewProjectDialogOpen(false);
// // //         setSelectedProject(newProject._id);
// // //       } catch (err) {
// // //         console.error('Error adding project:', err);
// // //       }
// // //     }
// // //   };

// // //   const handleAddTask = async () => {
// // //     if (newTask.trim() && selectedProject) {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         const response = await axios.post(
// // //           `${API_URL}/projects-tasks/tasks`,
// // //           { projectId: selectedProject, text: newTask.trim(), type: selectedTaskType },
// // //           { headers: { Authorization: `Bearer ${token}` } }
// // //         );
// // //         const newTaskData = response.data.data;
// // //         setProjectTasks(prev => ({
// // //           ...prev,
// // //           [selectedProject]: {
// // //             ...prev[selectedProject],
// // //             [selectedTaskType]: [
// // //               ...prev[selectedProject][selectedTaskType],
// // //               { id: newTaskData._id, text: newTaskData.text, completed: newTaskData.completed }
// // //             ]
// // //           }
// // //         }));
// // //         setNewTask('');
// // //       } catch (err) {
// // //         console.error('Error adding task:', err);
// // //       }
// // //     }
// // //   };

// // //   const toggleTask = async (taskType, taskId) => {
// // //     if (selectedProject) {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         const response = await axios.put(
// // //           `${API_URL}/projects-tasks/tasks/${taskId}`,
// // //           {},
// // //           { headers: { Authorization: `Bearer ${token}` } }
// // //         );
// // //         const updatedTask = response.data.data;
// // //         setProjectTasks(prev => ({
// // //           ...prev,
// // //           [selectedProject]: {
// // //             ...prev[selectedProject],
// // //             [taskType]: prev[selectedProject][taskType].map(task =>
// // //               task.id === taskId ? { ...task, completed: updatedTask.completed } : task
// // //             )
// // //           }
// // //         }));
// // //       } catch (err) {
// // //         console.error('Error toggling task:', err);
// // //       }
// // //     }
// // //   };

// // //   const deleteTask = async (taskType, taskId, event) => {
// // //     event.stopPropagation();
// // //     if (selectedProject) {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         await axios.delete(`${API_URL}/projects-tasks/tasks/${taskId}`, {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         setProjectTasks(prev => ({
// // //           ...prev,
// // //           [selectedProject]: {
// // //             ...prev[selectedProject],
// // //             [taskType]: prev[selectedProject][taskType].filter(task => task.id !== taskId)
// // //           }
// // //         }));
// // //       } catch (err) {
// // //         console.error('Error deleting task:', err);
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
// // //       {/* Header */}
// // //       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// // //         <CalendarTodayIcon sx={{ color: '#8B5CF6' }} />
// // //         <Typography variant="h6" sx={{ fontWeight: 500, flex: 1 }}>
// // //           Projects & Tasks
// // //         </Typography>
// // //         <Button
// // //           variant="contained"
// // //           startIcon={<AddIcon />}
// // //           onClick={() => setIsNewProjectDialogOpen(true)}
// // //           sx={{
// // //             bgcolor: '#8B5CF6',
// // //             borderRadius: '8px',
// // //             '&:hover': {
// // //               bgcolor: '#7C3AED'
// // //             }
// // //           }}
// // //         >
// // //           New Project
// // //         </Button>
// // //       </Box>

// // //       <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
// // //         Track your goals and progress
// // //       </Typography>

// // //       {/* Projects Row */}
// // //       <Box sx={{ 
// // //         display: 'flex', 
// // //         gap: 2, 
// // //         mb: 3,
// // //         overflowX: 'auto',
// // //         pb: 1
// // //       }}>
// // //         {projects.map((project) => (
// // //           <Button
// // //             key={project.id}
// // //             variant="outlined"
// // //             onClick={() => setSelectedProject(project._id)}
// // //             sx={{
// // //               borderRadius: '8px',
// // //               color: selectedProject === project._id ? 'white' : '#6B7280',
// // //               bgcolor: selectedProject === project._id ? '#8B5CF6' : 'transparent',
// // //               borderColor: '#E5E7EB',
// // //               whiteSpace: 'nowrap',
// // //               '&:hover': {
// // //                 bgcolor: selectedProject === project._id ? '#7C3AED' : 'rgba(139, 92, 246, 0.04)',
// // //                 borderColor: '#8B5CF6'
// // //               }
// // //             }}
// // //           >
// // //             {project.name}
// // //           </Button>
// // //         ))}
// // //       </Box>

// // //       {selectedProject ? (
// // //         <>
// // //           {/* Task Type Selector and Input */}
// // //           <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
// // //             <Select
// // //               value={selectedTaskType}
// // //               onChange={(e) => setSelectedTaskType(e.target.value)}
// // //               size="small"
// // //               IconComponent={KeyboardArrowDownIcon}
// // //               sx={{
// // //                 minWidth: 150,
// // //                 height: 40,
// // //                 bgcolor: 'white',
// // //                 border: '2px solid #8B5CF6',
// // //                 borderRadius: '8px',
// // //                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
// // //               }}
// // //             >
// // //               {taskTypes.map((type) => (
// // //                 <MenuItem key={type} value={type}>{type}</MenuItem>
// // //               ))}
// // //             </Select>
// // //             <TextField
// // //               fullWidth
// // //               size="small"
// // //               placeholder="Add a new task"
// // //               value={newTask}
// // //               onChange={(e) => setNewTask(e.target.value)}
// // //               onKeyPress={(e) => {
// // //                 if (e.key === 'Enter') {
// // //                   handleAddTask();
// // //                 }
// // //               }}
// // //               sx={{
// // //                 '& .MuiOutlinedInput-root': {
// // //                   borderRadius: '8px',
// // //                   border: '2px solid #8B5CF6',
// // //                   '& fieldset': { border: 'none' }
// // //                 }
// // //               }}
// // //             />
// // //             <Button
// // //               variant="contained"
// // //               onClick={handleAddTask}
// // //               sx={{
// // //                 bgcolor: '#8B5CF6',
// // //                 borderRadius: '8px',
// // //                 px: 4,
// // //                 '&:hover': {
// // //                   bgcolor: '#7C3AED'
// // //                 }
// // //               }}
// // //             >
// // //               Add
// // //             </Button>
// // //           </Box>

// // //           {/* Tasks Grid */}
// // //           <Box sx={{ 
// // //             display: 'grid',
// // //             gridTemplateColumns: '1fr 1fr',
// // //             gap: 3,
// // //             flex: 1
// // //           }}>
// // //             {taskTypes.map((taskType) => (
// // //               <Box key={taskType}>
// // //                 <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
// // //                   {taskType}
// // //                 </Typography>
// // //                 {projectTasks[selectedProject]?.[taskType]?.length > 0 ? (
// // //                   projectTasks[selectedProject][taskType].map(task => (
// // //                     <Box 
// // //                       key={task.id}
// // //                       sx={{ 
// // //                         display: 'flex',
// // //                         alignItems: 'center',
// // //                         gap: 1,
// // //                         mb: 1,
// // //                         '&:hover .delete-icon': {
// // //                           opacity: 1
// // //                         }
// // //                       }}
// // //                     >
// // //                       <Box sx={{ 
// // //                         display: 'flex', 
// // //                         alignItems: 'center',
// // //                         gap: 1,
// // //                         flex: 1
// // //                       }}>
// // //                         <Checkbox
// // //                           checked={task.completed}
// // //                           onChange={() => toggleTask(taskType, task.id)}
// // //                           sx={{
// // //                             color: '#8B5CF6',
// // //                             '&.Mui-checked': {
// // //                               color: '#8B5CF6',
// // //                             }
// // //                           }}
// // //                         />
// // //                         <Typography
// // //                           sx={{
// // //                             textDecoration: task.completed ? 'line-through' : 'none',
// // //                             color: task.completed ? 'text.secondary' : 'text.primary'
// // //                           }}
// // //                         >
// // //                           {task.text}
// // //                         </Typography>
// // //                       </Box>
// // //                       <IconButton
// // //                         size="small"
// // //                         onClick={(e) => deleteTask(taskType, task.id, e)}
// // //                         className="delete-icon"
// // //                         sx={{
// // //                           opacity: 0,
// // //                           transition: 'opacity 0.2s',
// // //                           color: 'text.secondary',
// // //                           '&:hover': {
// // //                             color: 'error.main'
// // //                           }
// // //                         }}
// // //                       >
// // //                         <DeleteOutlineIcon fontSize="small" />
// // //                       </IconButton>
// // //                     </Box>
// // //                   ))
// // //                 ) : (
// // //                   <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
// // //                     No {taskType.toLowerCase()} yet
// // //                   </Typography>
// // //                 )}
// // //               </Box>
// // //             ))}
// // //           </Box>
// // //         </>
// // //       ) : (
// // //         <Box sx={{ 
// // //           flex: 1, 
// // //           display: 'flex', 
// // //           alignItems: 'center', 
// // //           justifyContent: 'center',
// // //           flexDirection: 'column',
// // //           gap: 2
// // //         }}>
// // //           <Typography variant="h6" color="text.secondary">
// // //             No project selected
// // //           </Typography>
// // //           <Typography color="text.secondary">
// // //             Create a new project or select an existing one to manage tasks
// // //           </Typography>
// // //         </Box>
// // //       )}

// // //       {/* New Project Dialog */}
// // //       <Dialog 
// // //         open={isNewProjectDialogOpen} 
// // //         onClose={() => setIsNewProjectDialogOpen(false)}
// // //         PaperProps={{
// // //           sx: { borderRadius: '12px' }
// // //         }}
// // //       >
// // //         <DialogTitle>Create New Project</DialogTitle>
// // //         <DialogContent>
// // //           <TextField
// // //             autoFocus
// // //             fullWidth
// // //             label="Project Name"
// // //             value={newProjectName}
// // //             onChange={(e) => setNewProjectName(e.target.value)}
// // //             sx={{ mt: 1 }}
// // //           />
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button 
// // //             onClick={() => setIsNewProjectDialogOpen(false)}
// // //             sx={{ color: 'text.secondary' }}
// // //           >
// // //             Cancel
// // //           </Button>
// // //           <Button 
// // //             onClick={handleAddProject}
// // //             variant="contained"
// // //             sx={{
// // //               bgcolor: '#8B5CF6',
// // //               '&:hover': {
// // //                 bgcolor: '#7C3AED'
// // //               }
// // //             }}
// // //           >
// // //             Create
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     </Box>
// // //   );
// // // }

// // // export default ProjectsTasks;

// // import { Box, Typography, Button, Select, MenuItem, TextField, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
// // import { useState, useEffect } from 'react';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import AddIcon from '@mui/icons-material/Add';
// // import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// // import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// // import axios from 'axios';

// // function ProjectsTasks() {
// //   const [selectedTaskType, setSelectedTaskType] = useState('Weekly Tasks');
// //   const [newTask, setNewTask] = useState('');
// //   const [projects, setProjects] = useState([]);
// //   const [selectedProject, setSelectedProject] = useState(null);
// //   const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
// //   const [newProjectName, setNewProjectName] = useState('');
// //   const [projectTasks, setProjectTasks] = useState({});

// //   const taskTypes = ['Daily Tasks', 'Weekly Tasks', 'Monthly Tasks', 'Long-term Goals'];
// //   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// //   // Fetch projects on mount
// //   useEffect(() => {
// //     const fetchProjects = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.get(`${API_URL}/projects-tasks/projects`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         setProjects(response.data.data);
// //         const tasksObj = {};
// //         response.data.data.forEach(project => {
// //           tasksObj[project._id] = {
// //             'Daily Tasks': [],
// //             'Weekly Tasks': [],
// //             'Monthly Tasks': [],
// //             'Long-term Goals': []
// //           };
// //         });
// //         setProjectTasks(tasksObj);
// //       } catch (err) {
// //         console.error('Error fetching projects:', err);
// //       }
// //     };
// //     fetchProjects();
// //   }, [API_URL]);

// //   // Fetch tasks when a project is selected
// //   useEffect(() => {
// //     if (selectedProject) {
// //       const fetchTasks = async () => {
// //         try {
// //           const token = localStorage.getItem('token');
// //           const response = await axios.get(`${API_URL}/projects-tasks/tasks/${selectedProject}`, {
// //             headers: { Authorization: `Bearer ${token}` }
// //           });
// //           const tasks = response.data.data.reduce((acc, task) => {
// //             acc[task.type] = acc[task.type] || [];
// //             acc[task.type].push({ id: task._id, text: task.text, completed: task.completed });
// //             return acc;
// //           }, {
// //             'Daily Tasks': [],
// //             'Weekly Tasks': [],
// //             'Monthly Tasks': [],
// //             'Long-term Goals': []
// //           });
// //           setProjectTasks(prev => ({ ...prev, [selectedProject]: tasks }));
// //         } catch (err) {
// //           console.error('Error fetching tasks:', err);
// //         }
// //       };
// //       fetchTasks();
// //     }
// //   }, [selectedProject, API_URL]);

// //   const handleAddProject = async () => {
// //     if (newProjectName.trim()) {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.post(
// //           `${API_URL}/projects-tasks/projects`,
// //           { name: newProjectName.trim() },
// //           { headers: { Authorization: `Bearer ${token}` } }
// //         );
// //         const newProject = response.data.data;
// //         setProjects([...projects, newProject]);
// //         setProjectTasks(prev => ({
// //           ...prev,
// //           [newProject._id]: {
// //             'Daily Tasks': [],
// //             'Weekly Tasks': [],
// //             'Monthly Tasks': [],
// //             'Long-term Goals': []
// //           }
// //         }));
// //         setNewProjectName('');
// //         setIsNewProjectDialogOpen(false);
// //         setSelectedProject(newProject._id);
// //       } catch (err) {
// //         console.error('Error adding project:', err);
// //       }
// //     }
// //   };

// //   const handleAddTask = async () => {
// //     if (newTask.trim() && selectedProject) {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.post(
// //           `${API_URL}/projects-tasks/tasks`,
// //           { projectId: selectedProject, text: newTask.trim(), type: selectedTaskType },
// //           { headers: { Authorization: `Bearer ${token}` } }
// //         );
// //         const newTaskData = response.data.data;
// //         setProjectTasks(prev => ({
// //           ...prev,
// //           [selectedProject]: {
// //             ...prev[selectedProject],
// //             [selectedTaskType]: [
// //               ...prev[selectedProject][selectedTaskType],
// //               { id: newTaskData._id, text: newTaskData.text, completed: newTaskData.completed }
// //             ]
// //           }
// //         }));
// //         setNewTask('');
// //       } catch (err) {
// //         console.error('Error adding task:', err);
// //       }
// //     }
// //   };

// //   const toggleTask = async (taskType, taskId) => {
// //     if (selectedProject) {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.put(
// //           `${API_URL}/projects-tasks/tasks/${taskId}`,
// //           {},
// //           { headers: { Authorization: `Bearer ${token}` } }
// //         );
// //         const updatedTask = response.data.data;
// //         setProjectTasks(prev => ({
// //           ...prev,
// //           [selectedProject]: {
// //             ...prev[selectedProject],
// //             [taskType]: prev[selectedProject][taskType].map(task =>
// //               task.id === taskId ? { ...task, completed: updatedTask.completed } : task
// //             )
// //           }
// //         }));
// //       } catch (err) {
// //         console.error('Error toggling task:', err);
// //       }
// //     }
// //   };

// //   const deleteTask = async (taskType, taskId, event) => {
// //     event.stopPropagation();
// //     if (selectedProject) {
// //       try {
// //         const token = localStorage.getItem('token');
// //         await axios.delete(`${API_URL}/projects-tasks/tasks/${taskId}`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         setProjectTasks(prev => ({
// //           ...prev,
// //           [selectedProject]: {
// //             ...prev[selectedProject],
// //             [taskType]: prev[selectedProject][taskType].filter(task => task.id !== taskId)
// //           }
// //         }));
// //       } catch (err) {
// //         console.error('Error deleting task:', err);
// //       }
// //     }
// //   };

// //   return (
// //     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
// //       {/* Header */}
// //       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
// //         <CalendarTodayIcon sx={{ color: '#8B5CF6' }} />
// //         <Typography variant="h6" sx={{ fontWeight: 500, flex: 1 }}>
// //           Projects & Tasks
// //         </Typography>
// //         <Button
// //           variant="contained"
// //           startIcon={<AddIcon />}
// //           onClick={() => setIsNewProjectDialogOpen(true)}
// //           sx={{
// //             bgcolor: '#8B5CF6',
// //             borderRadius: '8px',
// //             '&:hover': {
// //               bgcolor: '#7C3AED'
// //             }
// //           }}
// //         >
// //           New Project
// //         </Button>
// //       </Box>

// //       <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
// //         Track your goals and progress
// //       </Typography>

// //       {/* Projects Row */}
// //       <Box sx={{ 
// //         display: 'flex', 
// //         gap: 2, 
// //         mb: 3,
// //         overflowX: 'auto',
// //         pb: 1
// //       }}>
// //         {projects.map((project) => (
// //           <Button
// //             key={project.id}
// //             variant="outlined"
// //             onClick={() => setSelectedProject(project._id)}
// //             sx={{
// //               borderRadius: '8px',
// //               color: selectedProject === project._id ? 'white' : '#6B7280',
// //               bgcolor: selectedProject === project._id ? '#8B5CF6' : 'transparent',
// //               borderColor: '#E5E7EB',
// //               whiteSpace: 'nowrap',
// //               '&:hover': {
// //                 bgcolor: selectedProject === project._id ? '#7C3AED' : 'rgba(139, 92, 246, 0.04)',
// //                 borderColor: '#8B5CF6'
// //               }
// //             }}
// //           >
// //             {project.name}
// //           </Button>
// //         ))}
// //       </Box>

// //       {selectedProject ? (
// //         <>
// //           {/* Task Type Selector and Input */}
// //           <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
// //             <Select
// //               value={selectedTaskType}
// //               onChange={(e) => setSelectedTaskType(e.target.value)}
// //               size="small"
// //               IconComponent={KeyboardArrowDownIcon}
// //               sx={{
// //                 minWidth: 150,
// //                 height: 40,
// //                 bgcolor: 'white',
// //                 border: '2px solid #8B5CF6',
// //                 borderRadius: '8px',
// //                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
// //               }}
// //             >
// //               {taskTypes.map((type) => (
// //                 <MenuItem key={type} value={type}>{type}</MenuItem>
// //               ))}
// //             </Select>
// //             <TextField
// //               fullWidth
// //               size="small"
// //               placeholder="Add a new task"
// //               value={newTask}
// //               onChange={(e) => setNewTask(e.target.value)}
// //               onKeyPress={(e) => {
// //                 if (e.key === 'Enter') {
// //                   handleAddTask();
// //                 }
// //               }}
// //               sx={{
// //                 '& .MuiOutlinedInput-root': {
// //                   borderRadius: '8px',
// //                   border: '2px solid #8B5CF6',
// //                   '& fieldset': { border: 'none' }
// //                 }
// //               }}
// //             />
// //             <Button
// //               variant="contained"
// //               onClick={handleAddTask}
// //               sx={{
// //                 bgcolor: '#8B5CF6',
// //                 borderRadius: '8px',
// //                 px: 4,
// //                 '&:hover': {
// //                   bgcolor: '#7C3AED'
// //                 }
// //               }}
// //             >
// //               Add
// //             </Button>
// //           </Box>

// //           {/* Tasks Grid */}
// //           <Box sx={{ 
// //             display: 'grid',
// //             gridTemplateColumns: '1fr 1fr',
// //             gap: 3,
// //             flex: 1
// //           }}>
// //             {taskTypes.map((taskType) => (
// //               <Box key={taskType}>
// //                 <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
// //                   {taskType}
// //                 </Typography>
// //                 <Box
// //                   sx={{
// //                     maxHeight: '300px', // Limits height to ~5-6 tasks
// //                     overflowY: 'auto',
// //                     '&::-webkit-scrollbar': {
// //                       width: '6px'
// //                     },
// //                     '&::-webkit-scrollbar-track': {
// //                       background: '#f1f1f1',
// //                       borderRadius: '4px'
// //                     },
// //                     '&::-webkit-scrollbar-thumb': {
// //                       background: '#8B5CF6',
// //                       borderRadius: '4px',
// //                       '&:hover': {
// //                         background: '#7C3AED'
// //                       }
// //                     }
// //                   }}
// //                 >
// //                   {projectTasks[selectedProject]?.[taskType]?.length > 0 ? (
// //                     projectTasks[selectedProject][taskType].map(task => (
// //                       <Box 
// //                         key={task.id}
// //                         sx={{ 
// //                           display: 'flex',
// //                           alignItems: 'center',
// //                           gap: 1,
// //                           mb: 1,
// //                           '&:hover .delete-icon': {
// //                             opacity: 1
// //                           }
// //                         }}
// //                       >
// //                         <Box sx={{ 
// //                           display: 'flex', 
// //                           alignItems: 'center',
// //                           gap: 1,
// //                           flex: 1
// //                         }}>
// //                           <Checkbox
// //                             checked={task.completed}
// //                             onChange={() => toggleTask(taskType, task.id)}
// //                             sx={{
// //                               color: '#8B5CF6',
// //                               '&.Mui-checked': {
// //                                 color: '#8B5CF6',
// //                               }
// //                             }}
// //                           />
// //                           <Typography
// //                             sx={{
// //                               textDecoration: task.completed ? 'line-through' : 'none',
// //                               color: task.completed ? 'text.secondary' : 'text.primary'
// //                             }}
// //                           >
// //                             {task.text}
// //                           </Typography>
// //                         </Box>
// //                         <IconButton
// //                           size="small"
// //                           onClick={(e) => deleteTask(taskType, task.id, e)}
// //                           className="delete-icon"
// //                           sx={{
// //                             opacity: 0,
// //                             transition: 'opacity 0.2s',
// //                             color: 'text.secondary',
// //                             '&:hover': {
// //                               color: 'error.main'
// //                             }
// //                           }}
// //                         >
// //                           <DeleteOutlineIcon fontSize="small" />
// //                         </IconButton>
// //                       </Box>
// //                     ))
// //                   ) : (
// //                     <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
// //                       No {taskType.toLowerCase()} yet
// //                     </Typography>
// //                   )}
// //                 </Box>
// //               </Box>
// //             ))}
// //           </Box>
// //         </>
// //       ) : (
// //         <Box sx={{ 
// //           flex: 1, 
// //           display: 'flex', 
// //           alignItems: 'center', 
// //           justifyContent: 'center',
// //           flexDirection: 'column',
// //           gap: 2
// //         }}>
// //           <Typography variant="h6" color="text.secondary">
// //             No project selected
// //           </Typography>
// //           <Typography color="text.secondary">
// //             Create a new project or select an existing one to manage tasks
// //           </Typography>
// //         </Box>
// //       )}

// //       {/* New Project Dialog */}
// //       <Dialog 
// //         open={isNewProjectDialogOpen} 
// //         onClose={() => setIsNewProjectDialogOpen(false)}
// //         PaperProps={{
// //           sx: { borderRadius: '12px' }
// //         }}
// //       >
// //         <DialogTitle>Create New Project</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             fullWidth
// //             label="Project Name"
// //             value={newProjectName}
// //             onChange={(e) => setNewProjectName(e.target.value)}
// //             sx={{ mt: 1 }}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button 
// //             onClick={() => setIsNewProjectDialogOpen(false)}
// //             sx={{ color: 'text.secondary' }}
// //           >
// //             Cancel
// //           </Button>
// //           <Button 
// //             onClick={handleAddProject}
// //             variant="contained"
// //             sx={{
// //               bgcolor: '#8B5CF6',
// //               '&:hover': {
// //                 bgcolor: '#7C3AED'
// //               }
// //             }}
// //           >
// //             Create
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Box>
// //   );
// // }

// // export default ProjectsTasks;

// import { Box, Typography, Button, Select, MenuItem, TextField, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
// import { useState, useEffect } from 'react';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import AddIcon from '@mui/icons-material/Add';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import axios from 'axios';

// function ProjectsTasks() {
//   const [selectedTaskType, setSelectedTaskType] = useState('Weekly Tasks');
//   const [newTask, setNewTask] = useState('');
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(''); // Empty string for no selection
//   const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
//   const [newProjectName, setNewProjectName] = useState('');
//   const [projectTasks, setProjectTasks] = useState({});

//   const taskTypes = ['Daily Tasks', 'Weekly Tasks', 'Monthly Tasks', 'Long-term Goals'];
//   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

//   // Fetch projects on mount
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`${API_URL}/projects-tasks/projects`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setProjects(response.data.data);
//         const tasksObj = {};
//         response.data.data.forEach(project => {
//           tasksObj[project._id] = {
//             'Daily Tasks': [],
//             'Weekly Tasks': [],
//             'Monthly Tasks': [],
//             'Long-term Goals': []
//           };
//         });
//         setProjectTasks(tasksObj);
//       } catch (err) {
//         console.error('Error fetching projects:', err);
//       }
//     };
//     fetchProjects();
//   }, [API_URL]);

//   // Fetch tasks when a project is selected
//   useEffect(() => {
//     if (selectedProject) {
//       const fetchTasks = async () => {
//         try {
//           const token = localStorage.getItem('token');
//           const response = await axios.get(`${API_URL}/projects-tasks/tasks/${selectedProject}`, {
//             headers: { Authorization: `Bearer ${token}` }
//           });
//           const tasks = response.data.data.reduce((acc, task) => {
//             acc[task.type] = acc[task.type] || [];
//             acc[task.type].push({ id: task._id, text: task.text, completed: task.completed });
//             return acc;
//           }, {
//             'Daily Tasks': [],
//             'Weekly Tasks': [],
//             'Monthly Tasks': [],
//             'Long-term Goals': []
//           });
//           setProjectTasks(prev => ({ ...prev, [selectedProject]: tasks }));
//         } catch (err) {
//           console.error('Error fetching tasks:', err);
//         }
//       };
//       fetchTasks();
//     }
//   }, [selectedProject, API_URL]);

//   const handleAddProject = async () => {
//     if (newProjectName.trim()) {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.post(
//           `${API_URL}/projects-tasks/projects`,
//           { name: newProjectName.trim() },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         const newProject = response.data.data;
//         setProjects([...projects, newProject]);
//         setProjectTasks(prev => ({
//           ...prev,
//           [newProject._id]: {
//             'Daily Tasks': [],
//             'Weekly Tasks': [],
//             'Monthly Tasks': [],
//             'Long-term Goals': []
//           }
//         }));
//         setNewProjectName('');
//         setIsNewProjectDialogOpen(false);
//         setSelectedProject(newProject._id); // Auto-select new project
//       } catch (err) {
//         console.error('Error adding project:', err);
//       }
//     }
//   };

//   const handleAddTask = async () => {
//     if (newTask.trim() && selectedProject) {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.post(
//           `${API_URL}/projects-tasks/tasks`,
//           { projectId: selectedProject, text: newTask.trim(), type: selectedTaskType },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         const newTaskData = response.data.data;
//         setProjectTasks(prev => ({
//           ...prev,
//           [selectedProject]: {
//             ...prev[selectedProject],
//             [selectedTaskType]: [
//               ...prev[selectedProject][selectedTaskType],
//               { id: newTaskData._id, text: newTaskData.text, completed: newTaskData.completed }
//             ]
//           }
//         }));
//         setNewTask('');
//       } catch (err) {
//         console.error('Error adding task:', err);
//       }
//     }
//   };

//   const toggleTask = async (taskType, taskId) => {
//     if (selectedProject) {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.put(
//           `${API_URL}/projects-tasks/tasks/${taskId}`,
//           {},
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         const updatedTask = response.data.data;
//         setProjectTasks(prev => ({
//           ...prev,
//           [selectedProject]: {
//             ...prev[selectedProject],
//             [taskType]: prev[selectedProject][taskType].map(task =>
//               task.id === taskId ? { ...task, completed: updatedTask.completed } : task
//             )
//           }
//         }));
//       } catch (err) {
//         console.error('Error toggling task:', err);
//       }
//     }
//   };

//   const deleteTask = async (taskType, taskId, event) => {
//     event.stopPropagation();
//     if (selectedProject) {
//       try {
//         const token = localStorage.getItem('token');
//         await axios.delete(`${API_URL}/projects-tasks/tasks/${taskId}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setProjectTasks(prev => ({
//           ...prev,
//           [selectedProject]: {
//             ...prev[selectedProject],
//             [taskType]: prev[selectedProject][taskType].filter(task => task.id !== taskId)
//           }
//         }));
//       } catch (err) {
//         console.error('Error deleting task:', err);
//       }
//     }
//   };

//   const handleDeleteProject = async (projectId, event) => {
//     event.stopPropagation(); // Prevent dropdown from closing
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`${API_URL}/projects-tasks/projects/${projectId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setProjects(projects.filter(project => project._id !== projectId));
//       setProjectTasks(prev => {
//         const newTasks = { ...prev };
//         delete newTasks[projectId];
//         return newTasks;
//       });
//       if (selectedProject === projectId) {
//         setSelectedProject(''); // Reset to no selection
//       }
//     } catch (err) {
//       console.error('Error deleting project:', err);
//     }
//   };

//   return (
//     <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
//       {/* Header */}
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
//         <CalendarTodayIcon sx={{ color: '#8B5CF6' }} />
//         <Typography variant="h6" sx={{ fontWeight: 500, flex: 1 }}>
//           Projects & Tasks
//         </Typography>
//         <Button
//           variant="contained"
//           startIcon={<AddIcon />}
//           onClick={() => setIsNewProjectDialogOpen(true)}
//           sx={{
//             bgcolor: '#8B5CF6',
//             borderRadius: '8px',
//             '&:hover': {
//               bgcolor: '#7C3AED'
//             }
//           }}
//         >
//           New Project
//         </Button>
//       </Box>

//       <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
//         Track your goals and progress
//       </Typography>

//       {/* Project Dropdown */}
//       <Box sx={{ mb: 3 }}>
//         <Select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           displayEmpty
//           size="small"
//           IconComponent={KeyboardArrowDownIcon}
//           sx={{
//             width: '200px',
//             bgcolor: 'white',
//             border: '2px solid #8B5CF6',
//             borderRadius: '8px',
//             '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
//           }}
//           renderValue={(selected) => {
//             if (!selected) {
//               return <Typography color="text.secondary">Select a project</Typography>;
//             }
//             return projects.find(project => project._id === selected)?.name;
//           }}
//         >
//           {projects.map((project) => (
//             <MenuItem key={project._id} value={project._id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <Typography>{project.name}</Typography>
//               <IconButton
//                 size="small"
//                 onClick={(e) => handleDeleteProject(project._id, e)}
//                 sx={{
//                   color: 'text.secondary',
//                   '&:hover': {
//                     color: 'error.main'
//                   }
//                 }}
//               >
//                 <DeleteOutlineIcon fontSize="small" />
//               </IconButton>
//             </MenuItem>
//           ))}
//         </Select>
//       </Box>

//       {selectedProject ? (
//         <>
//           {/* Task Type Selector and Input */}
//           <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
//             <Select
//               value={selectedTaskType}
//               onChange={(e) => setSelectedTaskType(e.target.value)}
//               size="small"
//               IconComponent={KeyboardArrowDownIcon}
//               sx={{
//                 minWidth: 150,
//                 height: 40,
//                 bgcolor: 'white',
//                 border: '2px solid #8B5CF6',
//                 borderRadius: '8px',
//                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
//               }}
//             >
//               {taskTypes.map((type) => (
//                 <MenuItem key={type} value={type}>{type}</MenuItem>
//               ))}
//             </Select>
//             <TextField
//               fullWidth
//               size="small"
//               placeholder="Add a new task"
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//               onKeyPress={(e) => {
//                 if (e.key === 'Enter') {
//                   handleAddTask();
//                 }
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: '8px',
//                   border: '2px solid #8B5CF6',
//                   '& fieldset': { border: 'none' }
//                 }
//               }}
//             />
//             <Button
//               variant="contained"
//               onClick={handleAddTask}
//               sx={{
//                 bgcolor: '#8B5CF6',
//                 borderRadius: '8px',
//                 px: 4,
//                 '&:hover': {
//                   bgcolor: '#7C3AED'
//                 }
//               }}
//             >
//               Add
//             </Button>
//           </Box>

//           {/* Tasks Grid */}
//           <Box sx={{ 
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: 3,
//             flex: 1
//           }}>
//             {taskTypes.map((taskType) => (
//               <Box key={taskType}>
//                 <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
//                   {taskType}
//                 </Typography>
//                 <Box
//                   sx={{
//                     maxHeight: '300px',
//                     overflowY: 'auto',
//                     '&::-webkit-scrollbar': {
//                       width: '6px'
//                     },
//                     '&::-webkit-scrollbar-track': {
//                       background: '#f1f1f1',
//                       borderRadius: '4px'
//                     },
//                     '&::-webkit-scrollbar-thumb': {
//                       background: '#8B5CF6',
//                       borderRadius: '4px',
//                       '&:hover': {
//                         background: '#7C3AED'
//                       }
//                     }
//                   }}
//                 >
//                   {projectTasks[selectedProject]?.[taskType]?.length > 0 ? (
//                     projectTasks[selectedProject][taskType].map(task => (
//                       <Box 
//                         key={task.id}
//                         sx={{ 
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1,
//                           mb: 1,
//                           '&:hover .delete-icon': {
//                             opacity: 1
//                           }
//                         }}
//                       >
//                         <Box sx={{ 
//                           display: 'flex', 
//                           alignItems: 'center',
//                           gap: 1,
//                           flex: 1
//                         }}>
//                           <Checkbox
//                             checked={task.completed}
//                             onChange={() => toggleTask(taskType, task.id)}
//                             sx={{
//                               color: '#8B5CF6',
//                               '&.Mui-checked': {
//                                 color: '#8B5CF6',
//                               }
//                             }}
//                           />
//                           <Typography
//                             sx={{
//                               textDecoration: task.completed ? 'line-through' : 'none',
//                               color: task.completed ? 'text.secondary' : 'text.primary'
//                             }}
//                           >
//                             {task.text}
//                           </Typography>
//                         </Box>
//                         <IconButton
//                           size="small"
//                           onClick={(e) => deleteTask(taskType, task.id, e)}
//                           className="delete-icon"
//                           sx={{
//                             opacity: 0,
//                             transition: 'opacity 0.2s',
//                             color: 'text.secondary',
//                             '&:hover': {
//                               color: 'error.main'
//                             }
//                           }}
//                         >
//                           <DeleteOutlineIcon fontSize="small" />
//                         </IconButton>
//                       </Box>
//                     ))
//                   ) : (
//                     <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
//                       No {taskType.toLowerCase()} yet
//                     </Typography>
//                   )}
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </>
//       ) : (
//         <Box sx={{ 
//           flex: 1, 
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center',
//           flexDirection: 'column',
//           gap: 2
//         }}>
//           <Typography variant="h6" color="text.secondary">
//             No project selected
//           </Typography>
//           <Typography color="text.secondary">
//             Create a new project or select an existing one to manage tasks
//           </Typography>
//         </Box>
//       )}

//       {/* New Project Dialog */}
//       <Dialog 
//         open={isNewProjectDialogOpen} 
//         onClose={() => setIsNewProjectDialogOpen(false)}
//         PaperProps={{
//           sx: { borderRadius: '12px' }
//         }}
//       >
//         <DialogTitle>Create New Project</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             fullWidth
//             label="Project Name"
//             value={newProjectName}
//             onChange={(e) => setNewProjectName(e.target.value)}
//             sx={{ mt: 1 }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button 
//             onClick={() => setIsNewProjectDialogOpen(false)}
//             sx={{ color: 'text.secondary' }}
//           >
//             Cancel
//           </Button>
//           <Button 
//             onClick={handleAddProject}
//             variant="contained"
//             sx={{
//               bgcolor: '#8B5CF6',
//               '&:hover': {
//                 bgcolor: '#7C3AED'
//               }
//             }}
//           >
//             Create
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }

// export default ProjectsTasks;

import { Box, Typography, Button, Select, MenuItem, TextField, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';

function ProjectsTasks() {
  const [selectedTaskType, setSelectedTaskType] = useState('Weekly Tasks');
  const [newTask, setNewTask] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(''); // Empty string for no selection
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [projectTasks, setProjectTasks] = useState({});

  const taskTypes = ['Daily Tasks', 'Weekly Tasks', 'Monthly Tasks', 'Long-term Goals'];
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  // Fetch projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Fetching projects with token:', token ? 'Token present' : 'No token');
        const response = await axios.get(`${API_URL}/api/projects-tasks/projects`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Projects fetched:', response.data.data);
        setProjects(response.data.data);
        const tasksObj = {};
        response.data.data.forEach(project => {
          tasksObj[project._id] = {
            'Daily Tasks': [],
            'Weekly Tasks': [],
            'Monthly Tasks': [],
            'Long-term Goals': []
          };
        });
        setProjectTasks(tasksObj);
      } catch (err) {
        console.error('Error fetching projects:', err.response ? err.response.data : err.message);
      }
    };
    fetchProjects();
  }, [API_URL]);

  // Fetch tasks when a project is selected
  useEffect(() => {
    if (selectedProject) {
      const fetchTasks = async () => {
        try {
          const token = localStorage.getItem('token');
          console.log('Fetching tasks for project:', selectedProject);
          const response = await axios.get(`${API_URL}/api/projects-tasks/tasks/${selectedProject}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log('Tasks fetched:', response.data.data);
          const tasks = response.data.data.reduce((acc, task) => {
            acc[task.type] = acc[task.type] || [];
            acc[task.type].push({ id: task._id, text: task.text, completed: task.completed });
            return acc;
          }, {
            'Daily Tasks': [],
            'Weekly Tasks': [],
            'Monthly Tasks': [],
            'Long-term Goals': []
          });
          setProjectTasks(prev => ({ ...prev, [selectedProject]: tasks }));
        } catch (err) {
          console.error('Error fetching tasks:', err.response ? err.response.data : err.message);
        }
      };
      fetchTasks();
    }
  }, [selectedProject, API_URL]);

  const handleAddProject = async () => {
    if (newProjectName.trim()) {
      try {
        const token = localStorage.getItem('token');
        console.log('Adding project:', newProjectName);
        const response = await axios.post(
          `${API_URL}/api/projects-tasks/projects`,
          { name: newProjectName.trim() },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const newProject = response.data.data;
        console.log('New project added:', newProject);
        setProjects(prev => [...prev, newProject]);
        setProjectTasks(prev => ({
          ...prev,
          [newProject._id]: {
            'Daily Tasks': [],
            'Weekly Tasks': [],
            'Monthly Tasks': [],
            'Long-term Goals': []
          }
        }));
        setNewProjectName('');
        setIsNewProjectDialogOpen(false);
        setSelectedProject(newProject._id);
      } catch (err) {
        console.error('Error adding project:', err.response ? err.response.data : err.message);
      }
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim() && selectedProject) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `${API_URL}/api/projects-tasks/tasks`,
          { projectId: selectedProject, text: newTask.trim(), type: selectedTaskType },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const newTaskData = response.data.data;
        setProjectTasks(prev => ({
          ...prev,
          [selectedProject]: {
            ...prev[selectedProject],
            [selectedTaskType]: [
              ...prev[selectedProject][selectedTaskType],
              { id: newTaskData._id, text: newTaskData.text, completed: newTaskData.completed }
            ]
          }
        }));
        setNewTask('');
      } catch (err) {
        console.error('Error adding task:', err.response ? err.response.data : err.message);
      }
    }
  };

  const toggleTask = async (taskType, taskId) => {
    if (selectedProject) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.put(
          `${API_URL}/api/projects-tasks/tasks/${taskId}`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const updatedTask = response.data.data;
        setProjectTasks(prev => ({
          ...prev,
          [selectedProject]: {
            ...prev[selectedProject],
            [taskType]: prev[selectedProject][taskType].map(task =>
              task.id === taskId ? { ...task, completed: updatedTask.completed } : task
            )
          }
        }));
      } catch (err) {
        console.error('Error toggling task:', err.response ? err.response.data : err.message);
      }
    }
  };

  const deleteTask = async (taskType, taskId, event) => {
    event.stopPropagation();
    if (selectedProject) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${API_URL}/api/projects-tasks/tasks/${taskId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProjectTasks(prev => ({
          ...prev,
          [selectedProject]: {
            ...prev[selectedProject],
            [taskType]: prev[selectedProject][taskType].filter(task => task.id !== taskId)
          }
        }));
      } catch (err) {
        console.error('Error deleting task:', err.response ? err.response.data : err.message);
      }
    }
  };

  const handleDeleteProject = async (projectId) => {
    console.log('Delete button clicked for project:', projectId);
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found in localStorage');
      return;
    }
    try {
      console.log('Sending DELETE request to:', `${API_URL}/api/projects-tasks/projects/${projectId}`);
      const response = await axios.delete(`${API_URL}/api/projects-tasks/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Project deleted successfully:', response.data);
      setProjects(prev => {
        const updatedProjects = prev.filter(project => project._id !== projectId);
        console.log('Updated projects state:', updatedProjects);
        return updatedProjects;
      });
      setProjectTasks(prev => {
        const newTasks = { ...prev };
        delete newTasks[projectId];
        console.log('Updated projectTasks state:', newTasks);
        return newTasks;
      });
      if (selectedProject === projectId) {
        console.log('Deselecting project:', projectId);
        setSelectedProject('');
      }
    } catch (err) {
      console.error('Error deleting project:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <CalendarTodayIcon sx={{ color: '#8B5CF6' }} />
        <Typography variant="h6" sx={{ fontWeight: 500, flex: 1 }}>
          Projects & Tasks
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsNewProjectDialogOpen(true)}
          sx={{
            bgcolor: '#8B5CF6',
            borderRadius: '8px',
            '&:hover': {
              bgcolor: '#7C3AED'
            }
          }}
        >
          New Project
        </Button>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Track your goals and progress
      </Typography>

      {/* Project Dropdown */}
      <Box sx={{ mb: 3 }}>
        <Select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          displayEmpty
          size="small"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: '200px',
            bgcolor: 'white',
            border: '2px solid #8B5CF6',
            borderRadius: '8px',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
          }}
          renderValue={(selected) => {
            if (!selected) {
              return <Typography color="text.secondary">Select a project</Typography>;
            }
            return projects.find(project => project._id === selected)?.name;
          }}
        >
          {projects.map((project) => (
            <MenuItem key={project._id} value={project._id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>{project.name}</Typography>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteProject(project._id);
                }}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'error.main'
                  }
                }}
              >
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </MenuItem>
          ))}
        </Select>
      </Box>

      {selectedProject ? (
        <>
          {/* Task Type Selector and Input */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
            <Select
              value={selectedTaskType}
              onChange={(e) => setSelectedTaskType(e.target.value)}
              size="small"
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                minWidth: 150,
                height: 40,
                bgcolor: 'white',
                border: '2px solid #8B5CF6',
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
              }}
            >
              {taskTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
            <TextField
              fullWidth
              size="small"
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddTask();
                }
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  border: '2px solid #8B5CF6',
                  '& fieldset': { border: 'none' }
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddTask}
              sx={{
                bgcolor: '#8B5CF6',
                borderRadius: '8px',
                px: 4,
                '&:hover': {
                  bgcolor: '#7C3AED'
                }
              }}
            >
              Add
            </Button>
          </Box>

          {/* Tasks Grid */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 3,
            flex: 1
          }}>
            {taskTypes.map((taskType) => (
              <Box key={taskType}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                  {taskType}
                </Typography>
                <Box
                  sx={{
                    maxHeight: '300px',
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
                  {projectTasks[selectedProject]?.[taskType]?.length > 0 ? (
                    projectTasks[selectedProject][taskType].map(task => (
                      <Box 
                        key={task.id}
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                          '&:hover .delete-icon': {
                            opacity: 1
                          }
                        }}
                      >
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 1,
                          flex: 1
                        }}>
                          <Checkbox
                            checked={task.completed}
                            onChange={() => toggleTask(taskType, task.id)}
                            sx={{
                              color: '#8B5CF6',
                              '&.Mui-checked': {
                                color: '#8B5CF6',
                              }
                            }}
                          />
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
                          onClick={(e) => deleteTask(taskType, task.id, e)}
                          className="delete-icon"
                          sx={{
                            opacity: 0,
                            transition: 'opacity 0.2s',
                            color: 'text.secondary',
                            '&:hover': {
                              color: 'error.main'
                            }
                          }}
                        >
                          <DeleteOutlineIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ))
                  ) : (
                    <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      No {taskType.toLowerCase()} yet
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography variant="h6" color="text.secondary">
            No project selected
          </Typography>
          <Typography color="text.secondary">
            Create a new project or select an existing one to manage tasks
          </Typography>
        </Box>
      )}

      {/* New Project Dialog */}
      <Dialog 
        open={isNewProjectDialogOpen} 
        onClose={() => setIsNewProjectDialogOpen(false)}
        PaperProps={{
          sx: { borderRadius: '12px' }
        }}
      >
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Project Name"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setIsNewProjectDialogOpen(false)}
            sx={{ color: 'text.secondary' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleAddProject}
            variant="contained"
            sx={{
              bgcolor: '#8B5CF6',
              '&:hover': {
                bgcolor: '#7C3AED'
              }
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ProjectsTasks;