//----------MY SOLUTION-------------////
function isPangram(string){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const str = string.toLowerCase();
    
    for(let i=0; i < alphabet.length; i++) {
      if (str.indexOf(alphabet[i]) < 0) {     //indexOf will return -1 if it doesn't find an alphabet in the string.
        return false                          //if it goes through the whole string and finds all the alphabets it will return the index
      }
    }
    return true;
  }



//------- CODEWARS BEST PRACTICES SOLUTION ---------//
function isPangram(string){
    string = string.toLowerCase();
    
    //Here we split an alphabet string use the every array method which returns true if the callback function returns true for every
    //element of the alphabet array. Otherwise it returns false. Our callback function is string.indexOf(alphabet) !== -1
    //indexOf returns -1 if the alphabet is not in the string. So we return true if indexOf does not return -1 thus saying the alphabet is in the string
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }