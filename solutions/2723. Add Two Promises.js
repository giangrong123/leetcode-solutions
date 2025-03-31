/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
   const [num1, num2] = await Promise.all([promise1, promise2]);
    return num1 + num2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
 // Test
addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(2), 20)), 
    new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(console.log); // Output: 7
