// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)



function hero(bullets, dragons){
    let reqBullets;
    reqBullets = 2 * dragons;
    if (reqBullets <= bullets) {
      return true;
    }
    else {
      return false;
    }
  }


// // Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.


// Sum Numbers
function sum (numbers) {
    "use strict";
    if (numbers.length === 0) {
      return 0
    }
    
  const initialValue = 0;
  const sumWithInitial = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
  return sumWithInitial;
  
};

// Convert a String to a Number

var stringToNumber = function(str){
    // put your code here
    return Number(str);
  }

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2){
    // moment of truth
    return ((flower1 % 2 === 0) && (flower2 % 2 !== 0)) || ((flower1 % 2 !== 0) && (flower2 % 2 === 0))
  }
