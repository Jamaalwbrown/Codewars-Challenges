// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.


//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
//Ones and Zeroes(type of Array)

//Return: 
//Integer(type of num)

//Constraints: 
//Only given ones and zeroes, no other integers
//Array length is not just limited to 4. Can be any array length

//Examples: 
// binaryArrayToNumber([0,0,0,1]) ==> 1
// binaryArrayToNumber([0,0,1,0]) ==> 2
// binaryArrayToNumber([1,1,1,1]) ==> 15
// binaryArrayToNumber([0,1,1,0]) ==> 6

//Psuedocode:
//Join the array together to make a string. Then we can use parseint on it to convert to decimal
   
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
  };
  
//----------BEST PRACTICES SOLUTION----------//
//const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);