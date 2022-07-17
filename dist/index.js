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
