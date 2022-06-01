// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//My solution
function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

//Codewars Best Practices Solution
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }


//   A square of squares
//   You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
  
//   However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
  
//   Task
//   Given an integral number, determine if it's a square number:
  
//   In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
  
//   The tests will always use some integral number, so don't worry about that in dynamic typed languages.
  
//   Examples
//   -1  =>  false
//    0  =>  true
//    3  =>  false
//    4  =>  true
//   25  =>  true
//   26  =>  false  

//My solution
var isSquare = function(n){
    if (n < 0) {
      return false;  
    }
    else {
      return Number.isInteger(Math.sqrt(n))
    }
  }


//Codewars Best Practices Solution
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }


//   In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//   At the end of the first year there will be: 
//   1000 + 1000 * 0.02 + 50 => 1070 inhabitants
  
//   At the end of the 2nd year there will be: 
//   1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
  
//   At the end of the 3rd year there will be:
//   1141 + 1141 * 0.02 + 50 => 1213
  
//   It will need 3 entire years.
//   More generally given parameters:
  
//   p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
  
//   the function nb_year should return n number of entire years needed to get a population greater or equal to p.
  
//   aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
  
//   Examples:
//   nb_year(1500, 5, 100, 5000) -> 15
//   nb_year(1500000, 2.5, 10000, 2000000) -> 10
//   Note:
//   Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
  

//My solution
function nbYear(p0, percent, aug, p) {
    let newPopulation = 0, years = 0;
    console.log(`p0 is: ${p0}, percent is: ${percent}, aug is: ${aug}, and p is: ${p}`);
  while (p0 < p) {
      newPopulation = Math.floor(p0 + p0*(percent/100) + aug);
      p0 = newPopulation;
      years++;
    }  
    
    return years;
  }

//Codewars Best Practices Solution
function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }