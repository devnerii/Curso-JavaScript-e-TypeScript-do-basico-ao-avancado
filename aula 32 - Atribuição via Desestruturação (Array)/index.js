let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c)

// ... rest, ... spread
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero, , , , , ...resto] = numeros; // Para pular valores pode-se colocar valores vazios
console.log(primeiroNumero, segundoNumero)
console.log(resto)

//                        0          1          2
//                     0  1  2    0  1  2    0  1  2
const numerosdois = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numerosdois;
console.log(lista3[2]);