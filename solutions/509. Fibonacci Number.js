/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    if (n <= 1) return n;
    let prev = 0, curr = 1;
    for(let i = 2; i <= n; i++) {
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
};

