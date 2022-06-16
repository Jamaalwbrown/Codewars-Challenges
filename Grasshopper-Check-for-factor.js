// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

//-----------MY SOLUTION--------------//

//PREP
//Parameters: Two integers. Base and factor. Base is a non-negative number. Factor is a positive number

//Return: Boolean (True if Factor is a factor of Base). False otherwise

//Constraints: We don't need to worry about negative numbers
 
//Examples: 
//(checkForFactor(2450,5) ---> True
//(checkForFactor(63,7)  ---> True
//(checkForFactor(24612,3)  ---> True
//(checkForFactor(653,7) ----> False
//(checkForFactor(2453,5) ----> False
//(checkForFactor(24617,3)  ----> False
  
//Psuedocode: Use the module % operation and check if there is a remainder for base % factor. If not then factor is a factor of base.
//If there is a remainder then factor isn't a factor of base

function checkForFactor (base, factor) {
    return ((base % factor) === 0) ? true : false;
  }
   
