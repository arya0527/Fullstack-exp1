import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Box,
  Grid,
  Paper,
  Rating,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  LinearProgress,
  Alert,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Share,
  Settings,
  Dashboard,
  People,
  Code,
  Palette,
  Speed,
  Security,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [liked, setLiked] = useState([false, false, false, false, false, false]);
  const [ratings, setRatings] = useState([0, 0, 0, 0, 0, 0]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [darkMode, setDarkMode] = useState(false);

  const handleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const handleRating = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setOpenDialog(false);
  };

  const cardData = [
    {
      title: 'Material Design',
      description: 'Follow Google\'s Material Design principles for beautiful UIs.',
      icon: <Palette />,
      color: '#ff6b6b',
    },
    {
      title: 'Responsive Components',
      description: 'Pre-built components that work seamlessly on all devices.',
      icon: <Dashboard />,
      color: '#4ecdc4',
    },
    {
      title: 'Easy Integration',
      description: 'Simple to integrate and customize for your React applications.',
      icon: <Code />,
      color: '#95e1d3',
    },
    {
      title: 'Fast Performance',
      description: 'Optimized components for lightning-fast user experiences.',
      icon: <Speed />,
      color: '#f38181',
    },
    {
      title: 'Team Collaboration',
      description: 'Perfect for teams building scalable applications together.',
      icon: <People />,
      color: '#aa96da',
    },
    {
      title: 'Secure & Reliable',
      description: 'Built with security and reliability at its core.',
      icon: <Security />,
      color: '#fcbad3',
    },
  ];

  const features = [
    'Customizable Theme System',
    'Accessible Components',
    'Icon Library Included',
    'TypeScript Support',
    'Responsive Layouts',
    'Dark Mode Support',
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* App Bar */}
        <AppBar position="sticky" elevation={4}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
              🎨 Material UI Design
            </Typography>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />}
              label="Dark"
            />
            <Button color="inherit" startIcon={<Settings />}>
              Settings
            </Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Welcome to Material UI
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              A React component library for building beautiful user interfaces with Material Design
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              size="large"
              sx={{ mr: 2, color: '#667eea', fontWeight: 600 }}
              onClick={() => setOpenDialog(true)}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ fontWeight: 600 }}
            >
              Learn More
            </Button>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Cards Section */}
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
            Key Features
          </Typography>

          <Grid container spacing={3} sx={{ mb: 8 }}>
            {cardData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ fontSize: 48, mb: 2, color: item.color }}>
                      {item.icon}
                    </Box>
                    <Typography gutterBottom variant="h6" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleLike(index)}
                      startIcon={liked[index] ? <Favorite sx={{ color: '#ff1744' }} /> : <FavoriteBorder />}
                    >
                      {liked[index] ? 'Liked' : 'Like'}
                    </Button>
                    <Button size="small" startIcon={<Share />}>
                      Share
                    </Button>
                  </CardActions>
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Rating
                      value={ratings[index]}
                      onChange={(e, value) => handleRating(index, value)}
                    />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Features List */}
          <Paper elevation={3} sx={{ mb: 6 }}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                ✨ Why Choose Material UI?
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Chip label={index + 1} color="primary" variant="outlined" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>

          {/* Alerts Section */}
          <Typography variant="h5" sx={{ mb: 3 }}>
            📢 Important Information
          </Typography>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            <Grid item xs={12}>
              <Alert severity="info">
                Material UI v5+ is the latest version with improved performance and features.
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert severity="success">
                Easy to customize and extend for your specific needs!
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert severity="warning">
                Make sure to check the documentation for advanced usage patterns.
              </Alert>
            </Grid>
          </Grid>

          {/* Progress Section */}
          <Paper elevation={2} sx={{ p: 3, mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              📊 Installation Progress
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Setup Completion
              </Typography>
              <LinearProgress variant="determinate" value={100} />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Component Implementation
              </Typography>
              <LinearProgress variant="determinate" value={85} color="success" />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Documentation
              </Typography>
              <LinearProgress variant="determinate" value={75} color="warning" />
            </Box>
          </Paper>
        </Container>

        {/* Contact Form Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: 700 }}>Get Started with Material UI</DialogTitle>
          <DialogContent sx={{ pt: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={4}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            background: '#1a1a1a',
            color: 'white',
            py: 4,
            textAlign: 'center',
            mt: 6,
          }}
        >
          <Container>
            <Typography variant="body1" sx={{ mb: 1 }}>
              © 2026 Material UI Design. Built with React and Material-UI.
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              Demonstrating Material Design principles in a single-page application
            </Typography>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
