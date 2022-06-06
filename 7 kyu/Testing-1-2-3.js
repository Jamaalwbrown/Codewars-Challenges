// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

//-----------MY SOLUTION--------------//

//Parameters: 
// A list of strings (type of array)

//Return: 
//An array of strings where the first part is a number (n) and the second part is the string that was passed to the function

//Constraints: 
//Must be able to handle an empty array
//strings in the passed list/array can be any length
//array can be any length

//Examples: 
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
  
//Psuedocode:
//move through each element/string in the passed array and map them to a new array with the appropriate number (n) put in front of 
//each string

var number=function(array){
    let n = 1;
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
      resultArr.push(`${n}: ${array[i]}`)
      n++;
    }
    
    return resultArr;
  }
   
  
//----------BEST PRACTICES SOLUTION----------//
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }