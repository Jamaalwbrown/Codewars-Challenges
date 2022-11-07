/* 
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
*/

/* 
Parameters: Given a string named str. Can string have numbers? special characters? Any funny biz?

~~~~~~~~~~~~~~~~~~~~~~~~~

Return: Return a string transformed as given by the rules

~~~~~~~~~~~~~~~~~~~~~~~~~

Examples: 
stringTransformer('Example Input' ----> 'iNPUT eXAMPLE' 

stringTransformer('Example string') ----> 'STRING eXAMPLE'

stringTransformer('Example With More    Spaces') ----> 'sPACES    mORE wITH eXAMPLE'

~~~~~~~~~~~~~~~~~~~~~~~~~

Pseudocode:
First we check if the string is empty. If so then return an empty string

Break the string up into an array of characters

Iterate through the array. For each character we modify as appropriate for the rules given. 

For each character we make lower case or uppercase dependent on the current status of hte character. If it is a space then we skip it
*/

function stringTransformer(str) {
    if (str.length === 0) {
      return ''
    }
  
    let result = str.split('')
      .map((c, i , a) => {
        
        if(c.toLowerCase() === c) {
          return c.toUpperCase()
        } else {
          return c.toLowerCase()
        }
      })
      .join('')
  
    console.log(result);
    return result.split(' ').reverse().join(' ')
  }
  
  stringTransformer('Example Input');
  stringTransformer('Example string');
  stringTransformer('Example With More    Spaces');
  