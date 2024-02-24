// Usando if/else
var idade = 18;
var status;
if (idade >= 18) {
    status = "adulto";
} else {
    status = "menor de idade";
}

// Usando o operador ternário
var idade = 18;
var status = (idade >= 18) ? "adulto" : "menor de idade";


// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
console.log(nivelUsuario)

/*/ 
    if (pontuacaoUsuario >= 1000) {
    console.log('Meu usuário é um usuário vip')
}

else {
    console.log('Não é um usuário vip')
} 
/*/

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
