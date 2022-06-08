// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
//Given an array of integers

//Return: 
//Returning one integer(the integer that occurs in the array an odd number of times)

//Constraints: 
//Only one integer will occur an odd number of times
//Integers can be negative, 0, or positive
//Must be able to handle any length of an array

//Examples: 
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

  
//Psuedocode:
//Iterate through the array using the array find method. 
//The callback function in the array find method will loop through the array for each element and
//count the occurence of each element. If the occurence of the element is odd then the callback function returns true which
//will make the array find function return that element. If the occurence of the element occurs an even amount of times 
//then the callback function returns false and the find function moves to the next element
   

function findOdd(A) {
    let result = A.find((element, index, array) => {
      let count = 0;
      for(let i = 0; i < array.length; i++){
        if (element === array[i]){
          count++;
        }
      }
      if(count % 2 !== 0) {
        return true
      }
      else{
        return false
      }
    })
    return result
  }
   
  
//----------BEST PRACTICES SOLUTION----------//
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }