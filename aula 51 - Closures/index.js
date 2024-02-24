function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('luiz');
console.log(funcao())