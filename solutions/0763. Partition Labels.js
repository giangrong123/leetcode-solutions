/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let lastIndex = {};
    
    // Bước 1: Xác định vị trí cuối cùng của mỗi ký tự
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    
    let result = [];
    let start = 0, end = 0;
    
    // Bước 2: Duyệt qua chuỗi để tìm các phần hợp lệ
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]);
        
        // Nếu vị trí hiện tại đạt đến điểm cuối của phần hiện tại
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }
    
    return result;  
};
