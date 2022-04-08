// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//My attempt which did not pass
// write the function isAnagram
var isAnagram = function(test, original) {
    let testCnt = 0;
    let testArr = original.split('');
    if(test.length !== original.length) {
        return false
    }

    for (let i = 0; i < test.length; i++) {

        for(let j = 0; j < testArr.length; j++) {
            if(test[i] === testArr[j]) {
                testCnt++;
                testArr.shift();
            }
        }
    }

    if (testCnt = test.length) {
        return true
    }
    else {
        return false;
    }
};


//Provided Solution

// write the function isAnagram
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };

