/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices)
{
    let minPri = Infinity;
    let maxPro = 0;
    for (let i = 0; i < prices.length; i++)
    {
        if (prices[i] < minPri)
        {
            minPri = prices[i];
        }
        else
        {
            maxPro = Math.max(maxPro, prices[i] - minPri);
        }
    }
    return maxPro;
}
// Time Complexity: O(n), Space Complexity: O(1) where n is the number of elements in the array
