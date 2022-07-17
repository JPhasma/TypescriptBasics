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

// Type Assertion
let cid: any = 1; // this can be any, but no we assert it's type: eg as a number
let customerId = <number>cid;
// this also works as Type Assertion
let customerStringID = cid as string;
customerStringID = 'One';
console.log(customerId, customerStringID);

// Functions - can also define the return type eg: the ':number' after the arguments
function addNum(x: number, y: number): number {
  return x + y;
}
//eg: this will now error
// console.log(addNum(1, '2'));
console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}

log('Message as string');
log(40); // logs the number 40

// Interfaces (similar to the Object Typing above)
interface CarInterface {
  readonly id: number; // can set this so can't be overwritten and is readonly
  make: string;
  age?: number; // this? allows for optional values
}

const car1: CarInterface = {
  id: 1,
  make: 'Ford',
};
console.log(car1.make);

// Interfaces can be used with functions eg:
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (a: number, b: number): number => a + b;
const subtract: MathFunc = (a: number, b: number): number => a - b;
console.log(add(1, 2), subtract(1, 2)); // should log two returned calculations, 3 and -1

// classes
class Person {
  id: number;
  name: string;
  // nb the above properties can be set to private or protected with typescript
  // eg: private id: number
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    console.log(this.id, this.name);
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const brad = new Person(1, 'Brad Traversy');
const jen = new Person(2, 'Jen Star');
console.log(brad, jen);
console.log(jen.register()); // accessing the register method on this class

// Subclasses - can extend a class with typescript
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const shawn = new Employee(3, 'Shawn', 'Developer');
console.log(shawn);
console.log(shawn.register());
