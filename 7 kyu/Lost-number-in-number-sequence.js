/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Parameters: given an ordered array of numbers from 1 to N. N may be less than 1

given an array of the same numbers in mixed order with one number deleted from it

~~~~~~~~~~~~~~~~~~~~~

Returns: a number, the number that was deleted from the ordered array and that is not present in the mixed array

Either 'Deletion' or 'no' depending on if a number was deleted or not from the array

~~~~~~~~~~~~~~~~~~~~~~

Examples: 
findDeletedNumber([1,2,3,4,5], [3,4,1,5]) ---->  2, 'Deletion'
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) ------> 5, 'Deletion'
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) -----> 0, 'No deletion'

~~~~~~~~~~~~~~~
Pseudocode:
- Check if arr is empty. If so return 0
-Check if both arr lengths are the same. If so then we know a number has not been deleted. We return 0
-Search the mixed array of ever number in the normal sorted array until the mixing number is found
-We use indexOf while iterating through the mixed array


*/

function findDeletedNumber(arr, mixArr) {
    if (arr.length === 0) {
      return 0
    }
  
    if (arr.length === mixArr.length) {
      return 0
    }
  
    result = arr.filter(num => {
      if(mixArr.indexOf(num) === -1) {
        return true
      }
      else {
        return false
      } 
    })
    return result[0]
  }
  
  console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'Deletion')