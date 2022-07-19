//Parameters: A single array wiht multiple types of elements including numbers, string, booleans

//Return: A single array with the same elements BUT the zeros are moved to the end of the array. The other elements should remain in the same location in the array.

//Examples:
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])

//Psuedocode: iterate over the starting array an identify the zeros. We could take the existing zeros and move them to the end of the array or we could count the zeros, remove them, then append the correct number of zeros to the end of the array
