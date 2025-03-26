/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  let multi1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  let multi2 = nums[0] * nums[1] * nums[n - 1];
  return Math.max(multi1, multi2);
};
