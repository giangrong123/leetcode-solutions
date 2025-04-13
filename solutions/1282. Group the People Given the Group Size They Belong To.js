/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const map = new Map();
  const result = [];

  groupSizes.forEach((size, i) => {
    if (!map.has(size)) map.set(size, []);
    map.get(size).push(i);

    if (map.get(size).length === size) {
      result.push(map.get(size));
      map.set(size, []);
    }
  });

  return result;  
};

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const result = [];
  const tempGroups = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];

    // Nếu nhóm có kích thước `size` chưa đầy đủ, thêm người vào nhóm đó
    if (!tempGroups[size]) {
      tempGroups[size] = [];
    }

    tempGroups[size].push(i);

    // Nếu nhóm đủ người, đẩy nhóm vào kết quả và reset nhóm đó
    if (tempGroups[size].length === size) {
      result.push(tempGroups[size]);
      tempGroups[size] = [];
    }
  }

  return result;
};
