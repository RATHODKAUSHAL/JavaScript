//Functions in js:-
// A function in js is a resuable block of code that prrform a specific task. you define  it once, and then you can run (or "call")
// it whenever you need that task done in your program.
// Functions are defined using the function keyword followed by the name of the function, and then a list
// of parameters in parentheses. The code to be executed is placed inside curly brackets.
// Functions can take arguments, return values, and be used to perform a variety of tasks.

function PrintName(num1 , num2){
    console.log("sum of num1 and num2 is :"  , num1 + num2);
}

PrintName(3, 5);

//In javascript, functions can be used in the same way as variables for assignments, or calculations.
// 1. function declaration :- 
//  function declaration is a function that is declared with the function keyword.
//  it is a function that is declared before it is used.
//  function declaration is hoisted in javascript, which means that it is moved to the top of
//  the script, so that it can be used before it is declared.
// function name(parameters) {
//     // code to be executed
// }

// 2. function expression :-
// function expression is a function that is assigned to a variable.
// var name = function(parameters) {
//     // code to be executed
// }

// 3. arrow function :-
// arrow function is a function that is defined using the arrow operator.
// var name = (parameters) => {
    //     // code to be executed
    // }

// 4. function constructor :-
// function constructor is a function that is used to create objects.
// function name(parameters) {
//     // code to be executed
// }

// 5. function call :-
// function call is a function that is called by its name.
// name(parameters)

// 6. function return :-
// function return is a function that returns a value.
// return value;

// 7. function arguments :-
// arguments are the values passed to the function when it is called.

// 8. function parameters :-
// parameters are the variables that are used to receive the arguments passed to the function.

// 9. function scope :-
// the scope of a function is the region of the code where the function is defined.

// 10. function hoisting :-
// in javascript, functions are "hoisted" to the top of their scope, regardless of where
// they are defined. This means that you can call a function before it is defined, and it
// will still work. However, the function will not be executed until it is actually defined.
//example:- 
// function test() {
//     console.log("Hello");
// }
// test(); // outputs: Hello
// console.log(test); 
// outputs: function test() {
//     console.log("Hello");
// }
// console.log(test()); // outputs: Hello

// 11. function call by value :-
// when a function is called, the arguments are passed to the function by value, not by reference
// example:-
// function test(a) {
//     a = 10;
// }
// test(5);
// console.log(a); // outputs: 5

// 12. function call by reference :-
// when a function is called, the arguments are passed to the function by reference, not by value
//example:-
// function test(a) {
//     a = 10;
// }
// test(5);
// console.log(a); // outputs: 10

// 13. function default parameters :-
// you can specify default values for function parameters using the = operator.

// 14. function rest parameters :-
// you can use the ... operator to specify a rest parameter, which is a parameter that
// collects all the remaining arguments passed to the function into an array.
// example:-
// function test(a, b, ...rest) {
//     console.log(rest);
// }
// test(1, 2, 3, 4, 5); // outputs:
// [3, 4, 5]

// 15. function spread operator :-
// the spread operator (...) can be used to expand an array into a function call or
// to expand an array into a new array.
// example:-
// function test(a, b, c) {
//     console.log(a, b, c);
// }
// test(...[1, 2, 3]); // outputs: 1 2
