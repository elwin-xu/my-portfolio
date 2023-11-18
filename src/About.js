import React from 'react';
import { Typography, Container } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>About Me</Typography>
      <Typography variant="body1">
        Here is some information about me...
      </Typography>
    </Container>
  );
}

export default About;
