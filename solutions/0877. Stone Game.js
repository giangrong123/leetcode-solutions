/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  let odd = 0;
  let even = 0;
  for(let i = 0; i < piles.length; i++) {
    if(i % 2 === 0) {
      even += piles[i];
    } else {
      odd += piles[i];
    }
  }   
  return true;
};
