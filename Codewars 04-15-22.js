// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }



//   Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

//-------------MY SOLUTION-------------//
function sumOfMinimums(arr) {
    let sum = 0;
    //Loop through the outer array
    arr.forEach(element => {
      element.sort((a, b) => a - b);  //sort each nested array in ascending order
      sum += element[0];              //Add minimum number in place 0 of each nested array to the sum
    });
    
   return sum;
  }



  //----------CODEWARS BEST PRACTICES SOLUTION---------------//
  function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }



//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


//-------------MY SOLUTION-------------//
function disemvowel(str) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u'] //create a vowel array to compare with each letter of the string
    //Split the string into an array of letters
    //filter the array of letters by testing each letter if its a vowel using the array includes method
    //at the end we join the array back into a string and return it
    return str.split('').filter(letter => (!vowelArr.includes(letter.toLowerCase()))).join('');
  }

  //----------CODEWARS BEST PRACTICES SOLUTION---------------//
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }