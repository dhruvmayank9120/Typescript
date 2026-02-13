"use strict";
//type inference: means that the compiler can automatically determine the type of a variable based on the value assigned to it. In this case, when we assign the value 10 to the variable 'num', the compiler infers that 'num' is of type 'number'. However, when we try to assign a string value "Rohit" to 'x', it will result in an error because 'x' has not been declared with a specific type and the compiler cannot infer its type from the assignment.
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
// x = "Rohit";
let money;
money = 20;
money = "Rohit";
console.log(money.toUpperCase());
let val2;
val2 = 20;
val2 = "Rohit";
if (typeof val2 === "string") {
    console.log(val2.toUpperCase());
}
if (typeof val2 === "number") {
    console.log(val2.toFixed(2));
}
//unknown is safer than any because it requires type checking before performing operations on it. In the case of 'val2', we cannot directly call the 'toUpperCase()' method without first checking if 'val2' is of type 'string'. This is because 'unknown' does not allow us to perform operations on it without explicit type assertions or checks, ensuring that we handle the value safely and avoid potential runtime errors.
//Non primitve data types: arrays, objects, functions, classes, interfaces, etc.
let arr = [1, 2, 3, 4, 5];
let arr2 = [2, 1, 19, 10];
let arr3 = ["Rohit", 20, 11, "Sohan"];
// arr3.push(true);//error because we have defined the array to only accept strings and numbers, and 'true' is a boolean value. This helps to maintain type safety and prevents unintended values from being added to the array.
let arr4 = ["Rohit", 20, 11, "Sohan", true];
let tuple = ["Rohit", 25, 87];
//JIT: just in time compilation, it is a technique used by some programming languages to improve performance by compiling code at runtime rather than ahead of time. In the context of TypeScript, the TypeScript compiler (tsc) compiles TypeScript code into JavaScript code before it is executed. This means that the TypeScript code is transformed into JavaScript code that can be run in any JavaScript environment, such as a web browser or Node.js. The JIT compilation allows for faster execution of the code since it is compiled on the fly, but it also means that there may be some overhead during the initial compilation process.
let obj = {
    name: "Rohit",
    age: 20,
    gender: "female",
};
let person = {
    name: "Rohit",
    age: 20,
    balance: 1000,
};
let c1 = {
    name: "Rohit",
    age: 20,
    id: "hh78",
};
let obj3 = {
    name: "Rohit",
    age: 20,
    position: "Manager",
    id: 210,
};
//type can't be used multiple times but this luxury is possible in interfaces. In the case of the 'admin' interface, we can declare it multiple times and add new properties to it without any issues. This allows for more flexibility and modularity in defining types, as we can extend existing interfaces without having to redefine them entirely. On the other hand, with type aliases, we would need to redefine the entire type if we wanted to add new properties, which can be less efficient and more cumbersome to manage.
//# sourceMappingURL=first.js.map