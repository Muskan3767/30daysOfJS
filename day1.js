//Activity 1:Variable Declaration       

//Task1:Declare a variable using 'var',assign it a  number ,and log the value to the console

var num =76;
console.log(num);//output:76

//Task 2:Declare the variable using 'let',adsign it is a string ,and log the  value to the console.

let strw="Hello everyone ,muskan this side";
console.log(strw);//output:Hello everyone ,muskan this side

//Activity 2: Constant declartion

 //Task 3: Declare the variable using 'const',assign it is a boolean value ,and log the value to the console.

 const dsa = true;
console.log(dsa); // Output: true

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num = 17; // Number
let str = "muskan"; // String
let bool = false; // Boolean
let obj = {name: "muskan", Number : 8}; // Object
let arr = [1, 2, 3, 4, 5]; // Array

console.log(typeof num); // Output: number
console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let reVar = "hii everyone";
console.log(reVar); // Output: Initial Value
reVar = "hello everyone";
console.log(reVar); // Output: New Value

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constVar = "python";
console.log(constVar); // Output: python

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numberType = 76;
let stringType = "she is a good girl";
let booleanType = true;
let objectType = { key: "value" };
let arrayType = [1, 2, 3, 4, 5];
let undefinedType;
let nullType = null;

console.log( numberType, typeof numberType);
// Output: <value of numberType>, number

console.log(stringType, typeof stringType);
// Output: <value of stringType>, string

console.log(booleanType, typeof booleanType);
// Output:<value of booleanType>, boolean

console.log( objectType,  typeof objectType);
// Output:  <value of objectType>,  object

console.log( arrayType,  typeof arrayType);
// Output:   <value of arrayType>,  object (Arrays are a type of object in JavaScript)

console.log( undefinedType,  typeof undefinedType);
// Output:<value of undefinedType>, undefined

console.log( nullType,  typeof nullType);
// Output: <value of nullType>, object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVar = "I can do anything";
console.log(letVar); // Output: I can do anything
letVar = "I can do anything in webdevelopment";
console.log(letVar); // Output: I can do anything in webdevelopment

const constVariable = "I cannot be reassigned";
console.log(constVariable); // Output: I cannot be reassigned