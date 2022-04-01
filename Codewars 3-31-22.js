// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    const words = str.split(' ');
    let tempArr = [], resultArr = [];
    
    for (let i = 0; i < words.length; i++) {
      tempArr = words[i].split('').reverse();
      resultArr.push(tempArr.join(''));
      console.log(resultArr);
    }
    
   return resultArr.join(' ')
  }


//------------Best Practices Solution-------------------//
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }
