// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//-----------MY SOLUTION--------------//
function makeNegative(num) {
    return (num < 0) ? num : -num;
  }

//----------BEST PRACTICES SOLUTION----------//
  function makeNegative(num) {
    return -Math.abs(num);
  }


//   Write a function called repeatStr which repeats the given string string exactly n times.

//   repeatStr(6, "I") // "IIIIII"
//   repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//-----------MY SOLUTION--------------//
function repeatStr (n, s) {
    return s.repeat(n);
  }



//----------BEST PRACTICES SOLUTION----------//
function repeatStr (n, s) {
    return s.repeat(n);
  }



//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//   Examples:
  
//   solution('abc', 'bc') // returns true
//   solution('abc', 'd') // returns false

function solution(str, ending){
    return str.endsWith(ending);
  }




//   In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

//   The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
  
//   Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
  
//   You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
  
//   The string has a length greater or equal to one and contains only letters from ato z.
  
//   Examples:
//   s="aaabbbbhaijjjm"
//   printer_error(s) => "0/14"
  
//   s="aaaxbbbbyyhwawiwjjjwwm"
//   printer_error(s) => "8/22"


//-----------MY SOLUTION--------------//
function printerError(s) {
    let denominator = s.length;
    let numerator = s.match(/[nopqrstuvwxyz]/gi)
    if (numerator === null) {
      return `${0}/${denominator}`;
    }
    else {
      return `${numerator.length}/${denominator}`;
    }
    
}

//----------BEST PRACTICES SOLUTION----------//
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}