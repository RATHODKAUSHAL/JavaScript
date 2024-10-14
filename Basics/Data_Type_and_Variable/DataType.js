//javascript is a loosely typed or dynamicaaly typed language.
// it means that we don't need to declare the data type of a variable before using it.
// js data type are categorized into two parts : primitive and non-primitive data types.
// primitive datatype : number, string,  boolean, null, undefined, symbol, bigInt.
// non-primitive datatype :  array, object, set, map, weakset, weakmap.

// this is primitive data type 
let num = 2;  //number
let full_name = "jone  doe";  //string
let  is_admin = true;  //boolean
let  user = null;  //null
let  user1 = undefined;  //undefined
let  user2 = Symbol("user");  //symbol
let  user3 = BigInt(12345678901234567890n);  //bigInt

// This is  non-primitive data type
let arr = [1, 2, 3, 4, 5];  //Array
let obj = {name: "jone", age: 25};  //object
let set = new Set([1, 2, 3, 4, 5]);
let map = new Map([["name", "jone"], ["age", 25]]);



//we can check data type by using typeof function
console.log(typeof num);  //number




