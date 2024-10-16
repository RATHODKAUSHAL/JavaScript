// Loops :- javascript loops  are used to execute a block of code repeatedly for a specified number of times. There are three types
// of loops in javascript: for loop, while loop, and do-while loop.
//It consists of three parts: initialization, condition, and increment/decrement. This loop iterates over a code block until the specified condition is false.

// 1. For Loop :- The for loop is used to execute a block of code repeatedly for
// a specified number of times. It consists of three parts: initialization, condition, and increment/decrement.
//exmaple:-
let count; 
for (let count = 0; count < 10; count++) {
    console.log(count)
}
// output :- 0,1,2,3,4,5,6,7,8,9

//2.  While Loop :- The while loop is used to execute a block of code repeatedly as long as the specified
// condition is true. It consists of two parts: condition and increment/decrement.
//example:-
let number = 0;
while (number < 10) {
    console.log(number)
    number++;
    }
    // output :- 0,1,2,3,4,5,6,7,

//3.  Do-While Loop :- The do-while loop is used to execute a block of code repeatedly as
// long as the specified condition is true. It consists of two parts: condition and increment/decrement
//note :- do -while loop is similar to while loop but the difference is that do-while loop executes the code
//block at least once before checking the condition.
//example:-
let counter = 0;
do {
    console.log(counter)
    counter++;
    } while (counter < 10);
    // output :- 0,1,2,3,4,5,6,7

//4.   For-In Loop :- The for-in loop is used to iterate over the properties of an object.
//example:-
let person = {
    name: "John",
    age: 30,
    city: "New York"
    };
    for (let key in person) {
        console.log(key + ": " + person[key]);
        }
        // output :- name: John, age: 30, city: New York

//5.    For-Of Loop :- The for-of loop is used to iterate over the values of an array
//example:-
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
    }
    //output :-  1,2,3,4,5


