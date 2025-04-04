/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let i = 0;
  let j = 1;
  let n = nums.length;
  while(i < n && j < n) {
    if(nums[i] % 2 === 0) {
      i += 2;
    } else if(nums[j] % 2 === 1) {
      j += 2;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 2;
      j += 2;
    }
  }
  return nums;
};
