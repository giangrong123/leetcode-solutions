/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n <= 2) return n;
  let pre1 = 1;
  let pre2 = 2;
  for(let i = 3; i <= n; i++) {
    let cur = pre1 + pre2;
    pre1 = pre2;
    pre2 = cur;
  }
  return pre2;
};
