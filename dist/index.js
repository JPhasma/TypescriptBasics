"use strict";
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
