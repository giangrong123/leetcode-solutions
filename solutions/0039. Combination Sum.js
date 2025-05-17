/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var result = [];
  var arr = [];

  var checkSum = function(sum, index) {
    if (sum === target) {
      result.push([...arr]);
    } 
        
    for (let i = index; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        arr.push(candidates[i]);
        checkSum(sum + candidates[i], i);
        arr.pop();
      }
    }
  };
  checkSum(0,0);
  return result;
}
