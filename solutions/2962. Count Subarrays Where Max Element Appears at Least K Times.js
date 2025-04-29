/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let n = nums.length;
  let count = 0;
  let result = 0;
  let left = 0;
  let maxVal = Math.max(...nums);
  for(let right = 0; right < n; right++) 
  {
    if(nums[right] === maxVal) 
    {
      count++;
    }

    while(count >= k) 
    {
      result += (n - right);
      if(nums[left] === maxVal) 
      {
        count--;
      }
      left++;
    }
  }

  return result;
};
