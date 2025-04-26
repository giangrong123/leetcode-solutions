/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  if(n === 1) return 1;
  let total = (n * (n + 1)) / 2;
  for(let i = 1; i <= n; i++) {
    let total1 = (i * (i + 1)) / 2;
    let total2 = total - (i * (i - 1)) / 2;
    if(total1 === total2) {
      return i;
    }
  }
  return -1;
};
