/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

//Parameters: we are given a string called "word", can there be an empty string given?, can we be given a string of numbers?

//Return: a string with only "(" or ")" based on the constraints given in the problem. Maybe return an empty string if an empty string was provided

//Constraints: if a character appears once in the word then it is replaced with a "(". If a character appears more than once in the word then we replace it with a ")". We ignore capitalization on duplicates

//duplicateEncode("din") ----> "((("
//duplicateEncode("recede") ----> "()()()"
//duplicateEncode("Success") ----> ")())())"
//duplicateEncode("(( @") ----> "))(("

/*
Pseudocode
-Check if word is empty. If so return an empty string
-Break up the word into an array using split string method
-We use the array map method and pass in a callback
-
*/


function duplicateEncode(word) {
    //check if word passed in is empty 
    if (word.length === 0) {
      return ""
    }
  
    //Break up word into array and begin mapping to new array
    const result = word.toLowerCase().split('').map((c, i, a) => {
      //if the first index and last index are equal then there is only one occurence of the character. Else then we know we have duplicates
      if (a.indexOf(c) == a.lastIndexOf(c)) {
        return '('
      }
      else {
        return ')'
      }
    })
      .join('');
  
    return result;
  }
  
  console.log(duplicateEncode("din"), "(((")
  console.log(duplicateEncode("recede"), "()()()")
  console.log(duplicateEncode("Success"), ")())())")
  console.log(duplicateEncode("(( @"), "))((")
  console.log(duplicateEncode("Supralapsarian"), ')()))()))))()(')