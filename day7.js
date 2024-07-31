//Activity 1: OBJECT CREATION AND ACCESS

// Task 1:create an object representing a book and having properties like author,year and tittle and log it to console

let book1 = {
    title: "My own life",
    author: "xyz",
    year: 2024   
};
console.log(book1);


// Task 2: access and log the tittle and author of book object

console.log(book1.author);
console.log(book1.title);



//Activity 2: OBJECT METHODS

// Task 3: add a method to book that return a string with book tittle and author and log them to console

book1.greet = function() {
   return "Hello " + this.author;
};
console.log(book1.greet());


// Task 4:add a method that take a year and update the book year property

changeYear = function(year) {
    book1.year = year;
};
changeYear(2012);
console.log(book1.year);


//ACTIVITY 3 : NESTED OBJECTS

//task 5 : create a nested object representing a library with properties like name and books an dlog library object to console

library1 = {
    name: "My Own Library",
    books: [book1]
};
console.log(library1);


// Task 6: access of log the name of library and tittle of all books of library

console.log(library1.name);
library1.books.forEach(book => {
    console.log(book.title);
});

//ACTIVITY 4 : THE THIS KEYWORD

//task 7 : add a method which uses this keyword to access book tittle and author

const book2 = {
    title: "The Great Adventure",
    author: "def",
    year: 1975,
    getTitleAndYear: function(str) {
        return `${str} ${this.title} was published in ${this.year}`;
    }
};
console.log(book2.getTitleAndYear("Greetings"));


//ACTIVITY 5 : OBJECT ITERATION

//task 8 : for..in loop to iterate properties of object book


for (let key in book1) {
    console.log(`The key is ${key} and its value is ${book1[key]}`);
}


//task 9 : use object.keys and object.values methods to log all properties and its values

console.log(Object.keys(book1));
console.log(Object.values(book1));

// Output:
// [ 'title', 'author', 'year', 'greet' ]
// [ 'Life of Joy', 'abc', 2012, [Function: greet] ]