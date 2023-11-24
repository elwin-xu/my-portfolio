import React from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      textAlign="center"
      sx={{
        backgroundColor: '#f0f0f0', // Example background color
        color: '#333', // Text color
      }}
    >
      <Box p={3} maxWidth={800}>
        <Typography variant="h3" gutterBottom>
          Hi. I'm Elwin Xu.
        </Typography>
        <Typography variant="h5">
          A Software Engineer.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
