/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  // Sắp xếp mảng
  nums.sort((a, b) => a - b);
  
  let n = nums.length;
  let count = 0;

  // Duyệt qua từng phần tử i trong mảng
  for (let i = 0; i < n; i++) {
    // Tìm các phần tử nums[j] sao cho nums[j] >= lower - nums[i]
    let left = i + 1, right = n;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < lower - nums[i]) left = mid + 1;
      else right = mid;
    }

    let start = left;

    // Tìm các phần tử nums[k] sao cho nums[k] > upper - nums[i]
    left = i + 1; right = n;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= upper - nums[i]) left = mid + 1;
      else right = mid;
    }

    let end = left;
    // Cộng vào số cặp hợp lệ
    count += end - start;
  }

  return count;
};
