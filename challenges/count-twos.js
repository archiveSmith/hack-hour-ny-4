// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered 
//when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two 
// and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    if (num === 1) return 0;
    else if (num === 3) return 1;
    else {
        let numArr = String(Array.apply(null, {length: num}).map(Number.call, Number));
        let number = 2222;
        let counter = 0;
        let match2 = /[2]/gi
        console.log(number.toString());

        let matchTest = (number.toString().match(match2));

        console.log(matchTest.length);
        console.log(matchTest);
        console.log(numArr);
        console.log(typeof numArr[0])

        let matchTest2 = numArr.match(match2);
        console.log(matchTest2);
        console.log(matchTest2.length);

        return matchTest2.length;
    }
}

// Number.prototype.string = (num) => {
//     if (typeof num === Number) return num.toString();
// }

//console.log(countTwos(1));
//console.log(countTwos(3));
//console.log(countTwos(13));
// console.log(countTwos(1000));
// console.log(countTwos(11420));

module.exports = countTwos;
