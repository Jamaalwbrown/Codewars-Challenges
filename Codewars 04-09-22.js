// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//----------MY SOLUTION-------------////
function squareDigits(num){
    console.log(num);
    let numArr = String(num).split('');
    let resultArr = numArr.map(element => element * element);
    return Number(resultArr.join(''));
    
  }




  //----------CODEWARS BEST PRACTICES SOLUTION-------------////
  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }





//   Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).


//----------MY SOLUTION-------------////
function roundToNext5(n){
            if(n > 0)
            return Math.ceil(n/5) * 5;
        else if( n < 0)
            return Math.floor(n/5) * 5;
        else
            return 5;
  }


   //----------CODEWARS BEST PRACTICES SOLUTION-------------////
   function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }