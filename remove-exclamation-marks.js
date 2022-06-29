//-----------MY SOLUTION--------------//

//PREP
//Parameters: A string is passed into the function

//Return: A string with all exclamation marks removed

//Constraints: Exclamation marks can be anywhere
//Must be able to handle empty strings
 
//Examples: 
//removeExclamationMarks("Hello World!") ----> "Hello World"
//removeExclamationMarks("") ----> ""
  
//Psuedocode: 
//1. Check for an empty string. If so then return an empty string
//2. If not then split s paramter into an array
//3. filter that array for the anything thats not an '!' and copy results to new array
//4. join that new array back together into a string and return it

function removeExclamationMarks(s) {
    if(s.length === 0){
      return "";
    }
    return s.split('').filter(element => element !== '!').join('');
  }