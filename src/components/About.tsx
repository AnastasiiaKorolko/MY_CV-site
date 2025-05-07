import { Typography, Box, Paper, Chip, Avatar, Grid, TextField } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from "react";
const skills = [
  "React", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "REST API", "React Query", "Material UI", "Git", "Responsive Design"
];

const education = [
  {
    title: "Mateacademy",
    period: "2023 - 2024",
    description: "Full Stack course"
  },
  {
    title: "HILLEL IT school",
    period: "2018 - 2018",
    description: "UI/UX designer"
  },
  {
    title: "Kyiv National University Tehnologies and Design",
    period: "2010 – 2014",
    description: "Master's Degree in Fashion Design and Engineering"
  },
];

export default function About() {
  const [search, setSearch] = useState('');

  
    const filter = skills.filter((skill) => 
     skill.toLowerCase().includes(search.toLowerCase())
    )
  
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 4}}>
        About me
      </Typography>
      
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: 2, 
          bgcolor: 'rgba(200, 200, 200, 0.08)',
          
        }}
      >
        
        <Typography variant="body1" >
        Driven front-end developer with a strong foundation in JavaScript,
React, Redux, TypeScript, SCSS, HTML, CSS, Git and basic
backend knowledge (Node.js, Express).
        I have a passion for creating user-friendly and aesthetic interfaces. 
        I constantly improve my skills and explore new technologies.
        </Typography>
      </Paper>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" fontWeight="medium" gutterBottom >
        Education and Training
        </Typography>
        
        <Grid container spacing={2}>
          {education.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={1}
                sx={{ 
                  p: 2, 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                  <SchoolIcon sx={{ mr: 2, color: 'primary.main', mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {item.title}
                    </Typography>
                    {item.description && (
                      <Typography variant="body2" sx={{ mt: 0.5 }}>
                        {item.description}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {item.period}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Box>
        
        <Typography variant="h6" fontWeight="medium" gutterBottom>
        Technical Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {filter.map((skill) => (
            <Chip 
              key={skill}
              label={skill}
              variant="outlined"
              color="primary"
              sx={{ 
                borderRadius: '16px',
                fontWeight: 'medium',
                color: 'text.primary',
              }}
            />
          ))}
        </Box>
        <Box sx={{ mb: 6}}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            label="Search skills"
            variant="outlined"
            fullWidth
          />
        </Box>
      
      </Box>
    </Box>
  );
}