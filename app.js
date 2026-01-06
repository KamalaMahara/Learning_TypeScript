// // first program in ts
// let name: string = "hello world";
// let age: number = 43;
// console.log(name);
// console.log(age);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// //string
// let firstname: string = "kmla";
// let lastname: string = "mahara";
// let fullname: string = `${firstname} ${lastname}`;
// console.log(fullname);
// //boolean
// let isLoggedIn: boolean = true;
// console.log(isLoggedIn);
// //primitive types 
// let num: number = 10;
// let b = num;
// b = 20;
// console.log(num);
// console.log(b);
// //reference types
// let person = {
//   name: "kmla",
//   age: 54
// }
// let emp = person;
// emp.age = 80;
// console.log(person);  // age will be 80  cause both person and emp refer to the same object memory location
// console.log(emp);
// //array
// let fruits: string[] = ["apple", "banana", "litchi", "dragoon"];
// console.log(fruits);
// let numberArray: number[] = [1, 2, 4, 56, 7];
// console.log(numberArray);
// let mixedArray: (string | number | boolean)[] = ["apple", 23, true, "litchi", 54, false];
// console.log(mixedArray);
// //tuple
// let role: [number, string] = [1, "admin"];
// console.log(role); //fixed length and fixed data types
// role.push("user");
// console.log(role); //but not recommended
// //enum
// enum Status {
//   Active,
//   Inactive,
//   Pending,
// }
// let userStatus: Status = Status.Active;
// console.log(userStatus);
// //interface
// interface UserDetails {
//   id: Number,
//   name: String,
//   age: Number,
//   gmail?: String | Number    //optional proprty
// }
// let user1: UserDetails = {
//   id: 1,
//   name: "kmla",
//   age: 90,
// }
// console.log(user1);
// enum Roles {
//   Designer = "designer",
//   Developer = "developer"
// }
// interface employee extends UserDetails {
//   role: Roles,
//   salary: Number
// }
// let emp1: employee = {
//   id: 2,
//   name: "kamlaa",
//   age: 34,
//   role: Roles.Developer,
//   salary: 50000
// }
// //type
// type age = number;
// let myage: age = 345;
// //function
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(123, 32));
// function logMessage(message: String): void {
//   console.log(message);
// }
// logMessage("hhello worldd");
// //function signature | arrow function
// let multiply = (x: number, y: number): number => {
//   return x * y;
// }
// console.log(multiply(23, 43));
// //Generics in functions
// function details<T, U>(id: T, name: U): void {
//   console.log(`ID: ${id}, Name:${name}`);
// }
// details<number, string>(1, "kmla");
// details<string, string>("2", "mahara");
// //generics in interface 
// interface userDetails<T, U> {
//   id: T
//   name: U,
// }
// let use1: userDetails<number, string> = {
//   name: "kmla",
//   id: 1
// }
// console.log(use1);
// let user2: userDetails<string, string> = {
//   name: "pr",
//   id: "3"
// }
// console.log(user2);
//OOP IN TS
//class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var user = new Person("kmla", 43);
console.log(user);
//inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.meow = function () {
        console.log("".concat(this.name, " says meoooooooooow"));
    };
    return Cat;
}(Animal));
var cat1 = new Cat("guddu");
cat1.eat();
cat1.meow();
var animal = new Animal("lion");
animal.eat();
//acess modifiers
var BanckAccount = /** @class */ (function () {
    function BanckAccount(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }
    BanckAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". New balance is ").concat(this.balance));
    };
    return BanckAccount;
}());
var DematAccount = /** @class */ (function (_super) {
    __extends(DematAccount, _super);
    function DematAccount(accountNumber, balance, owner, accountType, brokerName) {
        var _this = _super.call(this, accountNumber, balance, owner) || this;
        _this.accountType = accountType;
        _this.brokerName = brokerName;
        _this.accountType = accountType;
        _this.brokerName = brokerName;
        return _this;
    }
    DematAccount.prototype.getDetails = function () {
        console.log("Account Owner: ".concat(this.owner, ", Balance: ").concat(this.balance, ", Account Type: ").concat(this.accountType, ", Broker Name: ").concat(this.brokerName));
        // account number is private so cant acess 
    };
    return DematAccount;
}(BanckAccount));
var dmat = new DematAccount("1234567890", 50000, "kmla", "Equity", "ABC Brokers");
dmat.deposit(15000);
dmat.getDetails();
var bankAcc = new BanckAccount("0987654321", 100000, "mahara");
bankAcc.deposit(25000);
