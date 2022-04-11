// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.


////----------MY SOLUTION-------------////
function factorial(n)
{
  if (!(n >= 0 && n <= 12)) {
    throw new RangeError("The input must be between 0 and 12")
  }
  
  else if (n === 0) {
    return 1;
  }
  
  else {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  } 
}



//----------CODEWARS BEST PRACTICES SOLUTION-------------////
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }





//   Task:
//   Your task is to write a function which returns the sum of following series upto nth term(parameter).
  
//   Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
//   Rules:
//   You need to round the answer to 2 decimal places and return it as String.
  
//   If the given value is 0 then it should return 0.00
  
//   You will only be given Natural Numbers as arguments.
  
//   Examples:(Input --> Output)
//   1 --> 1 --> "1.00"
//   2 --> 1 + 1/4 --> "1.25"
//   5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


////----------MY SOLUTION-------------////
  function SeriesSum(n)
{
  if (n === 0) {
    return '0.00';
  }
  else{
    let result = 0, adder = 0;
    for (let i = 1; i <= n; i++) {
    result += (1/(1 + adder));
    adder += 3;
    }
  result = result.toFixed(2);
  return String(result);
  }
}
  

//----------CODEWARS BEST PRACTICES SOLUTION-------------////
  function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }