/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const findFirst = () => {
    let left = 0, right = nums.length - 1, result = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid;
        right = mid - 1; // tiếp tục tìm bên trái
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };

  const findLast = () => {
    let left = 0, right = nums.length - 1, result = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid;
        left = mid + 1; // tiếp tục tìm bên phải
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };

  return [findFirst(), findLast()];
};
