/* Primeira alternativa - ou:
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
*/
// Leia acima
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

/* Segunda Alternativa (Switch e Date)
const data = new Date();

let diaSemana;
switch (data.getDay()) {
    case 0:
        diaSemana = 'Domingo';
        break; // ou return diaSemana;
    case 1:
        diaSemana = 'Segunda-Feira';
        break; // ou return diaSemana;
    case 2: // ou return diaSemana;
        diaSemana = 'Terça-Feira';
        break; // ou return diaSemana;
    case 3:
        diaSemana = 'Quarta-Feira';
        break; // ou return diaSemana;
    case 4:
        diaSemana = 'Quinta-Feira';
        break; // ou return diaSemana;
    case 5:
        diaSemana = 'Sexta-Feira';
        break; // ou return diaSemana;
    case 6:
        diaSemana = 'Sábado';
        break; // ou return diaSemana;
    default:
        diaSemana = '';
        break;
}

let MesTexto;
switch (data.getMonth()) {
    case 0:
        MesTexto = 'Janeiro';
        break; // ou return MesTexto;
    case 1:
        MesTexto = 'Fevereiro';
        break; // ou return MesTexto;
    case 2:
        MesTexto = 'Março';
        break; // ou return MesTexto;
    case 3:
        MesTexto = 'Abril';
        break; // ou return MesTexto;
    case 4:
        MesTexto = 'Maio';
        break; // ou return MesTexto;
    case 5:
        MesTexto = 'Junho';
        break; // ou return MesTexto;
    case 6:
        MesTexto = 'Julho';
        break; // ou return MesTexto;
    case 7:
        MesTexto = 'Agosto';
        break; // ou return MesTexto;
    case 8:
        MesTexto = 'Setembro';
        break; // ou return MesTexto;
    case 9:
        MesTexto = 'Outubro';
        break; // ou return MesTexto;
    case 10:
        MesTexto = 'Novembro';
        break; // ou return MesTexto;
    case 11:
        MesTexto = 'Dezembro';
        break; // ou return MesTexto;
    default:
        MesTexto = '';
        break;
}

const Dia = data.getDate();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();
let MinutoZeroToTheLeft = (minuto >= 10) ? minuto : `0${minuto}`;
let dataFormatada = `${diaSemana}, ${Dia} de ${MesTexto} de ${ano} ${hora}:${MinutoZeroToTheLeft}`;
console.log(dataFormatada);

const h1Element = document.querySelector('.container h1');
h1Element.innerHTML += dataFormatada;
*\

/* Terceira alternativa (Arrays):
const data = new Date();
const diaSemanaNomes = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
const diaSemana = diaSemanaNomes[data.getDay()];

const mesNomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const MesTexto = mesNomes[data.getMonth()];

const Dia = data.getDate();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

1. Primeiro, você cria uma matriz (array) chamada `diaSemanaNomes` que contém os nomes dos dias da semana, começando com "Domingo" na posição 0, "Segunda-Feira" na posição 1, e assim por diante até "Sábado" na posição 6.

2. Em seguida, você cria uma variável chamada `diaSemana` e atribui a ela o valor obtido da matriz `diaSemanaNomes` usando `data.getDay()`.

   - `data.getDay()` é um método da classe `Date` que retorna o dia da semana como um número inteiro, onde 0 representa Domingo, 1 representa Segunda-Feira, 2 representa Terça-Feira e assim por diante até 6, que representa Sábado.

   - Então, quando você faz `diaSemanaNomes[data.getDay()]`, você está pegando o nome do dia da semana correspondente ao número retornado por `data.getDay()` e atribuindo-o à variável `diaSemana`.

Por exemplo, se `data.getDay()` retornar 1, então `diaSemanaNomes[1]` irá acessar o elemento "Segunda-Feira" na matriz `diaSemanaNomes`, e a variável `diaSemana` será igual a "Segunda-Feira". Isso permite que você obtenha o nome do dia da semana com base na data atual usando uma única linha de código em vez de várias instruções if ou switch.

let dataFormatada = `${diaSemana}, ${Dia} de ${MesTexto} de ${ano} ${hora}:${minuto}`;
        console.log(dataFormatada);

        const h1Element = document.querySelector('.container h1');
        h1Element.innerHTML += dataFormatada;
        */