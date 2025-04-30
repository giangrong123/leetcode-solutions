/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  let inc = 1;
  let dec = 1;
  let res = 1;
  let n = nums.length;
  for(let i = 0; i < n - 1; i++) {
    if(nums[i] < nums[i + 1]) {
      inc++;
      dec = 1;
    } else if(nums[i] > nums[i + 1]) {
      dec++;
      inc = 1;
    } else {
      inc = 1;
      dec = 1;
    }
    res = Math.max(res, inc, dec);
  }
  return res;
};
