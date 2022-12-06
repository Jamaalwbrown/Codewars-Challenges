/*
Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be an empty object literal, {}.f

Parameters:
We are given a string of letters/characters
-If given an empty string we need to handle it properly
-What if the string has characters other than letters? Should we handle numbers, special chars, any funny business

Returns:
We return an object with each letter/character in the string as a property and the count of that letter/character as its value.
If we are given an empty string, then we return an empty object

Examples: 
count('aba') -----> {'a': 2, 'b': 1}
count('abaababa') -----> {'a': 5, 'b': 3}
count('abacadt') -----> {'a': 3, 'b': 1, 'c': 1, 'd': 1, 't': 1}

Psuedocode:
Iterate through the string given
For each character in the string we will do an analysis and build out our object
If the character is new then we add it as a property and 1 as the value in our object
If the character has been seen before, then we simply increment the value in our object

*/

function count (string) {  
    let countObj = {};
    for(const c of string) {
      if(countObj[c]) {
        countObj[c]++
      }
      else{
        countObj[c] = 1;
      }
    }
     return countObj;
  }
  