// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//-----------MY SOLUTION--------------//
function basicOp(operation, value1, value2)
{
  //PREP
  //Parameters: operation(string or char), value1(number), value2(number)
  //Return: Result of performing given operation on the given numbers(number). We are returning. Not console.log
  
  //Constraints: 
  //Only the 4 basic arithmetic operations are given
  //assume numbers can be positive or negative
  //assume 0 can be given which will need to be handled appropriately
  //assume that value1 will be first in the operation and value2 will be second. e.g: value 1 - value2
  
  //Examples: 
  // basicOp('+', 4, 7) --> 11
  // basicOp('-', 15, 18) --> -3
  // basicOp('*', 5, 5) --> 25
  // basicOp('/', 49, 7) --> 7
  
  //Psuedocode:
  //Check for which operation is passed - use a switch statement maybe
  //Within each case in the switch statement perform the appropriate operation on the values passed to the function
  //Save the result of the operation. Return the result from the function 
  switch(operation) {
      case '+':
        return (value1 + value2);
      case '-':
        return (value1 - value2);
      case '*':
        return (value1 * value2);
      case '/':
        return (value1 / value2);
      default:
        console.log('An error was reached processing the operation')
        return;
  }
}
  
  
//----------BEST PRACTICES SOLUTION----------//
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}