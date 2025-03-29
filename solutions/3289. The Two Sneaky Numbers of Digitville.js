/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  let seen = new Set();
  let result = [];

  for(let num of nums) {
    if(seen.has(num)) {
      result.push(num);
    } else {
      seen.add(num);
    }
  }  
  return result
};
