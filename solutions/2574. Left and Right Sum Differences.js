/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  const n = nums.length;
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);
  const answer = new Array(n);

  // Tính tổng bên trái cho mỗi phần tử
  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  // Tính tổng bên phải cho mỗi phần tử
  for (let i = n - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  // Tính giá trị tuyệt đối của hiệu giữa leftSum và rightSum
  for (let i = 0; i < n; i++) {
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return answer;
};
