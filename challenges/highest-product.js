/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  if (array.length < 3) {
    return 0;
  } else if (!Array.isArray(array)) {
    return 0;
  } else if (array.length <=3) {
    let product1 = 1;
    array.forEach( (num) => {
      product1 = product1 * num;
    })
    return product1;
  
  } else {
    let sortedArr = array.sort((a,b) => a - b);
    let product2 = 1;
    let len = sortedArr.length;
    let first2 = sortedArr[0] * sortedArr[1];
    let last2 = sortedArr[len - 2] * sortedArr[len - 1];
   
    if ( first2 > last2) {
      product2 = first2 * sortedArr[2];
    } else {
      product2 = last2 * sortedArr[len - 3];
    }
    return product2;
  }
}

module.exports = highestProduct;
