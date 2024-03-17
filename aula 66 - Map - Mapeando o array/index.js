const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersMap = numbers.map(value => value * 2);

// console.log(numbersMap);

// For each element:
// Return just one string with the name of people
// Remove just the key "name" from object
// Add a key id for each object

const persons = [
    {name: 'Joan', age: 19},
    {name: 'Maria', age: 29},
    {name: 'Lucia', age: 10},
    {name: 'John', age: 27},
    {name: 'Dan', age: 15},
    {name: 'April', age: 35},
    {name: 'Ken', age: 42},
    {name: 'Barbie', age: 28},
    {name: 'Mya', age: 12},
]

const names = persons.map(value => value.name);
const Names = persons.map(value => value.name).join(', ');
const age = persons.map((object) => ({age: object.age}));
// Or...
/* 
const age = persons.map(function (object) {
    delete object.name
    return object
});
*/
const id = persons.map((object, index) => {object.id = (index + 1);return object;})
console.log(id);