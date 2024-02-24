// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix

const data = new Date();
console.log(data.toString());

function consulta(mostrardata) {
    const data = new Date(2019, 3, 20, 15, 14, 27); // 0-11 ano, mês, dia, hora, minuto, miléssimo de segundo
    console.log(data.toString());
}

consulta();

function consulta2(mostrardata2) {
    const data = new Date('2019-04-20 20:20:59'); // ou 2019-04-20T20:20:59.100
    console.log(data.toString());
}

consulta2();

console.log('Dia', data.getDate()); // obtém o número do dia
console.log('Mês', data.getMonth() + 1); // obtém o número do mês mais um mês (apenas exemplo), começa do 0 ao 11
console.log('Ano', data.getFullYear()); // obtém o número do ano
console.log('Hora', data.getHours()); // obtém o número do hora
console.log('Minuto', data.getMinutes()); // obtém o número do minuto
console.log('Segundo', data.getSeconds()); // obtém o número do segundo
console.log('MIlissegundo', data.getMilliseconds()); // obtém o número do milissegundo
console.log('Dia da semana', data.getDay()); // obtém o número do dia da semana, 0 é domingo, 6 é sábado


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const novaData = new Date ();
const dataBrasil = formataData(data);
console.log(dataBrasil);