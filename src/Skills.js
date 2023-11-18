import React from 'react';
import { Chip, Container, Typography } from '@mui/material';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <Container>
      <Typography variant="h2">My Skills</Typography>
      {skills.map((skill, index) => (
        <Chip label={skill} key={index} />
      ))}
    </Container>
  );
}

export default Skills;
