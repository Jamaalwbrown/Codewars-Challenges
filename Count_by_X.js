// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
//-----------MY SOLUTION--------------//

//PREP
//Parameters:
//two numbers. n is the number of multiples of x we have to calculate 

//Return: 
//array of the first (n) multiples of (x)

//Constraints:
//Always given a positive integer 
 
//Examples:
//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,6,8,10] 
  
//Psuedocode:
//Create a loop with n as the number of times to run the loop
//Within each iteration of the loop, push x onto the result array and then add x to itself

function countBy(x, n) {
    let z = [];
    let multiple = x;
    for (let i = 1; i <= n; i++) {
      z.push(multiple);
      multiple += x;
    }
    return z;
  }
   
  
//----------BEST PRACTICES SOLUTION----------//
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}