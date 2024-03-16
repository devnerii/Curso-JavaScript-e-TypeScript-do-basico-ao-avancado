// Filter always return an array, with the same quantity of elements
// Or less.

// Return the numbers above 10

const numbers = [32, 123, 43, 5, 76, 45, 4, 7, 8, 9, 2, 3, 4, 6];

const numbersFilter = numbers.filter((value, index, array) => {/*/ console.log(value, index);/*/ return value > 10});
// console.log(numbersFilter);

// Return the peoples that has the name with 5 words or more
// Return the peoples with more than 50 years old
// Return the peoples with name finish with a

const peoples = [
    {name: 'Rosa', age: 32},
    {name: 'Maria', age: 50},
    {name: 'Lucia', age: 43},
    {name: 'Joe', age: 70},
    {name: 'John', age: 92},
    {name: 'Teo', age: 15},
    {name: 'Karina', age: 27},
    {name: 'Gustavo', age: 14},
    {name: 'Dave', age: 41},
    {name: 'David', age: 66},
]

const peoplesFilter = peoples.filter(value => {
    return (value.name.length >= 5 && value.age >= 50 && value.name.toLowerCase().endsWith('a'))
})

console.log(peoplesFilter)