<!-- This is a Javascript All list Topics -->

# Variable & Data Types
<!-- Var, Let, Const -->

# Primitive Types
<!-- String, Number, Boolean, null, Undefined, symbol -->

# Refrence Types
<!-- Array, Object, Function, Date, RegExp, Map, Set, WeakMap, WeakSet -->

# Control Statement
<!-- if, else, Switch -->

# Loops
<!-- for, while, do-while, for...of, for...in -->
 
# Functions
<!-- a> Function declaration vs expression -->
<!-- b> Arraow function -->
<!-- c> Immendiately Invoked Function Expression (IIFE) -->
<!-- d> Higher order fucntions(functions that take other fucntions as a arguments or return a function as a result) -->
<!-- e> call back function -->

# promises
<!-- It is a way to handle asyncronous operations -->
<!-- a>  promise.all()-->
<!-- b> .resolve() -->
<!-- c> .then() -->
<!-- d> .any() -->
<!-- e> .race() -->
<!-- f> .reject() -->

# Async/await()
<!-- It is a way to handle asyncronous operations in a synchronous way -->

# Callback fucntions
<!-- A callback is a fuction that is passed as an argument to another function ans is executed after the complition of that main function -->
<!-- a> Callback hell -->
<!-- b> Callback hell vs promise hell -->
<!-- c> Callback hell vs async/await hell -->
<!-- d> Callback hell vs generator hell -->
<!-- e> Callback hell vs async/await hell vs generator hell -->
<!-- f> Callback hell vs async/await hell vs generator hell vs promise hell -->

# closures 
<!--  closure is a function that has access to its outer scope even when the outer function has returned -->
<!-- closure in js is a function that has access to variable in its perent scope,  even after the perent function has reurned-->

# Scope
<!-- Scope is the region of the code where a variable is defined and can be accessed -->
<!-- Global scope -->
<!-- functional scope -->

# hoisting
<!-- variable hoisting -->
<!-- function hoisting -->

# event loops and task queue (micro task and macro task)

# execution context
<!-- it is a code enviromnet that code execute -->
<!-- global execution context -->
<!-- function execution context -->

# scope chain & execution context
<!-- The Scope chain is a crucial concept that determines how variables are looked up in different contexts when a function or block of code is executed
An Execution context is an abstract concept that represents the environment in which the JavaScript code is evaluated and executed. Every time a function is invoked or a block of code is run, a new execution context is created.  -->

# Memoisation 
<!-- It is a technique used to optimize functions by caching the results of expensive function calls and reusing those results when the same inputs occur again. This helps avoid redundant computations, improving performance in scenarios where a function is called repeatedly with the same arguments. -->

# Debouncing
<!-- Limits the rate at which a function gets invoked. Helps avoid multiple function calls for events that trigger frequently, such as keystrokes or resize events. -->

# Throttling 
<!-- Ensures that a function is called at most once in a given period of time, no matter how often the event is triggered. -->

# Currying 
<!--  Why: Currying transforms a function that takes multiple arguments into a series of functions that each take one argument. This is useful for partially applying arguments.
Where to use: Functional programming, reusing functions with fixed arguments. -->

# setTimeout(), setInterval(), and clearTimeout() :
<!-- a. setTimeout() : Executes a function after a specified delay (in milliseconds).
b. setInterval() : Executes a function repeatedly at a specified interval (in milliseconds).
c. clearTimeout(): Cancels a previously scheduled setTimeout() operation. -->

# Template Literals
<!-- Template literals, also known as template strings, are a feature in JavaScript that allow for easier string interpolation and multi-line strings. They are denoted by backticks (`) instead of single or double quotes. -->

#  LocalStorage & SessionStorage:
<!-- localStorage: Known for storing data persistently across browser sessions, remaining available even after the browser is closed. -->
<!-- sessionStorage: Known for storing data only for the duration of a single browser session, clearing when the tab or browser is closed. -->

# Regular Expressions (RegExp):
<!-- A Regular Expression (RegEx or RegExp) is a sequence of characters that defines a search pattern. RegEx is primarily used for string searching and manipulation, allowing you to search, match, and replace patterns in text. -->

# this Keyword
<!--  this keyword refers to the context in which a function is executed. It is a special keyword that behaves differently depending on how a function is called. -->

<!--  In the global execution context (outside any function), this refers to the global object (window in browsers, global in Node.js).
2. In a regular function (not in strict mode), this refers to the global object (window in the browser).
3. When a function is called as a method of an object, this refers to the object the method is called on. -->

#  OOPs in JavaScript:
<!-- Classes In JavaScript -->
<!-- Classes and Objects in JavaScript -->
<!-- How to create a JavaScript class in ES6 -->
<!-- this Keyword JavaScript -->
<!-- New Keyword in JavaScript -->
<!-- Object Constructor in JavaScript -->
<!-- Inheritance in JavaScript -->
<!-- Encapsulation in JavaScript -->
<!-- Static Methods In JavaScript -->
<!-- OOP in JavaScript -->
<!-- Getter and Setter in JavaScript -->

# Operators
<!-- a. Arithmetic Operators: +, -, *, /, %
b. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
c. Logical Operators: &&, ||, !
d. Assignment Operators: =, +=, -=, *=, /=
e. Unary Operators: ++, --, typeof, delete
f. Ternary Operator: condition ? expr1 : expr2 -->

# Break and Continue
<!-- break (exit the loop)
continue (skip to the next iteration) -->

# Parameters and Arguments 
<!-- Parameters are the variables defined in the function declaration (or function signature) that specify what kind of values the function expects to receive when it is called.
Arguments are the actual values passed to the function when it is called. -->

# Destructuring
<!-- Destructuring is a syntax in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It simplifies the process of extracting multiple properties or elements from an object or array, making your code cleaner and more readable. -->
<!-- Array destructuring -->
<!-- Object Destructuring -->

# Rest and Spread Operator

# Event Delegation 
<!-- Using event listeners on parent elements to handle child element events -->

# Higher-Order Functions
<!-- A Higher-Order Function is a function that either takes one or more functions as arguments or returns a function as its result. -->

# Currying
<!-- Converting a function that takes multiple arguments into a sequence of functions -->

# Anonymous functions
<!-- An anonymous function is a function that does not have a name. These functions are typically defined inline and can be assigned to variables, passed as arguments, or used in other places where a function is required. -->

# Lexical scoping

# Array Methods
<!-- push(), pop(), shift(), unshift()
concat(), slice(), splice()
map(), filter(), reduce(), forEach()
find(), findIndex()
sort(), reverse()
join(), split()
indexOf(), includes(), lastIndexOf() -->

# Object Methods
<!-- Object.assign(), Object.create(), Object.keys(), Object.values(), Object.entries(), Object.hasOwn(), Object.freeze(), Object.seal() -->

# Prototypes 
<!-- Prototype chain
Inheritance using prototypes -->

# Classes
<!-- Class syntax, constructors, methods
Inheritance using extends
super() and super() constructor -->

# call(), apply(), and bind() 

# Event bubbling and capturing

# Generators & Iterators
<!-- Why: Generators allow for lazy evaluation, meaning they yield values on demand rather than all at once. Useful for large data sets or infinite sequences.
Where to use: Implementing custom iterators, lazy evaluation of sequences. -->

#  WeakMap and WeakSet
<!-- Why: Helps with memory management in JavaScript. WeakMap and WeakSet allow garbage collection of keys or values when there are no more references to them.
Where to use: Managing references to objects without preventing garbage collection. For example, caching DOM nodes where you don’t want to create memory leaks. -->

# Polyfill
<!-- Why: Adds support for features that are not natively available in older browsers by providing code that mimics modern functionality.
Where to use: Ensuring compatibility with older browsers (e.g., older versions of Internet Explorer) for new JavaScript features like Promise, fetch, etc. -->

# Prototypal Inheritance
<!-- Why: JavaScript uses prototypes for inheritance, rather than the classical object-oriented inheritance. Understanding how the prototype chain works is key to understanding JavaScript’s inheritance model.
Where to use: Building object hierarchies, adding methods to constructors. -->

# Cookies
<!-- Storing and retrieving cookies in JavaScript -->

#  Advanced Array Methods
<!-- Array.prototype.find() : Finding the first element in an array that matches a condition
Array.prototype.filter(): Filtering elements based on a condition
Array.prototype.reduce(): Reducing an array into a single value
Array.prototype.map(): Creating a new array by applying a function to each element
Array.prototype.sort(): Sorting arrays with custom sorting functions -->

# Design Patterns
<!-- Module Pattern: Encapsulating code into modules
Singleton Pattern: Ensuring a class has only one instance
Observer Pattern: Notifying multiple objects when one object’s state changes.
Factory Pattern: Provides a way to instantiate objects while keeping the creation logic separate from the rest of the application.
Strategy Pattern :Allows you to define a strategy (algorithm) for a particular operation and change it at runtime.
Decorator Pattern: Dynamically adding behavior to an object without affecting its structure. -->

# Lazy Loading
<!-- Delaying loading of content until it’s needed -->

# Working with JSON
<!-- JSON Basics
JSON syntax, parsing with JSON.parse(), stringifying with JSON.stringify()
Working with APIs
Fetching data from an API using fetch()
Handling API responses with Promises or Async/Await -->

#  DOM Manipulation
<!-- DOM Selection
document.getElementById(), document.querySelector(), document.querySelectorAll() -->

# Event Handling
<!-- Event listeners: addEventListener(), removeEventListener()
event.target, event.preventDefault(), event.stopPropagation() -->

# Modifying DOM Elements
<!-- Changing text, HTML, attributes, styles
Adding/removing elements dynamically (createElement(), appendChild(), removeChild()) -->

# DOM Traversal
<!-- parentNode, childNodes, nextSibling, previousSibling -->

# Error Handling
<!-- try...catch...finally: Handling errors in synchronous code
Custom Errors: Creating custom error classes
Throwing Errors: throw keyword for throwing errors manually -->

# String Methods 
<!-- charAt(), charCodeAt(), concat(), includes(), indexOf(), lastIndexOf(), slice(), split(), toLowerCase(), toUpperCase(), trim(), replace(), search(), match(), repeat(), startsWith(), endsWith(), padStart(), padEnd(), localeCompare(), fromCharCode(). -->

# Date methods:
<!-- Date.now(), Date.parse(), Date.UTC(), getDate(), getDay(), getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds(), getTime(), getTimezoneOffset(), setDate(), setFullYear(), setHours(), setMilliseconds(), setMinutes(), setMonth(), setSeconds(), setTime(), toDateString(), toISOString(), toLocaleDateString(), toLocaleTimeString(), toString(). -->

# Generator
<!-- A generator in JavaScript is a special type of function that allows you to pause and resume its execution.
function*, yield, next(), return(), throw(). -->

# JavaScript Proxy 
<!-- A Proxy in JavaScript is a special object that allows you to intercept and customize operations on objects, such as property access, assignment, function calls, and more. It acts as a wrapper for another object and can redefine fundamental operations (like get, set, deleteProperty, etc.) on that object. -->

# Commonly Used Traps (Methods):
<!-- get(target, prop, receiver): Intercepts property access.
set(target, prop, value, receiver): Intercepts property assignment.
has(target, prop): Intercepts the in operator.
deleteProperty(target, prop): Intercepts property deletion.
apply(target, thisArg, argumentsList): Intercepts function calls.
construct(target, args): Intercepts the new operator.
defineProperty(target, prop, descriptor): Intercepts property definition. -->

# avascript Array and Object Cloning : Shallow or Deep?

# loose equality (==) and strict equality (===)

#  Call by Value Vs Call by Reference

# JavaScript Set

# JavaScript Map

# The Fetch API
<!-- he Fetch API allows us to make async requests to web servers from the browser. It returns a promise every time a request is made which is then further used to retrieve the response of the request. -->

#  Import/Export

# Pure Functions, Side Effects, State Mutation and Event Propagation

# Recursion

# The apply, call, and bind methods

# window methods
<!-- alert(), confirm(), prompt(), setTimeout(), setInterval(), clearTimeout(), clearInterval(), open(), close(), requestAnimationFrame(). -->

# Mouse events
<!-- click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, contextmenu. -->

# Keyboard events
<!-- keydown, keypress, keyup. -->

# Form events
<!-- submit, change, focus, blur, input, reset, select, keypress, keydown, keyup. -->

# Debugging

# Cross-Origin Resource Sharing(CORS)

# Web Workers
<!-- A mechanism for running scripts in background threads, allowing JavaScript to perform computationally expensive tasks without blocking the main thread. -->

# Service Workers
<!-- A script that runs in the background of your browser, enabling features like push notifications, background sync, and caching for offline functionality. -->

# lazy loading or infinite scrolling

# Progressive Web Apps (PWAs)
<!-- Building web applications that work offline, provide push notifications, and have native-like performance (through service workers and other browser APIs). -->

# Server-sent events 
<!-- Server-sent events (SSE) are a simple and efficient technology for enabling real-time updates from the server to the client over a single HTTP connection. -->

# Strict Mode
<!-- Strict Mode is a feature in JavaScript that ensures that you avoid errors and problematic features. -->

# Security
<!-- (Not a JavaScript concept, but important to know) -->
<!-- Cross-Site Scripting (XSS)
Cross-Site Request Forgery (CSRF)
Content Security Policy (CSP)
CORS (Cross-Origin Resource Sharing)
JWT (JSON Web Tokens) -->

# Temporal Dead Zone(TDZ)
<!-- It is a term that refers to the period of time between the creation of a variable and its initialization in the execution context. During this time, the variable exists but cannot be accessed — attempting to do so will result in a ReferenceError. -->


# URL FOR REFERENCE(Median)
<!-- https://medium.com/@omkartalekar1112/all-javascript-concepts-a-z-basic-to-advanced-7b7453d5b008 -->
