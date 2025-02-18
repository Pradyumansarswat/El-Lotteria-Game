export const isDuplicateInGrid = (grid, value) => {
    for (let row of grid) {
      if (row.includes(value)) return true;
    }
    return false;
  };
  
  export const handleInput = (grid, setGrid) => (row, col, value) => {
    if ((value >= 1 && value <= 9) || value === '') {
      if (!isDuplicateInGrid(grid, value)) {
        const newGrid = grid.map((r, rowIndex) =>
          r.map((c, colIndex) => (rowIndex === row && colIndex === col ? value : c))
        );
        setGrid(newGrid);
      } else {
        alert('This number is already in the grid!');
      }
    }
  };
  