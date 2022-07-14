//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
//a string with a varying number of words in it. Words may have punctuation marks separated by a space

//Return: 
//a string of one or multiple words separated by spaces with 'ay' appended to the end of each word UNLESS that word is a punctuation mark 

//Examples: 
// pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay' || pigIt('This is may string'), 'hisTay siay ymay tringsay')
  
//Psuedocode:
//Split the string into individual words, then split each word into two parts - the first letter, and the rest of the string. Reverse the order of these parts, and concatenate them back together. Check if a word is actually a punctuation mark and if it is NOT then add "ay" to the end. Concatenate the individual words back into a single string and return

 //push, slice, charCodeAt, split, join, map, reverse, match 
 
 function pigIt(string) {
    let marks = ['.', '!', '?', '"', ',']
    result = string.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ') 
    console.log(result);
 }

 pigIt('Hello World !');
  
//----------BEST PRACTICES SOLUTION----------//