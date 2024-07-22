 //ACtivity 1:For loop 
     // Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

 //Task 2: Write a program to print the multiplication table of 5 using a for loop.
 for(let i= 1; i<= 10; i++) {
    console.log("5 x", i, "=", 5* i);
}

// Activity 2: While Loop

//  Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let j= 1;
let sum= 0;
while(j<= 10) {
    sum+= j;
    j++;
}
console.log(sum)


//task 4: write a problem to print numbers from 10 to 1 using a while loop. 
j= 10;
while(j>0) {
    console.log(j);
    j--;
}

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
j= 1;
do {
    console.log(j);
    j++;
} while(j<= 5);

//  Task 6: Write a program to calculate the factorial of a number using a do... while loop.

let num= 6;
let fact= 1;
j= 1;

do {
    fact*= j;
    j++;
} while (j<= 6);
console.log(fact);

//Task 7: write a program to draw a pattern  using nested for loops:
for (let i= 1; i<= 5; i++) {
    console.log("* ".repeat(i));    
}

// Activity 5: Loop Control Statements.

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i= 1; i<= 10; i++) {
    if(i== 5) continue;
    console.log(i);
}


//  Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i= 1; i<= 10; i++) {
    if(i== 7) break;
    console.log(i);
}
