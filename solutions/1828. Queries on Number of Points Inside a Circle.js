/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  const result = [];

  for (let [qx, qy, r] of queries) {
    let count = 0;
    for (let [px, py] of points) {
      const dx = px - qx;
      const dy = py - qy;
      const distanceSquared = dx * dx + dy * dy;
      if (distanceSquared <= r * r) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};
