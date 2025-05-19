/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
  nums.sort((a, b) => a - b);
  for(let i = 0; i < 3; i++) {
    if(nums[0] + nums[1] <= nums[2] || nums[0] <= 0 || nums[1] <= 0 || nums[2] <= 0) {
      return "none";
    } else if(nums[0] === nums[1] && nums[1] === nums[2]) {
      return "equilateral";
    } else if(nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }  
};
