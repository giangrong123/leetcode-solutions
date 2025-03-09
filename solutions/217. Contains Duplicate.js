/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums)
{
    const seen = new Set();
    for (let num of nums)
    {
        if (seen.has(num))
        {
            return true;
        }
        seen.add(num);
    }
    return false;
};

// Time complexity: O(n)
// Space complexity: O(n) where n is the number of elements in the array. In the worst case, all elements are unique and the set will store all elements.

