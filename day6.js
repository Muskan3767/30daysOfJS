//activity 1: array creation and acesss

//Task 1--> array of numbers from 1 to 5
const nums1 = [1,2,3,4,5];
console.log(nums1);
//Output : [ 1, 2, 3, 4, 5 ]

//task 2 : access first and last element of array and log them to console
console.log(array[0]); // First element
console.log(array[array.length - 1]); // Last element

//activity 2: ARRAY METHODS

//task 3 : push method to add new element to array and log the new array to console
array.push(6);
console.log(array)

//task 4 : pop method to remove last element from array and log the updated array to console
array.pop();
console.log(array);

// Task 5: shift method to remove first element from array and log the updated array to console
array.shift();
console.log(array);

// Task 6:  unshift method to add element to beginning and log new array to console
array.unshift(0);
console.log(array);

//Activity 3:Array method (intermediate)


//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledArray = array.map(num => num * 2);
console.log('Doubled array:', doubledArray);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenArray = array.filter(num => num % 2 === 0);
console.log('Even array:', evenArray);

// Task 9:Use the reduce method to calculate the sum of all numbers in the array and log the result
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//Activity 4:Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
array.forEach(element => console.log(element));

//Activity 4:Multiple Dimensional array

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Matrix:', matrix);

//Task 13: Access and log a specific element from the two-dimensional array
console.log('Specific element:', matrix[1][2]); 
