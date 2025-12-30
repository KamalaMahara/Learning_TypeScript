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


