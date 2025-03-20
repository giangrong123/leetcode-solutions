/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = parseInt(
      Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join('')
      ) * Math. sign(x);
    return (rev < -(2**31) || rev > 2**31 - 1) ? 0 : rev;
};

