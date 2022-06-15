// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

//-----------MY SOLUTION--------------//

//Parameters: String that contains a single number in each word of the string (type String) 
// Note that the numbers in the strings are in the form of a string and not a number

//Return: A string with the words in the correct order indicated by the numbers in each worde
//Does the word in the returned string have to have the number removed or do we keep the number?

//Constraints: Numbers in each word in the string range from 1 to 9
//We will be given consecutive numbers.
//Empty strings given must return an empty string
 
//Examples:
// "is2 Thi1s T4est 3a" --> "This is a Test"
// "4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
  
//Psuedocode:
//1. Test if string is empty. Check for string.length === 0. If true, return empty string. Else, continue
//2. Take the string and turn it into an array for words via string split method
//3. Create an array of numbers from 1 to 9. Iterate through the array and analyze each word checking against the array of numbers
//4. We should search the whole word array for each number of the num array. Search all the words for the number 1, then the number 2, etc
//5. When a number is found in a word. We extract the word and push it onto our result array that we will return
//6. Return the result array after it has been joined back into a string

function order(words){
    if (words.length === 0) {
      return "";
    }
    else {
      let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let wordArr = words.split(' ');
      let resultArr = [];
      for (let i = 0; i < numArr.length; i++) {
        for (let j = 0;  j < wordArr.length; j++) {
           if(wordArr[j].includes(numArr[i])) {
             resultArr.push(wordArr[j]);
           }
        }
      }
      return resultArr.join(' ');
    }
  }