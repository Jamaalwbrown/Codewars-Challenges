// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"


///----My Solution-----///
function numberToString(num) {
    return String(num);
  }

///-----Codewars Best Practices Solution------////
function numberToString(num) {
    return num.toString();
  }

/*--------------------------------------------------*/


//   Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

///----My Solution-----///
function boolToWord( bool ){
    return bool ? "Yes" : "No";
  }


///-----Codewars Best Practices Solution------////
function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }


/*--------------------------------------------------*/



//   Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

///----My Solution-----///
function solution(str){
    return str.split('').reverse().join('');
  }

///-----Codewars Best Practices Solution------////
function solution(str){
    return str.split('').reverse().join('');  
  }


/*--------------------------------------------------*/



//   You get an array of numbers, return the sum of all of the positives ones.

//   Example [1,-4,7,12] => 1 + 7 + 12 = 20
  
//   Note: if there is nothing to sum, the sum is default to 0.


///----My Solution-----///
function positiveSum(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        sum += arr[i];
      }
    }
    return sum;
  }


///-----Codewars Best Practices Solution------////
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}


/*--------------------------------------------------*/


// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


///----My Solution-----///
function removeChar(str){
    return str.slice(1, (str.length - 1));
   };

   

///-----Codewars Best Practices Solution------////
function removeChar(str) {

 //If endIndex is negative, slice() treats it as str.length + endIndex.-                                   
 // (E.g, if endIndex is -2, it is treated as str.length 2 and "test".slice(1, -2) returns "e") .
    return str.slice(1, -1);           
  } 