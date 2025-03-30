/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s)
{
    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};
// Time complexity: O(n)
// Space complexity: O(n) as we are using extra space to store the reversed string.
