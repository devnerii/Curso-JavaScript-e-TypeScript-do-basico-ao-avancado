const names = new Array('Alice', 'Bob', 'Frank');
names[3] = 'Joan';
// console.log(names);
delete names[3];
// console.log(names)

// Value for reference
const names2 = ['Alice', 'Bob', 'Frank'];
const newNames = [...names2, 'Joan'];
newNames[1] = 'Joe';
// console.log(newNames);
const New = newNames.slice(0, -1)
// console.log(New);

let name = 'John Doe Junior';
name = name.split(' '); // split by space
console.log(name);
name = name.join(' ');   // join with a space to a string
console.log(name)