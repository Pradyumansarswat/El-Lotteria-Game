import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Confetti from 'react-confetti';

const Winner = ({ winner }) => (
  <Box mt={3} sx={{ textAlign: 'center' }}>
    <Confetti />
    <Typography variant="h5" color="success.main" sx={{ fontWeight: 'bold' }}>
      Winner: {winner}
    </Typography>
    <Button variant="contained" color="error" onClick={() => window.location.reload()} sx={{ mt: 2 }}>
      End Game
    </Button>
  </Box>
);

export default Winner;