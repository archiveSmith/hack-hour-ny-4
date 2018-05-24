/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// let arr = [5, 4, 4, 5, 6, 7, 8, 10, -10, -10, -10];
function highestProduct(array) {
  array = array.sort((a, b) => a - b);
  let length = array.length;
  if (array.length < 3 || !Array.isArray(array)) return 0;
  let prodLast3 = array[length - 1] * array[length - 2] * array[length - 3];
  let prodFirst2Last = array[0] * array[1] * array[length - 1];
  return Math.max(prodFirst2Last, prodLast3);
}
// console.log(highestProduct(arr));

module.exports = highestProduct;
