/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t)
{
    let i = 0;
    for (let j = 0; j < t.length; j++)
    {
        if (s[i] === t[j]) i++;
    }
    return i === s.length;
};
// Time complexity: O(n)
// Space complexity: O(1) as we are not using any extra space. The space used is constant.