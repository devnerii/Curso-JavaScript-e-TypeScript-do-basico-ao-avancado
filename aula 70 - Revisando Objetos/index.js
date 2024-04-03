const persons = {
    name: 'John',
    age: 25,
}

const object = 'name';

console.log(persons[object]); // Outputs "John"</s

const Persons = new Object();
Persons.name = 'John Doe';
Persons.age = 30;
delete Persons.age

console.log(Persons)