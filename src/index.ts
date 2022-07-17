//basic types
let id: number = 6;
let company: string = 'Weyland Yutani';
let isDangerous: boolean = true;

console.log('ID:', id, 'Company:', company, 'IsDangerous?: ', isDangerous);

// Type for an array of numbers
let ids: number[] = [1, 2, 3, 4, 5];

// use 'any' to be able to have a mixed array
let arr: any[] = [1, 2, '3', 'mixed things', true];

// Tuple - can define the Types in an array
let person: [number, string, boolean, object] = [
  5,
  'Crew Members',
  true,
  { expendable: true },
];

console.log(
  'Tuple example - eg: must be a number, string, boolean, object',
  person
);

// Tuples can then be defined into an array (an array of Tuples)
let employee: [number, string][];
employee = [
  [1, 'Jane'],
  [2, 'Rane'],
  [3, 'Ja'],
];

console.log('Tuple array example:', employee);

// Union - allows for more than one Type should you really need it
let flipFlop: string | number = 'this string could also be a number if needed';
console.log('Union Type demoed by flipFlop', flipFlop);
flipFlop = 50;
console.log('Union Type demoed by flipFlop', flipFlop);
flipFlop = 'Was a string, then a number, back to a string again';
console.log('Union Type demoed by flipFlop', flipFlop);

// Enum - allow to define a set of named constants, either numberic or string
// Direction1 has numeric assigned enumerations
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log('Enum example - Direction1.Up:', Direction1.Up);
console.log('Enum example - Direction1.Down:', Direction1.Down);
console.log('Enum example - Direction1.Left:', Direction1.Left);
console.log('Enum example - Direction1.Right:', Direction1.Right);

// Direction2 has string assigned enumerations
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log('Enum example - Direction2.Up:', Direction2.Up);
console.log('Enum example - Direction2.Down:', Direction2.Down);
console.log('Enum example - Direction2.Left:', Direction2.Left);
console.log('Enum example - Direction2.Right:', Direction2.Right);

// Objects can be defined by types
const user: { id: number; name: string } = {
  id: 1,
  name: 'John',
};

// can define an object also by creating a type first
type Car = {
  id: number;
  make: string;
};

const car: Car = {
  id: 1,
  make: 'Nissan',
};
console.log(car.make);
