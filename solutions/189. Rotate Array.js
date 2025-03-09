/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k)
{
    let n = nums.length;
    k = k % n;
    let rotateSecond = nums.splice(-k);
    nums.unshift(...rotateSecond);
}
