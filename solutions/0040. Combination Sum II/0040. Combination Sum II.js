/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  var result = [];
  var arr = [];
  candidates.sort((a, b) => a - b);

  var checkSum = function(sum, index) {
    if (sum === target) {
      result.push([...arr]);
    } 
        
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;

      if (sum + candidates[i] > target) break;
      
      if (sum + candidates[i] <= target) {
        arr.push(candidates[i]);
        checkSum(sum + candidates[i], i + 1);
        arr.pop();
      }
    }
  };
  checkSum(0,0);
  return result;
};
