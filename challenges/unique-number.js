/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// O(n) time
function uniqueNumber(array) {
  const result = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  for (const key in result) {
    if (result[key] === 1) return key;
  }
}
console.log(uniqueNumber([2, 2, 3, -1, 2, -1]));

module.exports = uniqueNumber;
