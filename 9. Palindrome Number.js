/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x)
{
    if (x < 0)
    {
        return false;
    }

    let str = x.toString();

    let reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}
// Time Complexity: O(n), Space Complexity: O(n) where n is the number of digits in the number
