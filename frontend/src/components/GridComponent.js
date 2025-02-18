import React from 'react';
import { Grid, Box, TextField } from '@mui/material';

const GridComponent = ({ grid, handleInput }) => (
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
              onChange={(e) => handleInput(rowIndex, colIndex, e.target.value)}
              variant="outlined"
              size="small"
              sx={{ width: 60, height: 60, textAlign: 'center', fontSize: '1.5rem' }}
            />
          </Box>
        ))}
      </Grid>
    ))}
  </Grid>
);

export default GridComponent;
