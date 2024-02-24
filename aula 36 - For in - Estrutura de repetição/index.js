// For in -> lê os índices ou chaves de objetos
const frutas = ['Pera', 'Maçã', 'Uva']

for (let i in frutas) {
    console.log(i)
}

/* 
for (let i = 0; i < frutas.lfrutas; i++) {
    console.log(frutas[i])
} 
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30,
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

