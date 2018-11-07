// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let counter = 0;
  if (str[1] >= 3 && str[3] >= 1) {
    counter++;  
    // recursive call with the new position? how to eliminate option...
  } else if (str[1] >= 1 && str[3] >=3) {
    counter++;
  } 

  return counter;
  // +- 3 on either x or y, +- 1 x or y has to be greater than or equal to 0
  // count every combination
  // return num of combinations
}

module.exports = knightjumps;
