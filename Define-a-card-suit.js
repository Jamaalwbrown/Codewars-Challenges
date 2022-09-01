/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

//-----------MY SOLUTION--------------//

/*PREP
//Parameters: 
We are given a string which will hold the value of a playing card (number and suit)
Will the suit always be the second character in the string? Will the suit and number change places in the string?


//Return:
We need to return the suit that the card is a part of. Return will be the value of a string. Suit will be passed in as an argument to the function
What do we return if we are given an empty string

//Examples: 
defineSuit('Q♠')-----> 'spades'
defineSuit('9♦')-----> 'diamonds'
defineSuit('J♥')-----> 'hearts'

//Psuedocode:
Look at the string that is passed into the function.
If it is empty, return null
If the string has contents then we look at the second character of the string.
Depending on the suit that is there we return one of the expected outputs using conditional logic
*/ 
  
function defineSuit(card) {
    if (card.length === 0) {
        return null;
    }

    switch (card.slice(-1)) {
        case '♣':
            return 'clubs';
        case '♦':
            return 'diamonds';
        case '♥':
            return 'hearts';
        case '♠':
            return 'spades';
        default:
            return null
    }
  }

 