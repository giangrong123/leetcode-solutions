/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  for(let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

// cach 2:
var runningSum = function(nums) {
  const result = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    result.push(sum);
  }
  return result;
};

//cach 3
var runningSum = function(nums) {
  let sum = 0;
  return nums.map(num => sum += num);
};

