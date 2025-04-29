/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
  let n = nums.length;
  if(n === 1) return true;
  for(let i = 0; i < n; i++) {
    if(nums[i] % 2 === nums[i + 1] % 2) {
      return false;
    }
  }
  return true;
};
