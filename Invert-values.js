// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//-----------MY SOLUTION--------------//

//PREP
//Parameters: An array of numbers/integers

//Return: An array of numbers/integers that have been inverted from the sign of the passed in array

//Constraints: We cannot mutate the input array/list. We must copy or map the array to a new array and return
//             We can assume that all values in the arrays are integers
 
//Examples: 
//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []
  
//Psuedocode:
//1. Call the map function on the input array and map the inverse of each element using Math.sign of the input array to the new array.
//2. Return the new array

function invert(array) {
    return array.map(element => -element);
 }