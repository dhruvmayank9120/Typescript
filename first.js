// we will see the problems of javascript and why did we need typescript in the first place

let balance = 200;

// balance = "Twenty";

console.log(balance);

let obj = {
  name: "Rohit",
  age: 17,
};

console.log(obj.height);
// this will not give us any error but it will give us undefined which is a problem because we might be expecting a number but we are getting undefined and this can lead to bugs in our code

// we can also change the type of the variable which can lead to bugs in our code
balance = "Two Hundred";
console.log(balance);

//in nutshell, the problems of javascript are:
// 1. Dynamic typing: we can change the type of a variable which can lead to bugs in our code
// 2. Lack of type safety: we can access properties that do not exist which can lead to bugs in our code
// 3. Lack of tooling support: we do not have any tooling support to catch these errors at compile time which can lead to bugs in our code
// these are some reasons why we needed typescript in the first place, to solve these problems and provide a better developer experience.
