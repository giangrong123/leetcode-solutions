/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    const canRepair = (time) => {
      let totalCars = 0;
      for(rank of ranks) {
        totalCars = totalCars + Math.floor(Math.sqrt(time / rank));
      }
      return totalCars >= cars;
    }

    let left = 1;
    let right = Math.min(...ranks) * cars * cars;
    let result = right;
    while(left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(canRepair(mid)) {
        result = mid;
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
    }
    return result;
};
