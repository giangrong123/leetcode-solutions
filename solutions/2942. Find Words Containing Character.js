/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  let number = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i].includes(x)) {
      number.push(i);
    }
  }
  return number;
};
