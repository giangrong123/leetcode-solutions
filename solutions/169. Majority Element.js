/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums)
{
    nums.sort(
        function (a, b)
        {
            return a - b;
        }
    );
    return nums[Math.floor(nums.length / 2)];
};
// Time Complexity: O(nlogn), Space Complexity: O(1) where n is the number of elements in the array