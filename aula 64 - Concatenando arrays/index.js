const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, 7, 8, 9, 10);
console.log(a3);

// Using Rest Operator
const a4 = [1, 2, 3];
const a5 = [4, 5, 6];
const a6 = [...a4, ...a5, ...['x', 'y']]; // Spreads the arrays and then adds each element to new array
console.log(a6)