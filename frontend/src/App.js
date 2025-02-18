import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
import Grid from "@mui/material/Grid"
import Winner from './components/Winner';

function App() {
  const [grid1, setGrid1] = useState(Array(3).fill(0).map(() => Array(3).fill('')));
  const [grid2, setGrid2] = useState(Array(3).fill(0).map(() => Array(3).fill('')));
  const [gameStarted, setGameStarted] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [winner, setWinner] = useState('');
  const [nextNumber, setNextNumber] = useState(1);

  const isDuplicateInGrid = (grid, value) => grid.some(row => row.includes(value));
  
  const isGridFullyFilled = (grid) => grid.every(row => row.every(cell => cell !== ''));

  const handleCellClick = (grid, setGrid) => (row, col) => {
    if (grid[row][col] === '' && !isDuplicateInGrid(grid, nextNumber)) {
      const newGrid = grid.map((r, rowIndex) =>
        r.map((c, colIndex) => (rowIndex === row && colIndex === col ? nextNumber : c))
      );
      setGrid(newGrid);
      setNextNumber(prev => (prev < 9 ? prev + 1 : 1));
    } else {
      alert('This number is already in the grid!');
    }
  };

  const renderGrid = (grid, handleCellClick) => (
    <Grid container spacing={1} justifyContent="center">
      {grid.map((row, rowIndex) => (
        <Grid container key={rowIndex} justifyContent="center">
          {row.map((cell, colIndex) => (
            <Box key={colIndex} p={1}>
              <TextField
                type="text"
                inputMode="numeric"
                pattern="[1-9]*"
                value={cell !== null ? cell : ''}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                variant="outlined"
                size="small"
                sx={{
                  width: { xs: 40, sm: 60 },
                  height: { xs: 40, sm: 60 },
                  textAlign: 'center',
                  fontSize: { xs: '1rem', sm: '1.5rem' },
                }}
                InputProps={{ readOnly: true }}
              />
            </Box>
          ))}
        </Grid>
      ))}
    </Grid>
  );

  const startGame = async () => {
    if (isGridFullyFilled(grid1) && isGridFullyFilled(grid2)) {
      try {
        const response = await axios.post('http://localhost:8000/api/start', { grid1, grid2 });
        if (response.data) {
          setGameStarted(true);
        }
      } catch (error) {
        console.error('Error starting game:', error);
      }
    } else {
      alert('Please fill all cells in both grids before starting the game.');
    }
  };

  const generateRandomNumber = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/random-number');
      setRandomNumber(response.data.randomNumber);
      setGrid1(response.data.updatedGrid1);
      setGrid2(response.data.updatedGrid2);
      if (response.data.winner) {
        setWinner(response.data.winner);
        setGameStarted(false);
      }
    } catch (error) {
      console.error('Error generating number:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>El Lotteria Game</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Player 1</Typography>
          {renderGrid(grid1, handleCellClick(grid1, setGrid1))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Player 2</Typography>
          {renderGrid(grid2, handleCellClick(grid2, setGrid2))}
        </Grid>
      </Grid>
      <Box mt={4}>
        {!winner && !gameStarted && (
          <>
            <Typography>Please fill both grids and click Start Game:</Typography>
            <Button variant="contained" color="primary" onClick={startGame} sx={{ mt: 2 }}>
              Start Game
            </Button>
          </>
        )}
        {gameStarted && (
          <Button variant="contained" color="secondary" onClick={generateRandomNumber} sx={{ mt: 2 }}>
            Random Number
          </Button>
        )}
        {winner && <Winner winner={winner} />}
      </Box>
      {randomNumber && !winner && <Typography variant="h6" mt={3}>Random Number: {randomNumber}</Typography>}
    </Container>
  );
}

export default App;