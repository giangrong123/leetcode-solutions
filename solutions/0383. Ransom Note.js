/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = new Array(26).fill(0); // Đếm chữ cái a-z

    // Duyệt qua magazine, tăng đếm
    for (let i = 0; i < magazine.length; i++) {
        let index = magazine.charCodeAt(i) - 97;
        letters[index]++;
    }

    // Duyệt qua ransomNote, giảm đếm
    for (let i = 0; i < ransomNote.length; i++) {
        let index = ransomNote.charCodeAt(i) - 97;
        if (letters[index] === 0) {
            return false; // Không còn chữ để dùng
        }
        letters[index]--;
    }

    return true;
};
