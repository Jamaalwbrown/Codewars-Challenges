// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


///----My Solution-----///
String.prototype.toJadenCase = function () {
    let arr = this.split(' ');
    let word;
    for (let i=0; i < arr.length; i++) {
      word = arr[i];
      word = word.charAt(0).toUpperCase() + word.slice(1);
      arr[i] = word;
    }
    return arr.join(' ')
    }
  
///-----Codewars Best Practices Solution------////
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  
/*--------------------------------------------------*/
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


  ///----My Solution-----///
  function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function (a, b) {
      return a-b;
    })
    
    return numbers[0] + numbers[1];
  }
  
  ///-----Codewars Best Practices Solution------////
  function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };
  
  /*--------------------------------------------------*/
  




  ///----My Solution-----///

  
  ///-----Codewars Best Practices Solution------////
 
  
  /*--------------------------------------------------*/
  