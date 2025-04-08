/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let count = 0;
  while (hasDuplicate(nums)) {
    nums.splice(0, 3);
    count++;
  }
  return count;

  function hasDuplicate(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) return true;
      }
    }
    return false;
  }
};
