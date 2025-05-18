/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = [];
  const path = [];
  const used = Array(nums.length).fill(false);

  nums.sort((a, b) => a - b); // Sắp xếp để phát hiện phần tử trùng

  function backtrack() {
    //Nếu đủ độ dài, thêm hoán vị vào kết quả
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    //Duyệt từng phần tử
    for (let i = 0; i < nums.length; i++) {
      // Nếu đã dùng rồi, bỏ qua
      if (used[i]) continue;

      // Nếu giống phần tử trước và phần tử trước chưa dùng → bỏ qua để tránh trùng
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      // Chọn phần tử này
      path.push(nums[i]);
      used[i] = true;

      // Đệ quy để chọn phần tử tiếp theo
      backtrack();

      // Quay lui: bỏ phần tử ra khỏi path
      path.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
};

