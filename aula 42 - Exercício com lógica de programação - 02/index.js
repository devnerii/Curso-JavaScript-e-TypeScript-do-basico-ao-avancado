// Escreva uma função chamada ePaisagem que
// receba dois argumentos, largura e altura
// de uma imagem (number).
// retorna true se a imagem estiver no modo paisagem


function ePaisagem(largura, altura) {
    if (largura > altura) {
       return true
    }
    else {
       return false
    }
}

// Função ternária > const max = (x, y) => x > y ? x : y;
num1 = 1920
num2 = 1080
let paisagem = (largura, altura) => largura > altura ? true : false;
let resultado = paisagem(num1, num2) ? 'É uma paisagem' : 'Não é uma paisagem';
console.log(resultado)

