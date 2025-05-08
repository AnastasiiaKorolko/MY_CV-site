import { CssBaseline, ThemeProvider, Container, IconButton, Tabs, Tab, Box, Paper, Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import { lightTheme, darkTheme } from './theme';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const theme = darkMode ? lightTheme : darkTheme;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
          sx={{ 
            display: 'flex', 
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            bgcolor: 'background.paper',
            px: 2,
            py: 1,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)', 
            mb: 2, }}>
          <Box
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            borderRadius: '20px',
            bgcolor: 'background.paper',
            px: 2,
            py: 1,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)', 
            mt: 2,
            mb: 2,
            mr: 2, }}>
          <Avatar 
            alt="Korolko Anastasia" 
            src="./4.png" 
            sx={{
              width: 60,
              height: 60,
              '& img': {
                objectFit: 'cover',
                objectPosition: 'top',
              },
            }}
            
          />
          <Box>
          <Typography variant='body1'>Hello, I`m Anastasia!</Typography>
          <Typography variant='body2' color='text.secondary'>
      Frontend Developer with focus on React
    </Typography>
          </Box>
          </Box>
          {/* <Box 
          sx={{ 
            mt: 3, 
            p: 2, 
            borderRadius: 2, 
            textAlign: 'center',
            bgcolor: 'background.paper',
            boxShadow: '0 4px 12px rgba(218, 165, 32, 1))',
            borderTop: '3px solid rgba(218, 165, 32, 0.09)',
            color: 'text.secondary'
          }}
        >
          <i>Побажання на день: Нехай кожен рядок коду наближає вас до успіху!</i>
        </Box> */}
          <IconButton 
            onClick={() => setDarkMode(!darkMode)}
            color="primary"
            sx={{ 
              boxShadow: 1,
              borderRadius: '50%',
              bgcolor: 'background.paper'
            }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      <Container 
        maxWidth="lg" 
        sx={{ 
          pt: 2, 
          pb: 5, 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
      
        
        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: 3, 
            overflow: 'hidden',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            indicatorColor="primary" 
            textColor="primary"
            variant="fullWidth"
            sx={{ 
              borderBottom: 1, 
              borderColor: 'divider',
              bgcolor: theme.palette.background.primary,
              '& .MuiTab-root': {
                py: 1.5,
                fontWeight: 500,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  bgcolor: 'rgba(103, 58, 183, 0.04)'
                }
              },
              '& .Mui-selected': {
                fontWeight: 600,
                color: `${theme.palette.primary.main} !important`
              }
            }}
          >
            <Tab label="About" sx={{ fontWeight: 'medium' }} />
            <Tab label="Projects" sx={{ fontWeight: 'medium' }} />
            <Tab label="Contact" sx={{ fontWeight: 'medium' }} />
          </Tabs>

          <Box sx={{ p: 3, flexGrow: 1, maxWidth: '100%', overflow: 'hidden' }}>
            {activeTab === 0 && <About />}
            {activeTab === 1 && <Projects />}
            {activeTab === 2 && <Contact />}
          </Box>
        </Paper>
      
      </Container>
    </ThemeProvider>
  );
}