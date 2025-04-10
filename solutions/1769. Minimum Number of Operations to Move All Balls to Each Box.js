/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const n = boxes.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let steps = 0;
    for (let j = 0; j < n; j++) {
      if (boxes[j] === '1') {
        steps += Math.abs(i - j);
      }
    }
    result.push(steps);
  }

  return result;
};
