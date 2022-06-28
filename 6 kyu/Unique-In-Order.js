// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//-----------MY SOLUTION--------------//

//PREP
//Parameters: A sequence of elements (can be an array or string)

//Return: An array of the unique elements from the passed in string/array

//Constraints: 
//We need to be able to handle array or string input
//We should plan to handle any type of element (number, char, etc.)
 
//Examples: 
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
  
//Psuedocode:
//1. Check if array or string is empty (e.g if the length property is 0)
//2. Take the array or string and access the first element. Push that element onto our result Array to be returned
//3. Iterate through the array or string while checking each element against the current element we are holding. When there is a change grab the new element and push it onto our result array
//4  We repeat steps 2 and 3 until we reach the end of the array or string
//5. We return the result Array
var uniqueInOrder=function(iterable){
    if (iterable.length === 0) {
      return []
    }
    
    let index = 0
    let element = iterable[index];
    const resultArr = []
    resultArr.push(element);
    
    while(index < iterable.length) {
      
      if(element !== iterable[index]) {
        element = iterable[index];
        resultArr.push(element);
      }
      index++
    }
    return resultArr
  }