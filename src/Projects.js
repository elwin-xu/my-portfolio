import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function Projects() {
  return (
    <Grid container spacing={2} style={{ marginTop: '64px' }}>
      {/* Example Project */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Project 1</Typography>
            <Typography variant="body2">
              Description of Project 1...
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more projects in a similar manner */}
    </Grid>
  );
}

export default Projects;
