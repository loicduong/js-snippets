/**  
 * Creates an array of random objects using a callback function. Mainly for the purpose of creating dummy data.
 *  
 * @param {Function} callback - The function called to create each element in the array.  
 *   This function should take no arguments and return an object.  
 * @param {number} [total=1] - The number of elements in the resulting array. Defaults to 1.  
 * @returns {Array} An array containing objects created by the callback function.  
 *  
 * @example  
 * // Create an array of 3 random objects  
 * const randomObjects = randomObjectArray(() => ({ id: Math.random() }), 3);  
 * console.log(randomObjects);  
 * // Output: [{ id: 0.1234... }, { id: 0.5678... }, { id: 0.9012... }]  
 */  
function randomObjectArray(callback, total = 1) {
  return (new Array(total)).fill(1).map(callback)
}
