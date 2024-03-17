// Add in all numbers (reduce)
// Return an array with the pairs (Filter)
// Return an array with the double of values (Map)
const numbers = [2, 3, 54, 51, 32, 5, 77, 76, 23, 10];
const double = numbers.reduce(function (accumulator, value, index, array) {
  accumulator += value;
  return accumulator;
}, 0);

const persons = [
  { name: "Rosa", age: 32 },
  { name: "Maria", age: 50 },
  { name: "Lucia", age: 43 },
  { name: "Joe", age: 70 },
  { name: "John", age: 92 },
  { name: "Teo", age: 15 },
  { name: "Karina", age: 27 },
  { name: "Gustavo", age: 14 },
  { name: "Dave", age: 41 },
  { name: "David", age: 66 },
];

// Return the person oldest
const oldPerson = persons.reduce((accumulator, value) => {
  if (accumulator.age > value.age) return accumulator;
  return value;
});
console.log(oldPerson);