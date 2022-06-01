// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//------- MY SOLUTION ---------//
function squareSum(numbers){
    //First use map to square each number in the array.
    //Then use reduce to sum through the array
    return numbers.map(element => Math.pow(element, 2)).reduce((previous, current) => previous + current, 0 );  
  }


//------- CODEWARS BEST PRACTICES SOLUTION ---------//
  function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }
  


//   Description:
//   Make a simple function called greet that returns the most-famous "hello world!".
  
//   Style Points
//   Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?


//------- MY SOLUTION ---------//
function greet() {
    return "hello world!";
    }



    // Return the number (count) of vowels in the given string.

    // We will consider a, e, i, o, u as vowels for this Kata (but not y).
    
    // The input string will only consist of lower case letters and/or spaces.

    //------- MY SOLUTION ---------//
    function getCount(str) {
        let vowelsCount = 0;
        
        vowelsCount += str.split('').filter(letter => letter === 'a').length;
        vowelsCount += str.split('').filter(letter => letter === 'e').length;
        vowelsCount += str.split('').filter(letter => letter === 'i').length;
        vowelsCount += str.split('').filter(letter => letter === 'o').length;
        vowelsCount += str.split('').filter(letter => letter === 'u').length;
      
        
        return vowelsCount;
      }



//------- CODEWARS BEST PRACTICES SOLUTION ---------//
    function getCount(str) {
        return (str.match(/[aeiou]/ig)||[]).length;
        }