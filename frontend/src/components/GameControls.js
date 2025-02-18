import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const GameControls = ({ startGame, gameStarted, generateRandomNumber, winner, randomNumber }) => (
  <Box mt={4}>
    {!winner && !gameStarted && (
      <>
        <Typography>Please fill both grids and click below:</Typography>
        <Button variant="contained" color="primary" onClick={startGame}>
          Start Game
        </Button>
      </>
    )}
    {gameStarted && (
      <Button variant="contained" color="secondary" onClick={generateRandomNumber} sx={{ ml: 2 }}>
        Generate Number
      </Button>
    )}
    {winner && (
      <Box mt={3}>
        <Typography variant="h5" color="success.main">
          Winner: {winner}
        </Typography>
        <Button variant="contained" color="error" onClick={() => window.location.reload()} sx={{ mt: 2 }}>
          End Game
        </Button>
      </Box>
    )}
    {randomNumber && !winner && (
      <Typography variant="h6" mt={3}>
        Generated Number: {randomNumber}
      </Typography>
    )}
  </Box>
);

export default GameControls;
