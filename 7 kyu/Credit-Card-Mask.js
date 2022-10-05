/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

//-----------MY SOLUTION--------------//

//PREP
//Parameters:
-We are passed a string as an argument to our function
-We must plan for the edge case of if the string is empty
-string can have numbers or characters in it

//Return: 
-We have to return a string with all except that last 4 elements replaced with a '#'
-If an empty string was passed as an argument then we need to return and empty string ' '

//Examples:

maskify("4556364607935616") ----> "############5616"

maskify("64607935616") -------> "#######5616"

maskify("1") -------> "1"

maskify("") ------->  ""

maskify("Skippy") ------>  "##ippy"

maskify("Nananananananananananananananana Batman!") ------>  "####################################man!"

//Psuedocode:
Check if the string is empty
    -If so then return an empty string
    else continue on

Calculate the length of the string
    if the length of the string is less than 4, return the string as it is

take the length of the string and subtract 5 from it
the result will be the index to stop adding #'s
replace each letter in the string from the beginning to the calculated index with a #

  
*/

function maskify(cc) {
    let strLength = cc.length;
    const mask = '#'
    if (strLength === 0) {
        return ''
    }

    if (strLength <= 4) {
        return cc
    }

    let result = mask.repeat(strLength - 4);
    result = result + cc.slice(strLength - 4)

    return result;

}

maskify("4556364607935616");