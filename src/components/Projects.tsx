import { Box, Card, CardContent, Typography, Button, Grid, Divider } from '@mui/material';

const projects = [
  {
    title: 'E-commerce',
    description: 'A dynamic e-commerce web application for browsing and purchasing mobile devices and accessories.',
    tech: ['React', 'CSS'],
    demo: 'https://AnastasiiaKorolko.github.io/phone-catalog_react/',
    code: 'https://github.com/AnastasiiaKorolko/phone-catalog_react.git',
  },
  {
    title: 'Bakery Landing Page',
    description: 'A responsive landing page for a bakery business showcasing their products and services.',
    tech: ['HTML', 'CSS'],
    demo: 'https://anastasiiakorolko.github.io/react_people-table-advanced/',
    code: 'https://github.com/AnastasiiaKorolko/creativeBakery-landing.git',
  },
  {
    title: 'People-table',
    description: 'A responsive landing page showcasing people information with smooth animations.',
    tech: ['React', 'useParams'],
    demo: 'DEMO LINK',
    code: 'https://github.com/AnastasiiaKorolko/creativeBakery-landing.git',
  },
];

export default function Projects() {
  return (
    <Box mb={6} sx={{ width: '100%' }}>
      <Typography variant="h5" mb={6} gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="flex-start" direction="row" wrap="nowrap" sx={{ overflowX: 'auto', pb: 2 }}>
        {projects.map((project) => (
          <Grid item xs="auto" sx={{ minWidth: 280, maxWidth: 340 }} key={project.title}>
            <Card
              sx={(theme) => ({
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 215, 0, 0.3)',

                borderRadius: '16px',
                
                boxShadow:
                  theme.palette.mode === 'dark'
                    ? '0 6px 16px rgba(0, 0, 0, 0.9)'
                    : '0 6px 12px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 12px 24px rgba(255, 215, 0, 0.4)'
                      : '0 12px 20px rgba(103, 58, 183, 0.15)',
                },
              })}
            >
              <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
                {/* <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 12, 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, rgba(103, 58, 183, 0.8), rgba(92, 107, 192, 0.2))',
                    opacity: 0.7
                  }} 
                /> */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Divider sx={{ my: 1.5 }} />
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <b>Технології:</b> {project.tech.join(', ')}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1,
                  justifyContent: 'flex-start',
                  mt: 'auto' 
                }}>
                  <Button 
                    size="small" 
                    href={project.demo} 
                    target="_blank" 
                    variant="contained" 
                    color="primary"
                  >
                    Demo
                  </Button>
                  {project.code && (
                    <Button 
                      size="small" 
                      href={project.code} 
                      target="_blank" 
                      variant="outlined" 
                      color="secondary"
                    >
                      Code
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}