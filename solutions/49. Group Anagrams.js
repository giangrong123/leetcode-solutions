/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hashTable = Object.create(null);

  for(let str of strs) {
    let charCount = new Array(26).fill(0);

    for(let char of str) {
      charCount[char.charCodeAt(0) - 97]++;
    }

    let key = charCount.join('#');

    if (!hashTable[key]) {
      hashTable[key] = [];
    }
    hashTable[key].push(str);
  }
  return Object.values(hashTable);
};
