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
