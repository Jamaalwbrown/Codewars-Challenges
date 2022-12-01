/*
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

Parameters:
Given an array of strings
Can we be given an empty array?
Are special characters included?

Returns:
An array of strings with all consecutive duplicate letters from each string in the array removed
strings are only in lowercase
no spaces in strings

Examples:

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) ---->['codewars','picaniny','hubububo'])

dup(["abracadabra","allottee","assessee"]) -----> ['abracadabra','alote','asese'])

dup(["kelless","keenness"]) -----> ['keles','kenes'])

Pseudocode:
Check if empty array given, if so return empty array
Iterate through the array (for loop, for of, for each, map, etc)
On each iteration look at the string and check for duplicate consecutive letters
To check for consecutive duplicates we split up the string and filter it on the condition that the element is not the same as the element before it
We join our filtered array back into a string and return it from the map callback function
return the resultant array from our map method


*/

function dup(s) {
    if(s.length === 0) {
      return [];
    }
  
    const result = s.map((word, i, a) => {
      return word.split('').filter((letter, ind, arr) => letter === arr[ind - 1] ? false : true).join('')
    })
  
    return result;
  };
  
  console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
  
  console.log(dup(["abracadabra","allottee","assessee"]), ['abracadabra','alote','asese'])
  
  console.log(dup(["kelless","keenness"]), ['keles','kenes'])