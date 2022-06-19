// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//-----------MY SOLUTION--------------//
   
function doubleChar(str) {
    let resultArr = [];
     const str1 = str.split('');
     for (let i = 0; i < str1.length; i++) {
       resultArr.push(str1[i], str1[i]);
     }
     return resultArr.join('');
   }  
//----------BEST PRACTICES SOLUTION----------//

const doubleChar = (str) => str.split("").map(c => c + c).join("");