/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref)
{

    let count = 0;
    for (const word of words)
    {
        if (word.startsWith(pref))
        {
            count++;
        }
    }
    return count;
};

// Time complexity: O(n * m) where n is the number of words and m is the length of the prefix
// Space complexity: O(1)
