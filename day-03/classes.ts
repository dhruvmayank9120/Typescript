//class: a class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have.
//syntax: class ClassName {
//   propertyName: type;
//   constructor(parameter: type) {
//     this.propertyName = parameter;
//   }
//   methodName(parameter: type): returnType {
//    method body
//   }
// }

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(): void {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`,
//     );
//   }
// }

// const obj1 = new Person("John", 30);
// console.log(obj1.name); // Output: John
// console.log(obj1.age); // Output: 30
// console.log(obj1); // Output: Person { name: 'John', age: 30 }

// const obj2 = new Person("Jane", 25);
// console.log(obj2.name); // Output: Jane
// console.log(obj2.age); // Output: 25
// console.log(obj2); // Output: Person { name: 'Jane', age: 25 }

// const obj3 = new Person("Bob", 40);
// console.log(obj3.name); // Output: Bob
// console.log(obj3.age); // Output: 40
// console.log(obj3); // Output: Person { name: 'Bob', age: 40 }

// console.log(obj1.greet()); // Output: Hello, my name is John and I am 30 years old.
// console.log(obj2.greet());

//public: public is the default access modifier for class members. It means that the member can be accessed from anywhere, both inside and outside the class.
//private: private members can only be accessed within the class. They cannot be accessed from outside the class or from derived classes.
//protected: protected members can be accessed within the class and from derived classes, but not from outside the class.
//readonly: readonly members can only be assigned a value at the time of declaration or in the constructor. They cannot be modified after that.
//protected don't exist in JavaScript, but they are a feature of TypeScript. They allow you to create class members that can only be accessed within the class and from derived classes, but not from outside the class. This can be useful for encapsulating implementation details and preventing unintended access to class members.

// class Customer {
//   public name: string;
//   private age: number;
//   protected balance: number;

//   constructor(name: string, age: number, balance: number) {
//     this.name = name;
//     this.age = age;
//     this.balance = balance;
//   }
//   meet(): number {
//     this.age = this.age + 10;
//     return this.age;
//   }
// }

//private, protected are used to protect from accidental changes and can be changed through methods, but public can be changed directly. It is a good practice to use private and protected members to encapsulate the implementation details of a class and to prevent unintended access to class members. This can help to improve the maintainability and reliability of your code.

// const p1 = new Customer("Alice", 28, 1000);
// console.log(p1);
// console.log(p1.name); // Output: Alice
// console.log(p1.meet()); // Output: 38
// console.log(p1.balance); // Output: 1000

//super: the super keyword is used to call the constructor of the parent class and to access the properties and methods of the parent class from a derived class. It is used in the constructor of a derived class to call the constructor of the parent class and to initialize the properties inherited from the parent class. It can also be used to call methods of the parent class from a derived class.
//we used super here becuase we want to call the constructor of the parent class (Customer) to initialize the properties (name, age, balance) that are inherited from the parent class. By using super(name, age, balance), we are passing the parameters name, age, and balance to the constructor of the parent class, which will then initialize those properties for the Employee class. This allows us to reuse the code in the Customer class and avoid duplicating it in the Employee class.

// class Employee extends Customer {
//   salary: number;
//   constructor(salary: number, name: string, age: number, balance: number) {
//     super(name, age, balance);
//     this.salary = salary;
//   }
//   greet(): void {
//     console
//       .log
//
//       (`Hello, my name is ${this.name}, I am ${this.age} years old and I earn ${this.salary} dollars.`,);
//   }
//   meet(): number {
//     console.log("Hello, I am an employee.");
//     return 10;
//   }
// }

// const E1 = new Employee(5000, "Alice", 28, 1000);
// console.log(E1);
// E1.greet();

//protected is accessible in child class.

// console.log(E1.meet());
// console.log(E1.salary);

//generics: in easy words generics allow you to create reusable components that can work with different types of data. They provide a way to define a class, interface, or function with a placeholder for the type, which can be specified when the component is used. This allows you to create flexible and type-safe code that can work with different data types without duplicating code.

//syntax: class ClassName<T> {
//   propertyName: T;
//   constructor(parameter: T) {
//     this.propertyName = parameter;
//   }
// }

// function value(a: number | string): number | string {
//   return a;
// }

// console.log(value(10)); // Output: 10
// console.log(value("Rohit")); // Output: Rohit

function value<T>(a: T): T {
  return a;
}

console.log(value<number>(10)); // Output: 10
console.log(value<string>("Rohit")); // Output: Rohit
console.log(value<number[]>([10, 20, 40, 56]));
console.log(value<boolean>(true));
console.log(value<{ name: string; age: number }>({ name: "Alice", age: 28 }));

interface Admin<T, U> {
  name: string;
  age: number;
  aadhar: T;
  salary: U;
}

const obj10: Admin<number, number> = {
  name: "Rohit",
  age: 30,
  aadhar: 1234567890,
  salary: 5000,
};

const obj11: Admin<string, number> = {
  name: "Alice",
  age: 28,
  aadhar: "1234-5678-9012",
  salary: 6000,
};

//that means T can be any type, and it will be determined when we create an instance of the Admin interface. In obj10, T is replaced with number, and in obj11, T is replaced with string. This allows us to create flexible and reusable code that can work with different types of data without duplicating code.
