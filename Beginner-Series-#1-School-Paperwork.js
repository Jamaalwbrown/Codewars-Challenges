// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!
//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
//2 parameters. n which is the number of classmates(number). m which is how many pages the paperwork has (number).

//Return: 
//The number of pages you have to copy (number). If n < 0 and m < 0 return 0

//Constraints: 
//We can expect some cases where n and m is negative
//

//Examples:
// n= 5, m=5: 25
// n=-5, m=5:  0
  
//Psuedocode:
//Check if both n and m is 0. If not true then return n * m;

function paperwork(n, m) {
    if(n < 0 || m < 0) {
      return 0;
    }
    else {
      return n * m;
    }
  }
   
  
