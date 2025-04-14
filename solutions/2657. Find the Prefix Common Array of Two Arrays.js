/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const seen = new Set();
  const result = [];
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    // Với mỗi i, ta thêm cả A[i] và B[i] vào `seen`
    // Nếu phần tử đã từng thấy trước đó → nghĩa là đã xuất hiện ở cả A và B
    for (let x of [A[i], B[i]]) {
      if (seen.has(x)) {
        count++;
      } else {
        seen.add(x);
      }
    }
    result.push(count);
  }

  return result;
};
