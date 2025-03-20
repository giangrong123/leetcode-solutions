/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
  let n = nums.length;
  let count = 0;

  function strictlyIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let newArr = [...nums.slice(0, i), ...nums.slice(j + 1)];
      if (strictlyIncreasing(newArr)) {
        count++;
      }
    }
  }

  return count;
};
