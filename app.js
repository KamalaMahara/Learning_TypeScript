"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// first program in ts
let name = "hello world";
let age = 43;
console.log(name);
console.log(age);
//string
let firstname = "kmla";
let lastname = "mahara";
let fullname = `${firstname} ${lastname}`;
console.log(fullname);
//boolean
let isLoggedIn = true;
console.log(isLoggedIn);
//primitive types 
let num = 10;
let b = num;
b = 20;
console.log(num);
console.log(b);
//reference types
let person = {
    name: "kmla",
    age: 54
};
let emp = person;
emp.age = 80;
console.log(person); // age will be 80  cause both person and emp refer to the same object memory location
console.log(emp);
//array
let fruits = ["apple", "banana", "litchi", "dragoon"];
console.log(fruits);
let numberArray = [1, 2, 4, 56, 7];
console.log(numberArray);
let mixedArray = ["apple", 23, true, "litchi", 54, false];
console.log(mixedArray);
//tuple
let role = [1, "admin"];
console.log(role); //fixed length and fixed data types
role.push("user");
console.log(role); //but not recommended
//enum
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
let userStatus = Status.Active;
console.log(userStatus);
let user1 = {
    id: 1,
    name: "kmla",
    age: 90,
};
console.log(user1);
var Roles;
(function (Roles) {
    Roles["Designer"] = "designer";
    Roles["Developer"] = "developer";
})(Roles || (Roles = {}));
let emp1 = {
    id: 2,
    name: "kamlaa",
    age: 34,
    role: Roles.Developer,
    salary: 50000
};
let myage = 345;
//function
function add(a, b) {
    return a + b;
}
console.log(add(123, 32));
function logMessage(message) {
    console.log(message);
}
logMessage("hhello worldd");
//function signature | arrow function
let multiply = (x, y) => {
    return x * y;
};
console.log(multiply(23, 43));
//Generics in functions
function details(id, name) {
    console.log(`ID: ${id}, Name:${name}`);
}
details(1, "kmla");
details("2", "mahara");
let use1 = {
    name: "kmla",
    id: 1
};
console.log(use1);
let user2 = {
    name: "pr",
    id: "3"
};
console.log(user2);
//# sourceMappingURL=app.js.map