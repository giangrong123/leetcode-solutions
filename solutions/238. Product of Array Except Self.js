// LeetCode 238: Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums)
{
    let n = nums.length;
    let LProduct = new Array(n).fill(1);
    let RProduct = new Array(n).fill(1);
    let answer = new Array(n);

    for (let i = 1; i < n; i++)
    {
        LProduct[i] = LProduct[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--)
    {
        RProduct[i] = RProduct[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++)
    {
        answer[i] = LProduct[i] * RProduct[i];
    }

    return answer;
};// Time Complexity: O(n), Space Complexity: O(n) where n is the number of elements in the array