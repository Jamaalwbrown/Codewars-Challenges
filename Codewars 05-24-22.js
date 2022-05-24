// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//PREP
//Parameters: 
//a name(type of string)

//Return: 
//String: the name given + either plays banjo or does not play banjo 

//Constraints: 
//always given a name in the form of a string
//may get a string with different characters other than letters
 
//Examples: 
// areYouPlayingBanjo("Adam") --> "Adam does not play banjo"
// areYouPlayingBanjo("Paul") --> "Paul does not play banjo"
// areYouPlayingBanjo("Ringo") --> "Ringo plays banjo"
// areYouPlayingBanjo("bravo") --> "bravo does not play banjo"
// areYouPlayingBanjo("rolf") --> "rolf plays banjo"

//Psuedocode:
//1. call tolowercase on the name(string) passed to the function to handle cases
//2. check to see if the first letter of the string is an r
//3. if true then return name + "plays banjo", if false then return name + "does not play banjo"
//-----------MY SOLUTION--------------//

function areYouPlayingBanjo(name) {
    let testName = name.toLowerCase();
    if (testName[0] === 'r') {
      return name + " plays banjo";
    }
    else {
      return name + " does not play banjo"
    }
    return name;
  }
  
//----------BEST PRACTICES SOLUTION----------//
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

