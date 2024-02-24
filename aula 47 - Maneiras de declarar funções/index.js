// Declaração de função (Function Hoisting)

function falaOi() {
    console.log('Oie')
}

falaOi();

// Firt-class objects (Objetos de primeira classe)
// Funcition expression
const souUmDado = function () {
    console.log('Sou um dado.')
}

souUmDado();

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
}

arrowFunction();

// Dentro de um objeto

const objeto = {
    falar: function () {
        console.log("Estou falando...")
    }
}

objeto.falar() // Versão alternativa abaixo (sem nome e sem function)

/*/
const objeto = {
    falar() {
        console.log("Estou falando...")
    }
}
/*/



