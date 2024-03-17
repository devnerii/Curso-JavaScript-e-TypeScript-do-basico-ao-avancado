// Return the add of double of alls pairs
// -> Filter pairs
// -> Double the values 
// -> Reduce (Add all) 



const numbers = [2, 3, 54, 51, 32, 5, 77, 76, 23, 10];
const pairs = numbers.filter(value => value % 2 === 0).map(value => value * 2).reduce((accumulator, value) => accumulator += value);
console.log(pairs)