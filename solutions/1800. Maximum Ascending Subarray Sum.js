/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let n = nums.length;
  let maxSum = nums[0];
  let curSum = nums[0];
  for(let i = 1; i < n; i++) {
    if(nums[i] > nums[i - 1]) {
      curSum += nums[i];
    }
    else {
      curSum = nums[i];
    }
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};
