/*
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

*/

//Parameters: Given an array of arrays, can array given be empty?, will it always be an array of numbers?, Could it be an array of strings, booleans or special characters?

//Returns: a number, number represents number of unique arrays that can be formed picking exactly one element from each subarray, 

//Constraints: Can't count duplicates. Each array must be unique and not a repeated

//solve([[1,2],[4],[5,6]]) = 4 because [1,4,5],[1,4,6],[2,4,5],[2,4,6]
//solve([[1,2],[4,4],[5,6,6]]) = 4 because [1,4,5], [1,4,6], [2,4,5], [2,4,6]
//solve([[1,2],[3,4],[5,6]]) = 8 because [1,3,5], [1,3,6], [1,4,5], [1,4,6], [2,3,5] ...
//solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]) = 72

//no funny biz arr - arr multiple each uni sub array
//num -> uni comb

function solve(arr){
    //set -> unique values
    //map [1,2],[4,4],[5,6,6] -> 2, 1, 2 cause there are 2 unique values , 1 unique vals, 2 unique values
    //reduce -> 2*1*2
    return arr.map(sA => new Set(sA).size).reduce((a,c) => a*c, 1)
}

// const solve = arr => arr.reduce((a,c) => a * new Set(c).size, 1)

console.log(solve([[1,2],[4],[5,6]]), '4')
console.log(solve([[1,2],[4,4],[5,6,6]]), '4')
console.log(solve([[1,2],[3,4],[5,6]]), '8')
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]), '72')
