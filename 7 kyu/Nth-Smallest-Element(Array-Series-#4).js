/*
Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.

Paramters: an Array of integers (positives, negatives, and 0 are fair game), Also given 

Returns: 

Examples: 
nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)


Pseudocode:
//sort the array using arr.sort
//return the index at (pos - 1) because pos is not 0 indexing but our array is 0 indexed


*/


function nthSmallest(arr, pos){
    return arr.sort((a, b) => a - b)[pos - 1]
  }
  
  console.log(nthSmallest([3,1,2] ,2), 2)
  console.log(nthSmallest([15,20,7,10,4,3] ,3), 7)
  console.log(nthSmallest([2,169,13,-5,0,-1] ,4), 2)
  console.log(nthSmallest([177,225,243,-169,-12,-5,2,92] ,5), 92)