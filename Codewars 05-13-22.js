//-----------MY SOLUTION--------------//
//Didn't have time to solve this one. Will attempt later
function countPositivesSumNegatives(input) {
    const resultArr = [];
    resultArr[0] = input.
      return ;
  }


//----------BEST PRACTICES SOLUTION----------//
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}