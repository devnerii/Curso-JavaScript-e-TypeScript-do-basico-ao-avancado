function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.console = (text) => {
        console.log(`${name} ${lastName} : ${text}`);
    };    
}

const p1 = new Person('Lucas', 'Eduardo');
const p2 = new Person('Chat', 'GPT');
console.log(p1.console('test'))

