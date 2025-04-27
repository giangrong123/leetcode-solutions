/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
  let n = nums.length;
  let count = 0;
  for (let i = 0; i <= n - 3; i++) { 
    if (nums[i] + nums[i + 2] === nums[i + 1] / 2) {
      count++;
    }
  }
  return count;
};
