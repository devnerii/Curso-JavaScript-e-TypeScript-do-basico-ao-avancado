// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função
const verdadeira = true
let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio' // criando
    console.log(nome, nome2)
}