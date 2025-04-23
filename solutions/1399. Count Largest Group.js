/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const group = {};
  for(let i = 1; i <= n; i++) {
    const sum = [...i.toString()].reduce((a, b) => a + +b, 0);
    group[sum] = (group[sum] || 0) + 1;
  }
  const sizes = Object.values(group);
  const max = Math.max(...sizes);
  return sizes.filter(x => x === max).length;
};
