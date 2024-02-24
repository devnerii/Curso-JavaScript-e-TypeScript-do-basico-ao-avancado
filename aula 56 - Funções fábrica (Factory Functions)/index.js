// Factory Function
//Constructor Function
function getPerson(name, lastName, weight, height) {
    return {
        name,
        lastName,
        get nameComplete() {
            return `${this.name} ${this.lastName}`;
        },
        // Setter
        set nameComplete(value) {
            value = value.split(' ')
            this.name = value.shift();
            this.lastName = value.join(' ')
        },
        say(topic) {
            return `${this.name} is saying about ${topic}`
        },
        weight: weight,
        height: height,
        //Getter
        get imc() {
            const imc = (this.weight / (this.height ** 2));
            return `Imc: ${imc.toFixed(2).replace('.', ',')}`;
        }
    }
}

const p1 = getPerson('John', 'Doe', 69, 1.82);
const p2 = getPerson('Lucas', 'Max');
p1.nameComplete = 'Maria Oliveira Silva'
console.log(p1.nameComplete);
console.log(p2.say('Maria'));