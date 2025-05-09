/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const n = grid.length;
  let maxRow = new Array(n).fill(0);
  let maxCol = new Array(n).fill(0);
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      maxRow[i] = Math.max(maxRow[i], grid[i][j]); // Skyline từ trái/phải
      maxCol[j] = Math.max(maxCol[j], grid[i][j]); // Skyline từ trên/dưới
    }
  }

  let total = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      const maxAllowed = Math.min(maxRow[i], maxCol[j]);
      total += maxAllowed - grid[i][j];
    }
  }
  return total;
};
