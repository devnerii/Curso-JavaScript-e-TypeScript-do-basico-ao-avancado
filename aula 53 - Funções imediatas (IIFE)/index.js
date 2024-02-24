// IIFE -> Immediately invoked function expression

(function(){

    const sobrenome = 'Malado'
    function CriaNome(nome){
        return nome + ' ' + sobrenome
    }

    function FalaNome(){
        console.log(CriaNome('Ruan'))
    }
    FalaNome();
})();

(function(idade, peso, altura){

    const sobrenome = 'Malado'
    function CriaNome(nome){
        return nome + ' ' + sobrenome
    }

    function FalaNome(){
        return CriaNome('Ruan');
    }
    FalaNome();

    function falaPessoa() {
        console.log(`${FalaNome()} idade: ${idade}, peso: ${peso} e altura: ${altura}`)
    }
    falaPessoa();
})(19, 89, 1.80);