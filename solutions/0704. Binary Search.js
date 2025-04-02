/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let n = nums.length;
  let L = 0;
  let R = n - 1;
  while(L <= R) {
    let mid = Math.floor((L + R) / 2);
    if(target === nums[mid]) {
      return mid;
    } else if(target < nums[mid]) {
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return -1;
};
