//1> What is OOPS
// ANS:-- Oops is abbreviated as Object Oriented Programming system in which Programs
// are considered as a collection of  objects and these objects are made up of properties and methods.
// Each object is Nothing but an instance of a class.

//2> Write a basic concept of OOPs?
// ANS:- 1. Abstraction 2.Encapsulation 3.Inheritance 4.Polymorphism

//3> What is a class?
// ANS:- A class is a somply a representation of a type of object.
// It is the bluePrint/Plan/templat that describe the details of an object.
//Example:-
class Car {
  color;
  model;
  speed;
}

//4> Whayt is an Object?
//ANS:- An object is an instance of a class. it has its own state, behavior and identity.
//Example:-
const car = {
  color: "red",
  price: "1500000",
  speed: "120",
};

//5> what is  a method?
// ANS:- A method is a block of code that is used to perform a specific task.
// It is a function that is associated with a class or an object.

//6> what us Encapsulation?
//ANS:- Encapsulation is a fundamental concept in object-oriented programming (OOP) that 
//restricts direct access to some of an object's components. It helps to bundle the data (attributes)
// and methods (functions) that operate on that data into a single unit or class, while also controlling
// access to that data. This can help prevent unintended interference and misuse of the methods and attributes of an object.

//Key Aspects of Encapsulation:
//1> Data Hiding: The internal object details are hidden from the outside world. Only specific methods (getters and setters) are exposed to interact with the object’s data.
//2> Controlled Access: By using access modifiers, such as private, protected, and public, you can control which parts of your code can access the encapsulated data.
//3> Modularity: Encapsulation leads to more modular code, making it easier to maintain and extend.

//Exapmle:-
class BankAccount{
    //Private Property by using # or _
    #balance;

    constructor(initialBalance){
        this.#balance = initialBalance; //set initial balance
    }

    //Public method to deposit money
    deposite(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Deposited: $${amount}`);
        }else{
            console.log('Deposit amount must be positive');
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount; //Update balance
            console.log(`Withdrawn: $${amount}`);
        }else{
            console.log('Invalid withdrawal amount');
        }
    }

    getBalance(){
        return  this.#balance; //Return current balance 
    }
}               

// //Usage
// const myAccount = new BankAccount(100);//Craete a new account with $100
// myAccount.deposite(50);                //Deposite $50
// myAccount.withdraw(30);                //Withdrawn: $30
// console.log(`Current Balance: $${myAccount.getBalance()}`) //Check balance

//what is Polymorphism?
//Polymorphism is another fundamental concept in object-oriented programming (OOP)
// that allows objects of different classes to be treated as objects of a common superclass.
//It enables a single interface to represent different underlying data types or classes. 
//Polymorphism can be achieved through method overriding (runtime polymorphism) and method overloading (compile-time polymorphism).
//Types of Polymorphism
//Method Overriding (Runtime Polymorphism): This occurs when a subclass provides a specific implementation of a method that is already 
//defined in its superclass. The method to be executed is determined at runtime based on the object type.

//Method Overloading (Compile-time Polymorphism): This occurs when multiple methods in the same class have the same name but different
// parameters (type or number). The method that gets called is determined at compile time.
// exmaple:-
class Animal{
    speak(){
        console.log("The animal makes a sound.");       
    }
}

class Dog extends Animal{
    speak(){
        console.log("The dog barks.");
    }
}

class Cat extends Animal{
    speak(){
        console.log("The cat meows.");
    }
}

//Method Overloading simulation using arguments
class MathOperations{
    add(a, b){
        return a + b; //For two numbers
    }

    add(a, b, c){
        return a + b + c; //For three numbers
    }
}

function makeAnimalSpeak(animal){
    animal.speak();
}

const dog = new Dog();
const cat = new Cat();
const animal = new Animal();

makeAnimalSpeak(dog);//output: The dog barks
makeAnimalSpeak(cat);// Output: The cat meows.
makeAnimalSpeak(animal);// Output: The cat meows.

const math = new MathOperations();
console.log(math.add(5, 10)); // Output: 15
console.log(math.add(5, 10, 15)); // Error: The second add method is not accessible

