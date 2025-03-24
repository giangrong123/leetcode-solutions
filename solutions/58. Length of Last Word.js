/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.trim().split(" ");
  let n = arr.length;
  let arr1 = arr[n - 1].length;
  return arr1;
};
