// objects in js are complex  data types that allow for the creation of structured entities with propeties and methods.
// objects are mutable, meaning they can be changed after they are created.
// objects are reference types, meaning they are stored in memory and can be referenced by multiple variables.
// objects are used to represent real-world entities, such as people, places, and things.
// objects can have properties and methods, which are used to store and manipulate data.
// objects can be created using the object literal syntax, the Object constructor, or the JSON.parse()

// javascript arrays:
// arrays are a type of object that is used to store a collection of values.
// arrays are ordered, meaning that the order of the values is important.
// arrays are indexed, meaning that each value in the array has a corresponding index.
// arrays are mutable, meaning they can be changed after they are created.
// arrays are reference types, meaning they are stored in memory and can be referenced by multiple variables.
// arrays are used to represent collections of values, such as lists of items or groups of data.
// arrays can have methods, such as push, pop, and splice, which are used to manipulate
// the array.
// arrays can be created using the array literal syntax, the Array constructor, or the JSON.parse()

//example:- 
let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name[0]); //output: Ahmedabad
console.log(City_Name.length); //output: 3
// console.log(City_Name[3]); //output: undefined
// console.log(City_Name[2]); //output: delhi
// console.log(City_Name[1]); //output: mumbai
// console.log(City_Name); //output: ["Ahmedabad", "mumbai", "delhi"]
// console.log(City_Name[0] = "Bangalore"); //output: Bangalore
// console.log(City_Name); //output: ["Bangalore", "mumbai", "delhi]
// console.log(City_Name.push("chennai")); //output: 4

//javascript Array methods:-
// 1. push() :- adds one or more elements to the end of an array and returns
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.push("chennai")); //output: 4
console.log(City_Name)
// 2. pop() :- removes the last element from an array and returns that element.
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.pop()); //output: delhi
// console.log(City_Name);
// 3. shift() :- removes the first element from an array and returns that element.
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.shift()); //output: Ahmedabad
console.log(City_Name);
// 4. unshift() :- adds one or more elements to the beginning of an array and
// returns the new length of the array.
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.unshift("bangalore")); //output: 4
console.log(City_Name);
// 5. indexOf() :- returns the first index of the element in the array. If the
// element is not found, it returns -1.
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.indexOf("mumbai")); //output: 1
// 6. lastIndexOf() :- returns the last index of the element in the array. If   
// the element is not found, it returns -1.
// example:-
// let City_name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.lastIndexOf("Ahmedabad")); //output: 0
// 7. join() :- returns a string with all elements of the array separated by a
// specified separator.
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.join("-")); //output: Ahmedabad-mumbai-delhi
// 8. concat() :- returns a new array that is a combination of the elements of
// the current array and the elements of the array(s) passed as arguments.
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
let City_Name1 = ["bangalore", "chennai"];
console.log(City_Name.concat(City_Name1)); //output: ["Ahmedabad",
// "mumbai", "delhi", "bangalore", "chennai"]
// 9. slice() :- returns a shallow copy of a portion of an array into a new
// array object selected from start to end (end not included) where start and
// end can be negative counts from the end of the array.
// example:-
// let City_Name = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.slice(1, 3)); //output: ["mumbai", "
// "delhi"]
// 10. splice() :- adds or removes elements from an array.
// example:-
// let City_Name2 = ["Ahmedabad", "mumbai",  "delhi"];
console.log(City_Name.push('rajkot'));
console.log("city name :", City_Name);
console.log(City_Name.splice(1, 2, "bangalore", 'pune')); //output: ["
// "mumbai", "bangalore"]
console.log(City_Name);
//11.  sort() :- sorts the elements of an array in place and returns the array.
// example:-
// let City_Name = [ 'bangalore', 'bangalore', 'pune', 'rajkot' ];
let numbers = [2, 4, 5, 7, 8, 9, 3, 1];
console.log(numbers.sort()); //output: [1, 2, 3, 4, 5, 7, 8, 9]
// 12.  reverse() :- returns the array with its elements reversed.
// example:-
console.log(numbers.reverse()); //[9, 8, 7, 5, 4, 3, 2, 1]
//13.   findIndex() :- returns the index of the first element in the array that
// satisfies the provided testing function. If no elements satisfy the testing
// function, -1 is returned.
// example:-
console.log(numbers.findIndex(x => x > 1)); //output: 2
//14.  find() :- returns the first element in the array that satisfies the
// provided testing function. Otherwise undefined is returned.
// example:-
console.log(numbers.find(x => x > 1)); //output: 9
console.log(numbers.find(x => x > 10)); //output: undefined
// 15.  filter() :- creates a new array with all elements that pass the test
// implemented by the provided function.
// example:-
let num = [2, 5, 7, 4, 8, 9, 1, 6, 3]
console.log(num.filter(x => x > 1)); //output: [ 2, 5, 7, 4,8, 9, 6, 3]
// console.log(num.filter());
//  16.  map() :- creates a new array with the results of applying the provided
// function on every element in this array.
// example:-
// let num = [2, 5, 7, 4, 8, 9]
console.log(num.map(x => x * 2)); //output: [ 4, 10, 14, 8, 16, 18, 2, 12,  6 ]
// 17.   reduce() :- applies a function against an accumulator and each element
// in the array (from left to right) to reduce it to a single value.
// example:-
console.log(num);
console.log(num.reduce((a, b) => a + b, 0)); //output: 45
// 18.  reduceRight() :- this method is similar to reduce() but it starts from
// the end of the array and goes to the start.
// example:-
console.log(num.reduceRight((a, b) => a + b, 0)); //output 45
//  19.  some() :- returns true if at least one element in this array passes the
// test implemented by the provided function.
// example:-
console.log(num.some(x => x > 10)); //output: false
// 20.  every() :- returns true if all elements in this array pass the test
// implemented by the provided function.
// example:-
console.log(num.every(x => x > 1)); //output: false
// 21.   forEach() :- calls a function on every element in this array.
// example:-
num.forEach(x => console.log(x)); //output: 2, 5, 7,
// 22.  indexOf() :- returns the first index of the element in the array. If
// it does not exist, returns -1.
// example:-
// 23. typeOf :-  returns the type of the specified value.
// example:-
console.log(typeof 10); //output: number




