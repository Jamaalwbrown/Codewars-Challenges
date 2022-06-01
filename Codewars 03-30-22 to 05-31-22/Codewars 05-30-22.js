// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
//A word (primivitive data type is a string)

//Return:
//A pattern of parenthesis(primivitive data type of string)
// "(" when a character appears only once in the passed word
// ")" when a character appears more than once in the passed word

//Constraints: 
//We can ignore capitalization when searching for duplicate characters
//Assume we can be given things other than letters/characters. We can be given symbols, numbers, etc


//Examples: 
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
  
//Psuedocode:
//1. First we should split the string into an array so we can work with it easier
//2. Next we will map each element to a new array using a function that takes the current element selected and iterates through the 
//array checking for the number of occurences of that element
//3. If the element only appears once we map a "(". If the element appears more than once then we map a ")"
//4. Store the result of the map in a variable. Combine the array back into a string and return from the function

   

function duplicateEncode(word){
    //Convert word to lowercase and split into an array of characters
      let wordArr = word.toLowerCase().split("");
    //map the array of characters to the encoded version using duplicateFinder callback function
      let encodedArr = wordArr.map(duplicateFinder);
   // return the encoded array after being joined back together into a string
      return encodedArr.join('');
  }
  
  //duplicateFinder takes the current element and the full array passed to it by the map function and 
  //loops through the array counting the occurences of the current element
  //If the count is greater than 1 we return a ")" to the map function
  //If the count is 1 then we return a "(" to the map function
  function duplicateFinder(element, index, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (element === array[i]) {
        count++;
      }
    }
    
    if(count > 1) {
      return ")"
    }
    else {
      return "("
    }
  }
   
  
//----------BEST PRACTICES SOLUTION----------//
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }