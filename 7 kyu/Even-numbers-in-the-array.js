/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
The original array will be not empty and will contain at least "number" even numbers.
*/

//For example: 

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//[arr], num
//never empty, at least num in the array
//[2,4], 2
//[] -> last even nums

// function nEvenNums(arr, num) {
//     // filter out odd nums
//     //n last nums from the filtered array
//     return arr.filter(n => n % 2 === 0).slice(-num);
// }
const nEvenNums = (arr, num) => arr.filter(n => n % 2 === 0).slice(-num)

console.log(nEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), '[4, 6, 8]')
console.log(nEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), '[-8, 26]')
console.log(nEvenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), '[6]')