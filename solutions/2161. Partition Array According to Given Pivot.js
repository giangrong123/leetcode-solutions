/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
// var pivotArray = function(nums, pivot) {
//   let left = [];
//   let mid = [];
//   let right = [];
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] < pivot) {
//       left.push(nums[i]);
//     } else if(nums[i] === pivot) {
//       mid.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }
//   return [...left,...mid,...right];
// };

var pivotArray = function(nums, pivot) {
  const n = nums.length;
  const res = new Array(n);
  let idx = 0;

  // Đầu tiên: duyệt để đặt các phần tử < pivot
  for (const num of nums) {
    if (num < pivot) {
      res[idx++] = num;
    }
  }

  // Sau đó: duyệt lại để đặt các phần tử == pivot
  for (const num of nums) {
    if (num === pivot) {
      res[idx++] = num;
    }
  }

  // Cuối cùng: duyệt lại để đặt các phần tử > pivot
  for (const num of nums) {
    if (num > pivot) {
      res[idx++] = num;
    }
  }

  return res;
};
