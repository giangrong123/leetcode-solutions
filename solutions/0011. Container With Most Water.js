/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let maxWater = 0;

  while(left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    let area = h * width;
    maxWater = Math.max(maxWater, area);

    if(height[left] < height[right]) {
      left++;
    } 
    else {
      right--;
    }
  }
  return maxWater;
};
