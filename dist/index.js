"use strict";
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
//basic types
var id = 6;
var company = 'Weyland Yutani';
var isDangerous = true;
console.log('ID:', id, 'Company:', company, 'IsDangerous?: ', isDangerous);
// Type for an array of numbers
var ids = [1, 2, 3, 4, 5];
// use 'any' to be able to have a mixed array
var arr = [1, 2, '3', 'mixed things', true];
// Tuple - can define the Types in an array
var person = [
    5,
    'Crew Members',
    true,
    { expendable: true },
];
console.log('Tuple example - eg: must be a number, string, boolean, object', person);
// Tuples can then be defined into an array (an array of Tuples)
var employee;
employee = [
    [1, 'Jane'],
    [2, 'Rane'],
    [3, 'Ja'],
];
console.log('Tuple array example:', employee);
// Union - allows for more than one Type should you really need it
var flipFlop = 'this string could also be a number if needed';
console.log('Union Type demoed by flipFlop', flipFlop);
flipFlop = 50;
console.log('Union Type demoed by flipFlop', flipFlop);
flipFlop = 'Was a string, then a number, back to a string again';
console.log('Union Type demoed by flipFlop', flipFlop);
// Enum - allow to define a set of named constants, either numberic or string
// Direction1 has numeric assigned enumerations
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('Enum example - Direction1.Up:', Direction1.Up);
console.log('Enum example - Direction1.Down:', Direction1.Down);
console.log('Enum example - Direction1.Left:', Direction1.Left);
console.log('Enum example - Direction1.Right:', Direction1.Right);
// Direction2 has string assigned enumerations
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log('Enum example - Direction2.Up:', Direction2.Up);
console.log('Enum example - Direction2.Down:', Direction2.Down);
console.log('Enum example - Direction2.Left:', Direction2.Left);
console.log('Enum example - Direction2.Right:', Direction2.Right);
// Objects can be defined by types
var user = {
    id: 1,
    name: 'John',
};
var car = {
    id: 1,
    make: 'Nissan',
};
console.log(car.make);
// Type Assertion
var cid = 1; // this can be any, but no we assert it's type: eg as a number
var customerId = cid;
// this also works as Type Assertion
var customerStringID = cid;
customerStringID = 'One';
console.log(customerId, customerStringID);
// Functions - can also define the return type eg: the ':number' after the arguments
function addNum(x, y) {
    return x + y;
}
//eg: this will now error
// console.log(addNum(1, '2'));
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
log('Message as string');
log(40); // logs the number 40
var car1 = {
    id: 1,
    make: 'Ford',
};
console.log(car1.make);
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
console.log(add(1, 2), subtract(1, 2)); // should log two returned calculations, 3 and -1
// classes
var Person = /** @class */ (function () {
    // nb the above properties can be set to private or protected with typescript
    // eg: private id: number
    function Person(id, name) {
        this.id = id;
        this.name = name;
        console.log(this.id, this.name);
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy');
var jen = new Person(2, 'Jen Star');
console.log(brad, jen);
console.log(jen.register()); // accessing the register method on this class
// Subclasses - can extend a class with typescript
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var shawn = new Employee(3, 'Shawn', 'Developer');
console.log(shawn);
console.log(shawn.register());
