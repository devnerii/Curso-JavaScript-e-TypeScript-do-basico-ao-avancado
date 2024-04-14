// Constructor -> mold (class)

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.nameComplete = () => this.name + ' ' + this.lastName;
}

// Instancy
const person1 = new Person('John', 'O.');
const person2 = new Person('Maria', 'A.');

console.dir(person1);
console.dir(person2);
Person.prototype.fullName = 'Test';
console.dir(Person.prototype.fullName);