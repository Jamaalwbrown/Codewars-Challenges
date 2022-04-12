// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"


//------- MY SOLUTION ---------//
function repeater(string, n){
    let resultArr = new Array();
    for (let i = 0; i < n; i++) { //Loop through the new array and push the input string n number of times to the array
      resultArr.push(string);
    }
    
    return resultArr.join('');
  }


//------- CODEWARS BEST PRACTICES SOLUTION ---------//
const repeater = (string, n) => {
    return string.repeat(n);
  }







//   Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity



//------- MY SOLUTION ---------//
function capitalize(s){
    //split the string up into an array of letters. Loop through the array and test for eveness or oddness using map. 
    //Capitalize depending on result of test then join the array back together into a string
    let evenCapitalStr = s.split('').map((element, index) => (index % 2 === 0) ? element.toUpperCase() : element.toLowerCase()).join('');
    let oddCapitalStr = s.split('').map((element, index) => (index % 2 !== 0) ? element.toUpperCase() : element.toLowerCase()).join('');
    
    return [evenCapitalStr, oddCapitalStr];
  };




//------- CODEWARS BEST PRACTICES SOLUTION ---------//
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };