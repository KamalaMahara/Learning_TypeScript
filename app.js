// first program in ts
var name = "hello world";
var age = 43;
console.log(name);
console.log(age);
//string
var firstname = "kmla";
var lastname = "mahara";
var fullname = "".concat(firstname, " ").concat(lastname);
console.log(fullname);
//boolean
var isLoggedIn = true;
console.log(isLoggedIn);
//primitive types 
var num = 10;
var b = num;
b = 20;
console.log(num);
console.log(b);
//reference types
var person = {
    name: "kmla",
    age: 54
};
var emp = person;
emp.age = 80;
console.log(person); // age will be 80  cause both person and emp refer to the same object memory location
console.log(emp);
//array
var fruits = ["apple", "banana", "litchi", "dragoon"];
console.log(fruits);
var numberArray = [1, 2, 4, 56, 7];
console.log(numberArray);
var mixedArray = ["apple", 23, true, "litchi", 54, false];
console.log(mixedArray);
//tuple
var role = [1, "admin"];
console.log(role); //fixed length and fixed data types
role.push("user");
console.log(role);
