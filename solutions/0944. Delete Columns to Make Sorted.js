/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let count = 0;
  let numRows = strs.length;
  let numCols = strs[0].length;

  for (let col = 0; col < numCols; col++) {
    for (let row = 1; row < numRows; row++) {
      if (strs[row][col] < strs[row - 1][col]) {
        count++;
        break; // Không cần kiểm tra tiếp cột này
      }
    }
  }

  return count;
};
