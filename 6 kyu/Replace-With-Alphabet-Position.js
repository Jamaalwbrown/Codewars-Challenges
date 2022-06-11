// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//-----------MY SOLUTION--------------//

//PREP
//Parameters: text (String)

//Return: passed in text (string) with every letter replaced with its position in the alphabet

//Constraints: If anything in the text isn't a letter, ignore it and don't return it
 
//Examples: 
// alphabetPosition("The sunset sets at twelve o' clock.") ----> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
  
//Psuedocode:
//Take the text(string) and split the string using string.split() into an array of letters/characters.
//Iterate through the array and test each character on if its a letter.
//If it is a letter then check its location in the alphabet and map to new array
//To check where a letter is in the alphabet we can use findIndex() method to check an array of alphabets we hardcoded
//If it's not a letter, don't map it to the new array
//join the new array of alphabet positions back together into a string using array.join()
//return this new string
   
function alphabetPosition(text) {
    //We hardcode an alphabet array to check for alphabet position later on
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    //Define our result array and a variable to hold the characer position
    let alphaNumArr = [];
    let characterPos;
    
    
    text.toLowerCase().split('').forEach((character) => { 
      if (alphabet.includes(character)) {
        characterPos = alphabet.indexOf(character) + 1;
        alphaNumArr.push(String(characterPos));
      }
    });
    
    return alphaNumArr.join(' ');
}
   
  
//----------BEST PRACTICES SOLUTION----------//
function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
  }