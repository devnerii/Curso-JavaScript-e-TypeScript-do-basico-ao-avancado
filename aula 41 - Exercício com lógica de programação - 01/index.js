// Escreva uma função que recebe 2 números e retorna o maior deles

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

let min = 1
let max = 50
let rand = random(min, max);
console.log(rand)

function encontrarmaiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2
    }

    // Forma ternária > return x > y ? x : y;
    // Função ternária > const max = (x, y) => x > y ? x : y;
}

let numero1 = rand
let numero2 = 20

let maiorNumero = encontrarmaiorNumero(numero1, numero2)

console.log(`O maior número é ${maiorNumero}`)

