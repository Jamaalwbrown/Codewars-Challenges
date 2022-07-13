// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
//An array of numbers. Array will have at least 2 numbers. Numbers will be unique and ascending order. 

//Return: 
//First element of array passed that is non consecutive
//If whole array is consecutive then return null

//Constraints: 
//Numbers in the passed array could be positive or negative and the first non-consecutive number could be either as well
//Not consecutive means not exactly one larger than the previous element of the array
 
//Examples: 
//firstNonConsecutive([1,2,3,4,6,7,8]) ----> 6
//firstNonConsecutive([-1,2,3,4,6,7,8]) ----> 2
//firstNonConsecutive([]) ----> null
////firstNonConsecutive([x]) ----> null

//Psuedocode:
//1. Take the passed and check if its length is less than 2. This would indicate that its an empty array or only has one element
//2. If array length is 2 or greater, then we'll iterate through the array starting at index 1
//3. On each iteration we compare the current element and the previous element. We take the difference (current elem - previous elem)
//4. If this difference is greater than 1 then we know we have found our nonconsecutive element
//5. We will return that element from the function
//6. If we keep iterating and get to the end of the array then we return null 

function firstNonConsecutive (arr) {
    if(arr.length < 2) {
          return null
      }
    
    let result = null;
      for (let i = 1; i < arr.length; i++){
          console.log(arr[i]);
          if ((arr[i] - arr[i - 1]) > 1) {
              result = arr[i];
              console.log(result);
              break;
          }
        }
    
    console.log('All elements are consecutive');
    return result;
  }

