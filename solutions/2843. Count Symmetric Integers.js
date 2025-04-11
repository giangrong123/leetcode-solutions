/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let count = 0;
  for(let i = low; i <= high; i++) {
    let str = i.toString();

    if(str.length % 2 !== 0) continue;
    let mid = str.length / 2;
    let left = str.slice(0, mid);
    let right = str.slice(mid);

    let sumLeft = 0, sumRight = 0;
    for(let i = 0; i < mid; i++) {
      sumLeft += parseInt(left[i]);
      sumRight += parseInt(right[i]);
    }

    if(sumLeft === sumRight) {
      count++;
    }
  }  
  return count;
};
