//javascript operators are symbols used to perform specific
// mathematical, comparison,logical, or assignment operations on variables and values.

//list of all  javascript operators
//1. Arithmetic Operators
//2. Comparison Operators
//3. Logical Operators
//4. Assignment Operators
//5. Bitwise Operators
//6. Conditional (Ternary) Operators
//7. String Operators
//8. Object Operators
//9. Unary Operators
//10.Relational Operators
//11.Comma  Operator
//12. Exponentiation Operator


//1.  Arithmetic Operators
//Arithmetic operators are used to perform mathematical operations like addition, subtraction, multiplication, division, etc
//Arithmetic operators in JavaScript are as follows:
//1.  Addition: +
let a = 1 + 2;
console.log(a); //output: 3
//2. Subtraction
let  b = 5 - 3;
console.log(b); //output: 2

//3. Multiplication: *
let c = 4 * 5;
console.log(c);//output: 20

//4. Division: /
let d = 10 / 2;
console.log(d);//output: 5

//5. Modulus: % (returns the remainder of the division of the number before it by
//the number after it)
let e = 17 % 5;
console.log(e);//output: 2

//6. Exponentiation: ** (returns the result of raising the number before it to the
//power of the number after it)
let f = 2 ** 3;
console.log(f);//output: 8

//7. Increment: ++ (increases the value of a variable by 1)
let g = 5;
g++;
console.log(g);//output: 6

//8.  Decrement: -- (decreases the value of a variable by 1)
let  h = 10;
h--;
console.log(h);//output: 9

//9. Unary  Plus: + (converts a string or number to a number)
let i = + '10';
console.log(i);//output: 10

//10 .Unary  Minus: - (returns the negative of a number)
let j = - '10';
console.log(j);//output: -10

//2. Assignment  Operators
// Assignment operators are used to assign a value to a variable

//Assignment operators in JavaScript are as follows:
// 1.  Simple Assignment: =
let k = 10;
console.log(k); //output: 10
//2. Add and Assignment: += 
let l = 5;
l += 3;
console.log(l);//output: 8

//3.  Subtract and Assignment: -=
let m = 10;
m -= 4;
console.log(m);//output: 6

//4. Multiply and Assignment: *=
let n = 5;
n *= 3;
console.log(n);//output: 15

//5. Divison Assignment : /=
let o = 10;
o  /= 2;
console.log(o);//output: 5

//6.  Modulus Assignment: %=
let p = 10;
p %= 3;
console.log(p);//output: 1

//7. Exponentiation Assignment :  **=
let q = 2;
q **= 3;
console.log(q);//output: 8

//8.  Bitwise AND Assignment: &=
let r = 5;
r &= 3;
console.log(r);//output: 1

//9. Bitwise OR Assignment : |=
let s = 5;
s |= 3;
console.log(s);//output: 7

//10. Bitwise XOR  Assignment : ^= 
let t = 5;
t ^= 3;
console.log(t);//output: 6

//11.  Bitwise NOT Assignment : ~ =
let u = 5;
u = ~u;
console.log(u);//output: -6

//12.   Left Shift Assignment : <<=
let v = 5;
v <<= 1;
console.log(v)  ;//output: 10

//13.   Right Shift Assignment : >>=
let w = 10;
w  >>= 1;
console.log(w);//output: 5

//3. Comparison  Operators
// Comparison  operators are used to compare the values of two operands. The result of the comparison is always a boolean
// value (true or false). There are 6 comparison operators in JavaScript.
// 1. Equal to : ==
// 2. Not Equal to : !=
// 3. Greater than : >
// 4. Less than : <
// 5. Greater than or Equal to : >=
// 6. Less than or Equal to : <=
// 7. Strict  Equal to : ===
// 8. Strict Not Equal to : !==

let x = 5;
// let y = 5;
console.log(x == y);//output: true

let y = 10;
console.log(x == y);//output: false

//4.  Logical Operators
// Logical operators are used to combine multiple conditions in a single expression. There are 3 logical operators
// 1. AND : &&
let A = 5 
let  B = 10
console.log(A > 3 && B < 15);//output: true

// 2.  OR : ||
console.log(A > 3 || B < 15);//output: true

// 3. NOT : !
console.log(A > 3 && !B < 15);//output: false

//5. Bitwise  Operators
//  Bitwise operators are used to perform operations on the binary representation of the numbers. There are 6
// bitwise operators in JavaScript.
// 1. Bitwise AND : &
// bitwise operator is  used to perform AND operation on the binary representation of the numbers.

// let a = 5;
// let b = 1;
console.log(a & b);//output: 1

// 2. Bitwise OR : |
console.log(a | b);//output: 5 

// 3. Bitwise XOR : ^
console.log(a ^ b);//output: 4

// 4.  Bitwise NOT : ~
console.log(a  ^ ~b);//output: 4

//  5. Left Shift : <<
console.log(a << 1);//output: 10

// 6. Right Shift : >>
console.log(a >> 1);//output: 2.5

// 7. zero  fill right shift : >>>
console.log(a >>> 1);//output: 2.5

// 6. Ternary  Operator
// The ternary operator is a shorthand for if-else statement. It is used to make a
// decision based on a condition and return one value if the condition is true and another value if the
// condition is false.
// let x = 5;
let Y = x > 10 ? "x is greater than 10" : "x is less  than or equal to 10";

// 7. Comma  Operator
// The comma operator is used to separate multiple expressions in a single statement. It returns the value of
// the last expression.
// let a = 5, b = 10, c = 15;
console.log(a, b, c);//output: 5 10 15

// 8. String   Operators
// String Operator  is used to concatenate two or more strings.
let str1 = "Hello";
let str2 = "World";
console.log(str1 + str2);//output: "HelloWorld"

// 9. Unary   Operators
// Unary operators are used to perform operations on a single operand. There are 6 unary operators in   
// JavaScript.
// 1. Increment : ++
// let a = 5;
console.log(++a);//output: 6
// 2. Decrement : --
// let b = 6;
console.log(--b);//output: 5
//3.  Positive : +
// let c = -5;
console.log(+c);//output: -5
// 4. Negative : -
// let  d = 5;
console.log(-d);//output: -5
// 5. Logical NOT : !
// let e = true;
console.log(!e);//output: false
// 6.  Typeof : typeof
// let f = 5;
console.log(typeof f);//output: "number"
// 7. delete  : delete
let obj = {a: 1, b: 2, c: 3};
console.log(delete obj.c);//output: true

// 10. Relational   Operators
// Relational operators are used to compare two values.
// 1. in :  in
let str = "Hello";
console.log("l" in str);//output: true
// 2. instanceof : instanceof
class Animal {}
class Dog extends Animal {}
let dog = new Dog();
console.log(dog instanceof Dog);//output: true
