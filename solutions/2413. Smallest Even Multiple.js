/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  let multi = 2 * n;
  if(n % 2 !== 0) {
    return multi;
  } else {
    return (n / 2) * 2;
  }
};
