function getPerson(name, lastName) {
    return {
        name,
        lastName,
        say: function(topic) {
            return `${this.name} is saying about ${topic}`
        }
    }
}

const p1 = getPerson('John', 'Doe');
const p2 = getPerson('Lucas', 'Max');

console.log(p1.say('Joan'))
console.log(p2.say('Maria'))