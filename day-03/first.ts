//interface: an interface is a blueprint for an object. It defines the structure of an object, including the properties and their types. It can also define methods that an object must implement. Interfaces are used to ensure that an object adheres to a specific structure and to provide type checking at compile time.
//syntax: interface InterfaceName {
//   propertyName: type;
//   methodName(parameter: type): returnType;
// }

interface Person {
  name: string;
  age: number;
  gender: string;
  aadhar?: number;
}
//? means that the property is optional, it may or may not be present in the object.
const obj: Person = {
  name: "Mayank",
  age: 22,
  gender: "Male",
};

//Latest example

interface customer {
  name: string;
  age: number;
  balance: number;
}
//partial is a utility type that makes all properties of the given type optional.
//Required is a utility type that makes all properties of the given type required.
//Readonly is a utility type that makes all properties of the given type readonly.
const obj2: Partial<customer> = {
  name: "Mayank",

  balance: 1000,
};

//array of objects

interface People {
  name: string;
  age: number;
}
interface manager {
  salary: number;
  id: string;
}
const arr: (People | manager)[] = [
  { name: "Rohit", age: 20 },
  { name: "Mohit", age: 23 },
  { salary: 20, id: "2312" },
];

//function in typescript
//syntax: function functionName(parameter: type): returnType {
//   function body
//  return value;
//}
function greet(a: number): number {
  console.log(a);
  return a + 5;
}

console.log(greet(10));

function meet(msg: string, val: number): void {
  console.log(msg, val);
}

meet("Hello", 5);

//optional parameters in function
//syntax: function functionName(parameter: type = defaultValue): returnType {
//   function body
//   return value;
// }

function neet(msg: string = "jit") {
  console.log(msg);
}
neet();
neet("Hello");

//optional parameters in function
//syntax: function functionName(parameter?: type): returnType {
//   function body
//   return value;
// }

function GATE(person?: string) {
  console.log(person);
}
GATE("Dhruv");
GATE();

//arrow function in typescript
//syntax: const functionName = (parameter: type): returnType => {
//   function body
//   return value;
// }

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(5, 10));

//callback function in typescript
//syntax: function functionName(parameter: type, callback: (parameter: type) => returnType): void {
//   function body
//   callback(parameter);
// }
function placeOrder(order: number, callback: (amount: number) => void): void {
  const amount: number = order + 10;
  callback(amount);
}

placeOrder(10, (amount) => {
  console.log(amount);
});

//Rest parameters in typescript
//syntax: function functionName(...parameter: type[]): returnType {
//   function body
//   return value;
// }

function total(...arr: number[]): void {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  console.log(sum);
}

total(2, 3, 4, 5, 123, 90, 45); //can be any number of parameters

//extend keyword: this keyword is used to create a new class that is a child of an existing class. The new class inherits the properties and methods of the existing class and can also have its own properties and methods.
//syntax: class ChildClass extends ParentClass {
//    properties and methods of the child class
// }

interface human {
  name: string;
  age: number;
}

interface Teacher extends human {
  salary: string;
  id: number;
}

interface BankEmployee extends human {
  salary: string;
  Position: string;
}

const obj8: Teacher = {
  name: "Mayank",
  age: 22,
  salary: "50000",
  id: 1234,
};
