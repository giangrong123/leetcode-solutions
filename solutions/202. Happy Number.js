/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let seen = new Set(); // Tạo Set để lưu các số đã xuất hiện
  
  while (n !== 1 && !seen.has(n)) {  
    seen.add(n);  // Lưu số hiện tại vào Set
    n = getNext(n);  // Tính số tiếp theo
  }

  return n === 1;  // Nếu đạt đến 1, số đó là số hạnh phúc
};

// Hàm tính tổng bình phương các chữ số của n
function getNext(num) {
    let sum = 0;
    
    // Chuyển số thành chuỗi để duyệt từng chữ số dễ hơn
    let digits = num.toString().split('');
    
    // Duyệt qua từng chữ số
    for (let digit of digits) {
        let squared = Number(digit) ** 2; // Chuyển về số rồi bình phương
        sum += squared; // Cộng vào tổng
    }
    
    return sum;
}
