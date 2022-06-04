// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//-----------MY SOLUTION--------------//

//PREP
//Parameters:
//A non-negative integer (type of Number)

//Return:
//A non-negative integer with digits in descending order (type of Number)

//Constraints:
//Integer can have any number of digits
 
//Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
  
//Psuedocode:
//1. Take in the number and convert it an array of numbers. Can convert to string before converting to array if need be
//2. Then sort the array using the sort method. 
//3. Then we will join array back together using the join method
//4. Conversion from string to number type. Return result

let convToNum = num => Number(num);

function descendingOrder(n){
  let numArr = Array.from(String(n), convToNum);
  numArr.sort((a, b) => b - a);
  return Number(numArr.join(''));
  
}  

//----------BEST PRACTICES SOLUTION----------//

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }