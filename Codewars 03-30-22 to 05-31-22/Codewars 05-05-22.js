// <!-- Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty. -->


///----My Solution-----///
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
      return a - b;
    });
    return args[0];
  }
} 

///-----Codewars Best Practices Solution------////
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

/*--------------------------------------------------*/

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

///----My Solution-----///
var summation = function (num) {
  let total = 0;
  for (let i=1; i <= num; i++) {
    total += i;
  }
  return total;
}


///-----Codewars Best Practices Solution------////
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}



/*--------------------------------------------------*/





// Simple, remove the spaces from the string, then return the resultant string.

///----My Solution-----///
function noSpace(x){
  return x.split(" ").join("");
}


///-----Codewars Best Practices Solution------////
function noSpace(x){
  return x.replace(/\s/g, '');
}


/*--------------------------------------------------*/



// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.



///----My Solution-----///
function getMiddle(s)
{
  let position, length;
  if ((s.length) % 2 === 0) {
    position = s.length / 2 - 1;
    length = 2;
  }
  else {
    position = Math.floor(s.length / 2)
    length = 1;
  }
  
  return s.substring(position, position + length);
}


///-----Codewars Best Practices Solution------////
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

/*--------------------------------------------------*/














///----My Solution-----///



///-----Codewars Best Practices Solution------////



/*--------------------------------------------------*/