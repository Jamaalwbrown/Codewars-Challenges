// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//-----------MY SOLUTION--------------//

//PREP
//Parameters: An array

//Return: An array with every second element of the original array removed

//Constraints: Always keep the first element. Start removing with the second element
 
//Examples: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
  
//Psuedocode:
//Iterate through the array using a forloop or forEach and if the index is odd. Remove that element.
//We can check for oddness using the modulus operator %
   
function removeEveryOther(arr){
    const result = arr.filter((word, index) => (index % 2 === 0));
    return result;
  } 
//----------BEST PRACTICES SOLUTION----------//
