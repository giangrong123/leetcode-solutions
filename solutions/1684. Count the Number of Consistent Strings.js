/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let count = 0;
  const allowedSet = new Set(allowed);
  for(let word of words) {
    let isConsistent = true;

    for(let char of word) {
      if(!allowedSet.has(char)) {
        isConsistent = false; 
        break;
      }
    }
    if(isConsistent) count++;
  }  
  return count;
};
