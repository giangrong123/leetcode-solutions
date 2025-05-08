/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let add = address.split('');
  for(let i = 0; i < add.length; i++) {
    if(add[i] === '.') {
      add[i] = '[.]';
    }
  }
  return add.join('');
};
