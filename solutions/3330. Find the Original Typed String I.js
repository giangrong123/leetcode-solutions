/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
  let total = 1;
  let count = 1;
  for(let i = 0; i <= word.length; i++) {
    if(word[i] === word[i + 1]) {
      count++;
    } else {
      if(count > 1) {
        total += (count - 1);
        count = 1;
      }
    }
  }
  return total;
};
