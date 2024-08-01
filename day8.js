//activity1-TEMPLATE LITERALS


//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Muskan";
let age = 19;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// Output: My name is Muskan and I am 19 years old.

//Task 2: Create a multi-line string using template literals and log it to the console.
let String = `I am Muskan
I am a sophomore`;

console.log(String);
// Output:
// I am Muskan
//I am a sophomore



//Activity 2:DESTRUCTURING


//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first, second);
// Output: 1 2

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = { title: "life is beautiful", author: "ABC", year: 1987 };
let { title, author } = book;
console.log(title, author);



//ACTIVITY-3 SPREAD AND REST OPERATORS



//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5];
console.log(newArray);
// Output: [1, 2, 3, 4, 5]

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));
// Output: 15


// ACTIVITY 4: DEFAULT PARAMETERS


//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20
console.log(multiply(5));    // Output: 5


//ACTIVITY:5 ENHANCED OBJECT LITERALS


//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let person = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(person);
console.log(person.greet());
// Output: { name: 'Muskan', age: 19, greet: [Function: greet] }
// Output: Hello, my name is Muskan.

//Task 9: Create an object with computed property names based on variables and log the object to the console.
let propName = "dynamicProperty";
let obj = {
    [propName]: "This is a dynamic property"
};

console.log(obj);
// Output: { dynamicProperty: 'This is a dynamic property' }