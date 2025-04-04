/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  if(max - min <= 2 * k) {
    return 0;
  } else {
    return max - min - 2 * k;
  }   
};
