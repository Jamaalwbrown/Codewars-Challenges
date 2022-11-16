/*
//-----------MY SOLUTION--------------//

//PREP
//Parameters:
-We are given an array of numbers.
-Are we given negative numbers?
-Are we given an empty array?


//Return: 
Return an array of numbers with odd numbers sorted in acsending order, but the even numbers in the same place as the array argument passed into the function
Return an empty array if the function argument is an empty array or null?


//Examples: 
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

  
//Psuedocode:
Take in the array of numbers argument
Check if array is empty / array.length is equal to 0
    If empty then we return an empty array as well
Create a result array called "resultArr"
Create another array called "oddArray"
We extract all the odd numbers from array and sort them in ascending order and store them in oddArray

We iterate through the array. 
On each iteration we check if the number is odd
    If odd then we overwrite the element with the element in our odd array
    We move the index of our oddArray to the next element
    repeat the above steps 
   
*/

// function sortArray(array) {
//     if (array.length === 0) {
//         return [];
//     }

//     //create resultant array for use later
//     const resultArr = []

//     //Building our sorted odd array
//     const oddArr = array.filter(number => number % 2 !== 0);
//     oddArr.sort((a, b) => a - b);


//     //iterate through array, copy value directly into result array if even, copy sorted odd value into result array if odd
//     let j = 0;
//     for (let i=0; i < array.length; i++) {
//         if(array[i] % 2 !== 0) {
//             resultArr[i] = oddArr[j];
//             j++
//         }
//         else {
//             resultArr[i] = array[i];
//         }
//     }

//     // Return a sorted array.
//     return resultArr;
// }  

// Updated with a more optimized solution. It sorts the array in descending order and uses the pop method to reduce time complexity

function sortArray(arr){
    //filter -> sort
    const oddNums = arr.filter(n => n % 2 !== 0).sort((a,b)=>b-a)
    //console.log(oddNums)
    //map
    return arr.map(n => n % 2 === 0 ? n : oddNums.pop())
  }
  console.log(sortArray([7, 1]),'[1,7]')
  console.log(sortArray([5, 8, 6, 3, 4]),'[3, 8, 6, 5, 4]')
  console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), '[1, 8, 3, 6, 5, 4, 7, 2, 9, 0');
