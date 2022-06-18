// # The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// # such as

// # F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// # Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// # F(n) * F(n+1) = prod.

// # Your function productFib takes an integer (prod) and returns an array:

// # [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// # depending on the language if F(n) * F(n+1) = prod.

// # If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// # [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// # F(n) being the smallest one such as F(n) * F(n+1) > prod.

// # Some Examples of Return:
// # (depend on the language)

// # productFib(714) # should return (21, 34, true), 
// #                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// # productFib(800) # should return (34, 55, false), 
// #                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// # -----
// # productFib(714) # should return [21, 34, true], 
// # productFib(800) # should return [34, 55, false], 
// # -----
// # productFib(714) # should return {21, 34, 1}, 
// # productFib(800) # should return {34, 55, 0},        
// # -----
// # productFib(714) # should return {21, 34, true}, 
// # productFib(800) # should return {34, 55, false}, 
// # Note:
// # You can see examples for your language in "Sample Tests".

//-----------MY SOLUTION--------------//

//PREP
//Parameters: variable called prod (integer) that represents the product F(n) * F(n+1) should equal

//Return: an array with [F(n), F(n+1), boolean], F(n) and F(n+1) are either than numbers that equal the product or are greater than the product
//boolean is true if F(n) * F(n+1) = prod, else it is false

//Constraints: 
//Only dealing with integers and not floats.
//In the event that F(n) * F(n+1) != prod, then we must return F(n) and F(n+1) that is > prod
 
//Examples: 
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
  
//Psuedocode:
//1. First we build our fibonacci function using recursion. We will use this function in our productFib function to make things a bit more modular and readable
//2. In the main function we will build our equation. Check if prod = fibonacci(n) * fibonacci(n+1), where n will be a loop variable i.
//3. We will run this loop checking for this condition until it evaluates to true or prod < fibonacci(n) * fibonacci(n+1)
//4. If true we push F(n), F(n+1), and true in an array. If false we push F(n), F(n+1), and false


function productFib(prod){
    let n = 0, F, F1, loopFlag = 1, resultArr = [];
    
    while (loopFlag === 1) {
      F = fibonacci(n);
      F1 = fibonacci(n + 1);
      
      if (prod === F * F1) {
        resultArr.push(F, F1, true);
        loopFlag = 1;
      }
      
      if (prod < F * F1) {
        resultArr.push(F, F1, false);
        loopFlag = 0;
      }
      n++;
    }
    return resultArr;
  }
  
  const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
   
