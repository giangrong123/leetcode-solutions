/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if(n % 4 === 0) {
      return false;
    } else {
      return true;
    }
};

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  return (n % 2 === 0);
};

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function(x, y) {
  let turns = Math.min(x, Math.floor(y / 4));
  return (turns % 2 === 1) ? "Alice" : "Bob";
};
