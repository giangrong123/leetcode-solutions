/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const count = {};
  for(let x of answers) count[x] = (count[x] || 0) + 1;
  let res = 0;
  for(let x in count) {
    let group = +x + 1;
    res += Math.ceil(count[x] / group) * group;
  }
  return res;
};
