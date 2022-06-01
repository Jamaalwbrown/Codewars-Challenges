// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


//----------MY SOLUTION-------------////
function sortByLength (array) {
  
    return (array.sort(function(a, b) { 
       if (a.length < b.length) {
         return -1
       }
       
       else if (a.length > b.length) {
         return 1
       }
       
       else {
         return 0
       }
       }));
     // Return an array containing the same strings, ordered from shortest to longest
   };




    //----------CODEWARS BEST PRACTICES SOLUTION-------------////
   function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };


//   Description:
//   Scenario
//   Several people are standing in a row divided into two teams.
//   The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
  
//   Task
//   Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
  
//   Notes
//   Array size is at least 1.
//   All numbers will be positive.
//   Input >> Output Examples
//   rowWeights([13, 27, 49])  ==>  return (62, 27)
//   Explanation:
//   The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
  
//   rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
//   Explanation:
//   The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
  
//   rowWeights([80])  ==>  return (80, 0)
//   Explanation:
//   The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.


   //----------CODEWARS BEST PRACTICES SOLUTION-------------////
  function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }