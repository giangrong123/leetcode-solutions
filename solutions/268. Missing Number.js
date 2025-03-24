/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let total = 0;
  for(num of nums) {
    total += num;
  }
  return sum - total;
};
