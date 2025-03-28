/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
      if(nums[i] === nums[j] && i < j) {
        count++;
      }
    }
  }
  return count;
};

var numIdenticalPairs = function(nums) {
    let freq = {};  // HashMap để lưu số lần xuất hiện của từng số
    let count = 0;  // Số cặp tốt

    for (let num of nums) {
        if (freq[num]) {
            count += freq[num]; // Mỗi lần gặp số này, thêm vào số cặp đã có
            freq[num]++; // Cập nhật số lần xuất hiện
        } else {
            freq[num] = 1; // Nếu chưa có trong hashmap, khởi tạo là 1
        }
    }

    return count;
};
