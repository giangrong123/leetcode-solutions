/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums)
{
    let x = 0;
    for (let y = 0; y < nums.length; y++)
    {
        if (nums[y] !== 0)
        {
            let temp = nums[x];
            nums[x] = nums[y];
            nums[y] = temp;
            x++
        }
    }
};

// Time complexity: O(n)
// Space complexity: O(1)