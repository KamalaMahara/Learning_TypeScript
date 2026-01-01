// first program in ts
let name: string = "hello world";
let age: number = 43;
console.log(name);
console.log(age);

//string
let firstname: string = "kmla";
let lastname: string = "mahara";
let fullname: string = `${firstname} ${lastname}`;
console.log(fullname);

//boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);


//primitive types 
let num: number = 10;
let b = num;
b = 20;
console.log(num);
console.log(b);

//reference types
let person = {
  name: "kmla",
  age: 54
}
let emp = person;
emp.age = 80;
console.log(person);  // age will be 80  cause both person and emp refer to the same object memory location
console.log(emp);

//array
let fruits: string[] = ["apple", "banana", "litchi", "dragoon"];
console.log(fruits);

let numberArray: number[] = [1, 2, 4, 56, 7];
console.log(numberArray);

let mixedArray: (string | number | boolean)[] = ["apple", 23, true, "litchi", 54, false];
console.log(mixedArray);

//tuple
let role: [number, string] = [1, "admin"];
console.log(role); //fixed length and fixed data types

role.push("user");
console.log(role); //but not recommended

//enum
enum Status {
  Active,
  Inactive,
  Pending,
}
let userStatus: Status = Status.Active;
console.log(userStatus);

//interface

interface UserDetails {
  id: Number,
  name: String,
  age: Number,
  gmail?: String | Number    //optional proprty
}
let user1: UserDetails = {
  id: 1,
  name: "kmla",
  age: 90,

}
console.log(user1);

enum Roles {
  Designer = "designer",
  Developer = "developer"
}
interface employee extends UserDetails {
  role: Roles,
  salary: Number
}
let emp1: employee = {
  id: 2,
  name: "kamlaa",
  age: 34,
  role: Roles.Developer,
  salary: 50000
}

//type
type age = number;
let myage: age = 345;

//function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(123, 32));
function logMessage(message: String): void {
  console.log(message);
}
logMessage("hhello worldd");

//function signature | arrow function
let multiply = (x: number, y: number): number => {
  return x * y;
}
console.log(multiply(23, 43));

//Generics in functions

function details<T, U>(id: T, name: U): void {
  console.log(`ID: ${id}, Name:${name}`);
}
details<number, string>(1, "kmla");
details<string, string>("2", "mahara");

//generics in interface 
interface userDetails<T, U> {
  id: T
  name: U,

}
let use1: userDetails<number, string> = {
  name: "kmla",
  id: 1
}
console.log(use1);

let user2: userDetails<string, string> = {
  name: "pr",
  id: "3"
}
console.log(user2);

