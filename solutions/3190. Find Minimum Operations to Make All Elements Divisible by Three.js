/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let steps = 0;
  for (let num of nums) {
    if (num % 3 !== 0) steps += 1; // Nếu không chia hết cho 3 thì tăng steps
  }
  return steps;
};
