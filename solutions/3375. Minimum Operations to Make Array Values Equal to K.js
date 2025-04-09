/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // B1: Nếu tồn tại phần tử nhỏ hơn k, không thể thực hiện
    for (let num of nums) {
        if (num < k) return -1;
    }

    // B2: Tập hợp các giá trị > k
    const greaterVals = new Set();
    for (let num of nums) {
        if (num > k) {
            greaterVals.add(num);
        }
    }

    // B3: Mỗi giá trị khác nhau > k cần 1 thao tác giảm
    return greaterVals.size;
};
