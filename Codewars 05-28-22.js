// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//-----------MY SOLUTION--------------//

//PREP
//Parameters: digits(type of string)

//Return: modified string of digits (type of string)

//Constraints: No empty string given
            // No string of characters given
 
//Examples: 
//fakeBin('45385593107843568') ===> '01011110001100111'
//fakeBin('509321967506747') ===> '101000111101101'
//fakeBin('366058562030849490134388085') ===> '011011110000101010000011011'
  
//Psuedocode:

function fakeBin(x){

    let numArr = x.split('').map((element) => { return (element < 5) ?  0 : 1}).join('');
    return numArr;
    }
   
  
//----------BEST PRACTICES SOLUTION----------//
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// Code as fast as you can! You need to double the integer and return it.
//-----------MY SOLUTION--------------//

//PREP
//Parameters: 

//Return: 

//Constraints: 
 
//Examples: 
  
//Psuedocode:

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }
  
//----------BEST PRACTICES SOLUTION----------//
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }


//   Enough is enough!
//   Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
//   He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
//A list/array of numbers, number = max number of times a number in the list can occur

//Return:
//The original list/array of numbers with the occurences of the numbers cut to the number provided as a paramater

//Constraints:
//always get an array of numbers. Won't receive an array of other characters
//No negative numbers provided
//Maybe prepare for the edge case of an empty array

//Examples: 
//deleteNth([20,37,20,21], 1) ---> [20,37,21]
//deleteNth([1,1,3,3,7,2,2,2,2], 3) ----> [1, 1, 3, 3, 7, 2, 2, 2]

//Psuedocode:
//We need to count the occurences of each number in the array then have a conditional based on that count
//iterate through the array and count the occurence of one number


function deleteNth(arr,n) {
    let resultarr = [ ];
    for(let i = 0; i < arr.length; i++){
      if(count(resultarr, arr[i]) < n) {
        resultarr.push(arr[i]);
      }
    }
    return resultarr;
  }
  
   //loop through the array and count the occurence of one number
    function count(array, number) {
      let cnt = 0
      for (let i = 0; i < array.length; i++) {
        if(array[i] === number) {
          cnt++;
        }
      }
      return cnt;
    }
   
  
//----------BEST PRACTICES SOLUTION----------//
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }


//-----------MY SOLUTION--------------//

//PREP
//Parameters: 

//Return: 

//Constraints: 
 
//Examples: 
  
//Psuedocode:
   
  
//----------BEST PRACTICES SOLUTION----------//