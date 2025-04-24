/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const totalUnique = new Set(nums).size;
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
    let seen = new Set();
    for(let j = i; j < nums.length; j++) {
      seen.add(nums[j]);
      if(seen.size === totalUnique) result++;
    }
  }  
  return result;
};
