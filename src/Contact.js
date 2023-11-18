import React from 'react';
import { Container, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Container>
      <TextField label="Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </Container>
  );
}

export default Contact;
