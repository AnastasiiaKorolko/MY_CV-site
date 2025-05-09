import { Box, Card, CardContent, Typography, Button, Grid, Divider } from '@mui/material';

const projects = [
  {
    id: '1',
    title: 'TechSavvy Store',
    description: 'TechSavvy Store is a dynamic and responsive web application for browsing and purchasing mobile devices, tablets, and accessories. It offers a seamless shopping experience with features like adding products to the cart, marking favorites, and viewing detailed product information, including multiple color options. Users can easily explore various devices and accessories, with an intuitive interface and smooth navigation.',
    tech: ['React', 'Redux', 'TypeScript', 'SCSS', 'REST API'],
    demo: 'https://AnastasiiaKorolko.github.io/phone-catalog_react/',
    code: 'https://github.com/AnastasiiaKorolko/phone-catalog_react.git',
  },
  {
    id: '2',
    title: 'Bakery Landing Page',
    description: 'A responsive landing page for a bakery business showcasing their delicious products and services, including a variety of donuts, cakes, and burgers. The site provides an easy-to-navigate interface with vibrant images of baked goods, offering a visual feast for customers. The design incorporates modern web technologies to ensure a smooth user experience across devices.',
    tech: ['HTML', 'JavaScript', 'Flexbox', 'Grid', 'SCSS'],
    demo: 'https://anastasiiakorolko.github.io/creativeBakery-landing/',
    code: 'https://github.com/AnastasiiaKorolko/creativeBakery-landing.git',
  },
  {
    id: '3',
    title: 'SmartAddons',
    description: 'A modern landing page dedicated to device accessories. Explore a wide selection of high-quality headphones, charging stations, and more. Designed for comfort, style, and functionality.',
    tech: ['HTML', 'JavaScript', 'Flexbox', 'Grid', 'SCSS'],
    demo: 'https://anastasiiakorolko.github.io/accessories-landing/',
    code: 'https://github.com/AnastasiiaKorolko/accessories-landing.git',
  },
  {
    id: '4',
    title: 'People Table',
    description: 'A React-based application for efficiently managing and organizing your contacts. Easily view, sort, and filter a dynamic list of people with an intuitive and user-friendly interface. Perfect for keeping your contacts structured and accessible.',
    tech: ['React', 'TypeScript', 'React Router', ],
    demo: 'https://anastasiiakorolko.github.io/react_people-table-advanced/',
    code: '',
  },
  
];

export default function Projects() {
  return (
    <Box mb={6} sx={{ width: '100%' }}>
      <Typography variant="h5" mb={4} gutterBottom>
        Projects
      </Typography>
      <Grid 
        container spacing={3} 
        justifyContent="flex-start" 
        direction={{ xs: 'column', sm: 'row' }} 
        wrap={{ xs: 'wrap', sm: 'nowrap' }} 
        sx={{ 
          overflowX: { xs: 'visible', sm: 'auto'},
           pb: 2 
        }}
      >
        {projects.map((project) => (
          <Grid 
            item xs="auto" 
            sx={{ minWidth: 280, maxWidth: 340 }} 
            key={project.title}>
            <Card
              sx={(theme) => ({
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
              <CardContent sx={{ 
                flexGrow: 1, 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column', }}>
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 12, 
                    width: 30, 
                    height: 30, 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, rgba(103, 58, 183, 0.8), rgba(92, 107, 192, 0.2))',
                    opacity: 0.7
                  }} 
                  >
                  {project.id}
                  </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 1, pt: 3}}>
                  {project.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Divider sx={{ my: 1.5 }} />
                <Typography 
                  variant="body2"
                  sx={{ mb: 4, marginTop: 'auto' }}
                >
                   <Typography component="b" sx={{ fontSize: '0.9rem' }}>
    Technologies:
  </Typography>  {project.tech.join(', ')}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1,
                  justifyContent: 'flex-start',
                  P: 2,
                  marginTop: 'auto' 
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