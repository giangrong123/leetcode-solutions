/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  const map = {
    "++X": 1,
    "X++": 1,
    "--X": -1,
    "X--": -1
  };
  
  let X = 0;
  for (let op of operations) {
    X += map[op];
  }
  
  return X; 
};
