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


/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let ans = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < points.length; j++) {
            let x = points[j][0];
            let y = points[j][1];
            let x1 = queries[i][0];
            let y1 = queries[i][1];
            let r = queries[i][2];
            if ((x - x1) * (x - x1) + (y - y1) * (y - y1) <= r * r) {
                count++;
            }
        }
        ans.push(count);
    }
    return ans;
};
