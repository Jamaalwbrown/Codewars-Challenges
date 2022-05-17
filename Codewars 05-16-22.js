//-----------MY SOLUTION--------------//
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  //inputs: two arrays
  //outputs: one array

  //iterate through array a and check each value for the first value in array b
  //if there is a match, pull the value out of array a
  //repeat this iteration process for every value in array b
  //return the modified array a

    for (let i = 0; i < b.length; i++) {
       for (let j = 0; j < a.length; j++) {
           if(a[j] === b[i]) {
               a.splice(j, 1);
               j = 0;
           }
       }
   }
 
   return a;
}



//----------BEST PRACTICES SOLUTION----------//
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }


//-----------------------------------------------//
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//-----------MY SOLUTION--------------//
function isValidWalk(walk) {
    //First check if we have 10 directions or 10 elements in the array. If not then function returns false
    if (walk.length !== 10) {
        return false;
    }
    //Next we will iterate through the array and count how many of each element there is
    let walkTime = 0;
    for (let i = 0; i < walk.length; i++){
        if(walk[i] === 'n') {
            walkTime += 1;
        }
        if(walk[i] === 's') {
            walkTime -= 1;
        }
        if(walk[i] === 'e') {
            walkTime += 2;
        }
        if(walk[i] === 'w') {
            walkTime -= 2;
        }
    }

    //last we check if the counts of each element are equal. This will tell us if we've made it back to our original spot
    if(walkTime === 0) {
        return true;
    }
    else {
        return false;
    }

  }



//----------BEST PRACTICES SOLUTION----------//
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }


//----------TEST CASES----------//
