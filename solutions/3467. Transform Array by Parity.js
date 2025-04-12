/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      zeroCount++;
    }
  }

  // Ghi đè mảng: đầu là 0, còn lại là 1
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i < zeroCount ? 0 : 1;
  }

  return nums;
};
