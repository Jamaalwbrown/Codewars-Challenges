/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

//-----------MY SOLUTION--------------//

//PREP
//Parameters: 
-We are given a string called "str"
-String can be any length and will have dash/underscore delimted words
-Maybe they will give us an empty string? I should account for that
-Will they give us a string of numbers? I should consider that


//Return: 
-We return a string with the appropriate casing. 
-We return Pascal case if the original String was pascal case or camel case if the original string did not have it's first word capitalized
-If an empty argument was passed in then we should probaby return an empty argument

//Examples: 

toCamelCase("the-stealth-warrior") -----> "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") -----> "TheStealthWarrior"

toCamelCase('') -----> ''

  
//Psuedocode:
- Check if an empty string was passed as an argument
    -If so return an empty string

- Check if the first character of the string is capitalized
    -If so then keep that letter capitalized
    -Else leave it alone. It will not be capitalized in the return

Find the location of the '-' or '_'
Look at the index right after one of those characters and capitalize that letter
Save that index
Start the search from that index for the next '-' or '_'
Repeat process
   
*/
//----------BEST PRACTICES SOLUTION----------//


function toCamelCase(str){
    if (str.length === 0) {
        return ''
    }

    if (str.includes('-')) {
       const arr = str.split('-');
       const resultArr = [arr[0]];
       for (let i = 1; i < arr.length; i++) {
        resultArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
       }
       return resultArr.join('');
    }

    if (str.includes('_')) {
        const arr = str.split('_');
        const resultArr = [arr[0]];
        for (let j = 1; j < arr.length; j++) {
         resultArr.push(arr[j].charAt(0).toUpperCase() + arr[j].slice(1))
        }
        return resultArr.join('');
     }

    
}

//console.log(toCamelCase("the-stealth-warrior"));

//console.log(toCamelCase("The_Stealth_Warrior"));

console.log(toCamelCase(''));