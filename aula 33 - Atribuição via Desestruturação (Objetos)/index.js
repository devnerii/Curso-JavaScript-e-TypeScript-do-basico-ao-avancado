const pessoa = {
 nome: 'Luiz',
 sobrenome: 'Miranda',
 idade: '30',
 endereço: {
    rua: 'Av Brasil',
    numero: 320,
 }
};
// Atribuição via desestruturação
const { nome, sobrenome, idade, endereço: {rua: r = 12345, numero}, endereço, ...resto } = pessoa;
console.log(nome, sobrenome, idade, r, numero, endereço)