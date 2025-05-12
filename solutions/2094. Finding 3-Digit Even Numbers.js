/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  let result = new Set();
  let n = digits.length;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      for(let k = 0; k < n; k++) {
        if (i === j || j === k || i === k) continue;
        const a = digits[i];
        const b = digits[j];
        const c = digits[k];

        if(a === 0) continue;
        if(c % 2 !== 0) continue;

        const num = a * 100 + b * 10 + c;
        result.add(num);
      }
    }
  }
   return Array.from(result).sort((a, b) => a - b);
}
