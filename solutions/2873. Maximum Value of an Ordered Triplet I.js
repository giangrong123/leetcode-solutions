/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  let n = nums.length;
  let maxValue = 0;
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      for(let k = j + 1; k < n; k++) {
        let value = (nums[i] - nums[j]) * nums[k];
        maxValue = Math.max(maxValue, value);
      }
    }
  }
  return maxValue;
};
