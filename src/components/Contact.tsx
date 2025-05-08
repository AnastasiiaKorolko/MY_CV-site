import { Typography, Box, Link, Paper, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Contact() {
  const contactItems = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'anastasiia.korolko.dev',
      link: 'mailto:anastasiia.korolko.dev@gmail.com'
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: 'github.AnastasiiaKorolko',
      link: 'https://bit.ly/4jHMFZL'
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: 'linkedin.anastasia-korolko',
      link: 'https://www.linkedin.com/in/anastasia-korolko-299a0b353/'
    },
    {
      icon: <TelegramIcon />,
      label: 'Telegram',
      value: '@AnastasiiaKorolko',
      link: 'https://t.me/AnastasiiaKorolko'
    }
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb:4}}>
        My contacts
      </Typography>
      
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 6,
          borderRadius: 2,
          bgcolor: 'rgba(200, 200, 200, 0.08)',
          boxShadow: '0 4px 12px rgba(103, 58, 183, 0.07)'
        }}
      >
        <Typography variant="h6" sx={{ mb: 6 }}>
        If an opportunity for collaboration arises at your company, I would be genuinely happy to connect.
        </Typography>
        
        <Grid container spacing={2}>
          {contactItems.map((item) => (
            <Grid item xs={12} sm={6} key={item.label}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 2
                  }
                }}
              >
                <Box sx={{ 
                  mr: 2, 
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {item.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    color="inherit"
                    sx={{ fontWeight: 'medium' }}
                  >
                    {item.value}
                  </Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
      
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ mb:2}}>
        My Social Networks
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {contactItems.map((item) => (
            <IconButton
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener"
              color="primary"
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'common.white'
                }
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}