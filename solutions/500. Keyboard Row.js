/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) 
{
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let result = [];
  for(let word of words) 
  {
    let lowerWord = word.toLowerCase();
    for(let row of rows) 
    {
      if([...lowerWord].every(char => row.includes(char))) 
      {
        result.push(word);
      }
    }
  }
  return result;
};
