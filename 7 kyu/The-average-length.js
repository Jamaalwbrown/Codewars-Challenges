/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

Paramters: 
Given an array of strings 
each string has the same letter type
array will always have at least two elements


~~~~~~~~~~~~~~~~~
Returns:
return an array
the length of each element of the returned array will be equal to the average length of the elements of the previous array
If average length is not an integer, we need to round using Math.round()


~~~~~~~~~~~~~~~~~~~~~

Examples:
['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3


~~~~~~~~~~~~~~~~~~
Psuedocode:
-We don't have to worry about empty arrays
-Iterate through the array and count the length of each string
-Total up all the lengths of each string in the array
-Divide the sum by the length of the array to get the average length of all the strings
-Go through the array again and map each element to a new array
-Each element should be a single letter repeated the same number of times as our average
*/


function averageLength(arr) {
    //Join the array of words together into one big string and take the length
    //We round the result of dividing the combined string length by the array length to get the average length
    let avgLength = Math.round(arr.join('').length / arr.length)
  
  //Use map to map the old array to the new one using the repeat string method
    const resultArr = arr.map(e => {
      return e[0].repeat(avgLength)
    })
  
    return resultArr;
  }
  
  console.log(averageLength(['u', 'y']), ['u', 'y']);
  console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
  console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']);