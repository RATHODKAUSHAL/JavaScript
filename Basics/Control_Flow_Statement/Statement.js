// statemnt 

// return statement : 
// javascript return statement is used to stop function's execution and optionally return a value to the caller.
// return statement can be used with or without value.
// return statement can be used with or without arguments.

//exampe: 
let count = 0;

function counter() {
    count++;
    return console.log(count);
}

counter(); //output : 1

//break statement:
//javascript break statement is used to terminate the loop or switch statement.
// break statement can be used with or without value.

//In a switch, code breaks out and the execution of code is stopped. 
// In a loop, it breaks out to the loop but the code after the loop is executed.

// example:
// let i = 0;
// let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// for (i; i < fruits.length; i++) {
//     if (i == 3) {
//         break;
//         }
//         console.log(fruits[i]);
//         }
        //output : apple, banana, cherry

// example:
const fruit = "Mango";
 
        switch (fruit) {
            case "Apple":
                console.log("Apple is healthy for our body");
                break;
            case "Mango":
                console.log("Mango is a National fruit of India");
                break;
            default:
                console.log("I don't like fruits.");
        }

//continue  statement:
//javascript continue statement is used to skip the current iteration of a loop and move to the next iteration
//continue statement can be used with or without value.
// example:
let i = 0;
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
for (i; i < fruits.length; i++) {
    if (i == 3) {
        continue;
        }
        console.log(fruits[i]);
        }
 //output : apple, banana, cherry, elderberry

//throw  statement:
//javascript throw statement is used to throw an error in the code.
//throw statement can be used with or without value.
// example:
function divide(a, b) {
    if (b == 0) {
        throw "Error: Division by zero is not allowed";
        }
        return a / b;
}
try {
    console.log(divide(10,3));
} catch (error) {
    console.log(error);
}
// output : Error: Division by zero is not allowed

//if  else statement:
//javascript if else statement is used to check the condition and execute the code accordingly.
//if else statement can be used with or without value.

// Another one is else  if statement:
//javascript else if statement is used to check the condition and execute the code accordingly.
//else if statement can be used with or without value.
//example: 
let age = 10;

if(age  > 18){
    console.log("You can drive / vote");
}else if(age < 18){
    console.log("You cannot  drive / vote");
}
else{
    console.log("age is invalid");
}
// output : You cannot  drive / vote

