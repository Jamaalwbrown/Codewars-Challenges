// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

//-----------MY SOLUTION--------------//

//PREP
//Parameters: number of petals (integer) 

//Return: a phrase (string)

//Constraints: number of petals will be greater than 0. Number of petals will be an integer and not a float. 
              //perhaps the original message
 
//Examples:
// howMuchILoveYou(7) => 'I love you'
// howMuchILoveYou(3) => 'a lot'
// howMuchILoveYou(6) => 'not at all'

  
//Psuedocode:
//1. Put the whole phrase in an array with each portion of it in a seperate index
//2. Take the remainder of the division between nbPetals and the length of our array
//3. The remainder - 1 will be the index we use to access the part of the phrase we need to return
//4. We must handle the condition of if the index is less than 0. If index - 1 is less than 0 we return array.length - 1 instead
//5. Else we return the element access by our newly calculated index

function howMuchILoveYou(nbPetals) {
    const flowerArray = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    let index = nbPetals % flowerArray.length;
    index--;
    if (index < 0) {
      return flowerArray[flowerArray.length - 1]
    }
    else {
       return flowerArray[index];
    }
  }

  
//----------BEST PRACTICES SOLUTION----------//
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}