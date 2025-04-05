/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let sum = 0;
  function backtrack(i, currXOR) {
    if(i === nums.length) {
      sum += currXOR;
      return;
    }
    backtrack(i + 1, currXOR);
    backtrack(i + 1, currXOR ^ nums[i]);
  }
  backtrack(0,0);
  return sum;
};
