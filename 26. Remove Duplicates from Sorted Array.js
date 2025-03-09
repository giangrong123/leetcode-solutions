/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;
  let n = nums.length;
  if (n === 0) return;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
//Time complexity: O(n)
//Space complexity: O(1)
