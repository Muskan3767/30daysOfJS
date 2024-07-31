//Activity 1:Function Declartion 


//Task 1: write a  function to check if number is even or odd and log the result to the console
function checkEvenOrOdd(num)
{
    if(num%2==0)
        return "even";
    else
        return "odd";
}
let num=67;


//Task 2: Write a function to calculate the square of the number and return the result
function calSqr(n)
{
    return n**2;
}
let n=3;
console.log(`${n}^2 = ${calSqr(n)}`);
//Output : 3^2 = 9


//ACtivity 2:Function Expression 

//Task 3: write a function expression to find the maximumof two numbers and log the result to the console
const max = function(a,b){
    if(a>=b)
        return a;
    else
        return b;
};
let num1=45,num2=34;
console.log(`${max(num1,num2)} is maximum`);
//Output : 45 is maximum

//Task 4:
const concatenateStr = function(str1,str2){
    return str1+str2;
}
str1="Muskan";
str2="Yadav";
console.log(`Concatenation of ${str1} and ${str2} results in ${concatenateStr(str1,str2)}`);
//Output : Concatenation of Muskan and Yadav results in MuskanYadav


//task 5 : arrow function to find sum of two numbers

const findSum = (a,b) => {
    return a+b;
}
let b1 = 6;
let b2 = 7;
console.log("sum of",b1,"and",b2,"is :",findSum(b1,b2));

//output : sum of 6 and 7 is : 13;

//task 6 : arrow function to check whether a string contain a perticular character or not

const findChar = (str1,ch) =>{
    let len = str1.length;
    for(let i=0;i<len;i++){
        if(str1[i]==ch){
            return true;
        }
    }
    return false;
}

let ch = 'a';
let strng1 = 'table';
if(findChar(strng1,ch)){
    console.log("character",ch,"is found in string",strng1);
}else{
    console.log("character",ch,"is not found in string",strng1);
}

//output : character a is found in string table



// ACTIVITY 4 : FUNCTION PARAMETER AND DEFAULT VALUES

//task 7 : function takes two parameters and find product and set default value of second parameter

function product(a,b=1){
    return a*b;
}
let c1 = 7;
console.log("On setting default value of second parameter as 1,the product of",c1,"is :",product(7));

//output : On setting default value of second parameter as 1,the product of 7 is : 7


//task 8 : function that takes person name and age and return greeting

const greet = (name,age=18) =>{
    console.log("Hello, my name is",name,"and I am",age,"years old.");
};

let nam = "Muskan";
greet(nam);

//output : Hello, my name is Muskan and I am 18 years old.


//ACTIVITY 5 : HIGHER ORDER FUNCTIONS

//task 9 : function that take a function and number as perimeter and call that function as many times

const fun = () =>{  //this function will pass as an argument in other function
    console.log("I am a function and i am passed as a perimeter in other function");
}

const higherFunction = (number,func) =>{  //higher order function taking a function as a perimeter
    for(let i=1;i<=number;i++){
        func();
    }
}
let numbee = 2;
higherFunction(numbee,fun);

//output : 
//I am a function and i am passed as a perimeter in other function
//I am a function and i am passed as a perimeter in other function


//task 10 : function that takes two function as perimeter and apply second function on result of first function

function finddouble(a){
    return 2*a;
}
function findSquare(b){
    return b*b;
}

const highOrder = (num,func1,func2) =>{
    res1 = func1(num);
    res2 = func2(res1);
    return res2;
};

let n = 6;
let resultFinal = highOrder(n,finddouble,findSquare);

console.log("After applying higher order function on ",n,"which takes two function passed as a perimeter first function double the number and second will find square of it,the result is :",resultFinal);

//output : After applying higher order function on  6 which takes two function passed as a perimeter first function double the number and second will find square of it,the result is : 144
