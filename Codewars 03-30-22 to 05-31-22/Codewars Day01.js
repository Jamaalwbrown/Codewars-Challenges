// Calculate Average

function find_average(array) {
    if (array.length === 0) {
      return 0;
    }
    let sum, avg
    sum = 0;
    for(let i = 0; i < array.length; i++)
      {
        sum += array[i];
      }
    avg = (sum)/(array.length);
      return avg;
    }
    
// Opposite Number 

function opposite(number) {
     return -number;
    }

// Convert a Boolean to a String
    
function booleanToString(b){
  if(b) {
    return 'true'
  }
  
  else {
    return 'false';
  }
}    


// Multiply

function multiply(a, b){
    return a * b;
  }





