import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Container } from '@mui/material';
import exampleImage1 from './images/IMG_0149.JPG';
import exampleImage2 from './images/IMG_0117.JPG';

function Home() {
  // Example array of projects, replace with your actual projects
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: exampleImage1,
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: exampleImage2,
    },
    // ... add more projects as needed
  ];

  return (
    <Container 
      sx={{
        backgroundColor: '#f1fee0', // Example background color
        color: '#333', // Text color
        minHeight: '100vh',
      }}
      maxWidth = {false}
    >
      <Box p={3} maxWidth={800} mx="auto" py={15} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Hi. I'm Elwin Xu.
        </Typography>
        <Typography variant="h5" mb={5}>
          A Software Engineer.
        </Typography>
      </Box>

      {/* Project Showcase Section */}
      <Grid container spacing={8} pb={10} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{borderRadius:'48px'}}>
                <CardMedia
                  component="img"
                  height="280"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
}

export default Home;
