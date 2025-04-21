/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  let minSum = 0;
  let maxSum = 0;
  let currentSum = 0;
  for(let diff of differences) {
    currentSum += diff;
    minSum = Math.min(currentSum, minSum);
    maxSum = Math.max(currentSum, maxSum);
    if(maxSum - minSum > upper - lower) {
      return 0;
    }
  }
  return upper - lower - (maxSum - minSum) + 1;
};
