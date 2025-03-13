/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix)
{
    let res = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right)
    {
        // 1. Đi từ trái sang phải
        for (let i = left; i <= right; i++) res.push(matrix[top][i]);
        top++;

        // 2. Đi từ trên xuống dưới
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
        right--;

        // 3. Đi từ phải sang trái (nếu còn)
        if (top <= bottom)
        {
            for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
            bottom--;
        }

        // 4. Đi từ dưới lên trên (nếu còn)
        if (left <= right)
        {
            for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
            left++;
        }
    }

    return res;
};
//time complexity: O(m*n)
//space complexity: O(1)
//m: số hàng
//n: số cột
//1. Đi từ trái sang phải
//2. Đi từ trên xuống dưới
//3. Đi từ phải sang trái (nếu còn)
//4. Đi từ dưới lên trên (nếu còn) 




