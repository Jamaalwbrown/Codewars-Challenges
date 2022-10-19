/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

//getAverage([2,2,2,2])

function getAverage(arr){
    //loop through the array to get sum
    let sum = arr.reduce((a,c) => a + c)
    //avg -> sum / arr.length
    //return
    return sum / arr.length
  }

  console.log(getAverage([2,2,2,2]),2);
  console.log(getAverage([1,2,3,4,5,]),3);
  console.log(getAverage([1,1,1,1,1,1,1,2]),1);

