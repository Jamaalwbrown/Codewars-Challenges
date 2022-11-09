/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Parameters: 
-We are given two lists. Data structure is an array. One list named a and the other is named b
-Examples given are a list of numbers
-always given a list of numbers, will there be negative numbers, will there be an empty list? list of strings?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Returns: 
-One array. Return array a with values that occur in array b removed
-If nothing is in array b, we can simply just return array a
-We must keep the numbers in the order that they were in originally
-What do we return for edge cases: negative numbers?, strings?, empty array?

~~~~~~~~~~~~~~~~~~~
Examples:
arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
arrayDiff([1,2,2], [2]) == [1]

Pseudocode:
-If list a is empty, we return an empty string
-If list b is empty and list a is not, then we return a
-Iterate through list a and check if each number is in array b
-If number is in b then we remove that number from a
-If number is not in b then we retain that value or skip
-We can store this in a resultant array if needs and return it

 */ 

function arrayDiff(a, b) {
    if (a.length === 0) {
      return []
    }
  
    if (a.length !== 0 && b.length === 0) {
      return a
    }
  
    result = a.filter((num, index, arr) => {
  
      //We check if the current element in list a is in list b by checking the what indexOf evaluates to. If it -1 then we know the element is not in b. Else the element is in b
      if (b.indexOf(num) !== -1) {
        //If element is in b then we return false and filter out the that num from a
        return false
      }
      else {
        //if element is not in b then we skip or retain that element in our array
        return true
      }
    })
  
    return result;
  }
  
  console.log(arrayDiff([1,2],[1]), [2])
  console.log(arrayDiff([1,2,2,2,3],[2]), [1,3])
  console.log(arrayDiff([1,2,2], [2]), [1])