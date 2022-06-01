// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).
//-----------MY SOLUTION--------------//

 //PREP
//Parameters:
//h(float value) which is the height the ball is dropped from
//bounce(float value) which is how much bounce the ball has.
//window(float value) which is the height of the window the mom is looking out of

//Return:
//If conditions are satisfied we return the amount of times the mom will see the ball pass the window (number/integer)
//If conditions aren't met then return -1 (number/integer)

//Constraints:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// Ball can only be seen if the height of rebounding ball in greater than window height
// Window will always be 1.5 meters from the ground
// h and bounce parameters can vary
// Assume float values will be in the 17 decimals for precision
 
//Examples: 
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

  
//Psuedocode:
//Check if h <= 0, true -> return -1, false -> continue
//Check if bounce is between 0 and 1, true -> continue, false -> return -1
//Check if window < h, true -> continue, false -> return -1
//Calculate number of times mom sees the ball. The equation will be bounceCalc = (bounce * h) - window
//If bounceCalc is positive, then we know we'll see the ball at least 3 times
//We have to repeat this calculation using bounce * h as the newHeight for our calculation
//We will repeat this calculation as long as the equation evaluates to a positive number
   
function bouncingBall(h,  bounce,  window) {
    if (h <= 0) {
      return -1
      }
    
    if ((bounce <= 0) || (bounce >= 1)) {
      return -1
    }
    
    if (window >= h) {
      return -1
    }
    
    let count = 0;
    let bounceCalc = (bounce * h) - window;
    let newHeight = bounce * h;
    
    if(bounceCalc >= 0) {
      count += 1;
    }
    
  console.log(`bounceCalc is ${bounceCalc}. count is ${count}. newHeight is ${newHeight}`);
    
    while(bounceCalc > 0) {
      bounceCalc = (bounce * newHeight) - window;
      newHeight = bounce * newHeight;
      count += 2;
      console.log(`bounceCalc is ${bounceCalc}. count is ${count}. newHeight is ${newHeight}`);
    }
    
   return count;
    
  }

//----------BEST PRACTICES SOLUTION----------//
function bouncingBall(h,  bounce,  window) {
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;
    
    while(h > window){
      seen += 1
      h *= bounce
      if(h > window) seen += 1
    }
    
    return seen;
  }