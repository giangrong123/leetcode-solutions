/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const countMap = {};
  let totalPairs = 0; 
  for (const domino of dominoes) {
    const a = domino[0];
    const b = domino[1];

    // Tạo key là số, ví dụ [1,2] và [2,1] đều thành 12
    const key = a < b ? a * 10 + b : b * 10 + a;

    // Đếm cặp tương đương
    if (countMap[key]) {
      totalPairs += countMap[key];
      countMap[key]++;
    } else {
      countMap[key] = 1;
    }
  }
    return totalPairs;
};
