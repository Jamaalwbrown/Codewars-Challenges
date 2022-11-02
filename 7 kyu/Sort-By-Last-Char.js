/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

Parameters: a string of words called x. Can the string be empty? Will words always be characters? Will there be any special characters?

Returns: An array of words, sorted alphabetically by the final character in each, if final character is the same then keep the words in the order they appeared in the string

Examples: 
last('man i need a taxi up to ubud') ----> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
last('what time are we climbing up the volcano') -----> ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
last('take me to semynak') ----> ['take', 'me', 'semynak', 'to']);

Pseudocode:
Check if str is empty. Return empty str if string given is empty
Split the string into an array of words using built in str.split method
Use the array sort method on the array
Check if a[a.length-1] < b[b.length-1]. If so then return -1
Check if a[a.length-1] > b[b.length-1]. If so then return 1
Else return 0

*/
function last(x){
    if (x.length === 0) {
      return ''
    }
  
    result = x.split(' ').sort((a, b) => {
      if(a[a.length - 1] < b[b.length - 1]) {
        return -1
      }
      if(a[a.length - 1] > b[b.length - 1]) {
        return 1
      }
  
      return 0
    })
  
    return result;
  }
  
  console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
  console.log(last('what time are we climbing up the volcano'),  ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
  console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])