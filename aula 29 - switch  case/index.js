const data = new Date();
const DiaSemana = data.getDay();

let diaSemanaTexto;

/*
if (DiaSemana === 0) {
    diaSemanaTexto = 'Domingo';
}
else if (DiaSemana === 1){
     diaSemanaTexto = 'Segunda';
}
else if (DiaSemana === 2){
    diaSemanaTexto = 'Terça';
}
else if (DiaSemana === 3){
    diaSemanaTexto = 'Quarta';
}
else if (DiaSemana === 4){
    diaSemanaTexto = 'Quinta';
}
else if (DiaSemana === 5){
    diaSemanaTexto = 'Sexta';
}
else if (DiaSemana === 6){
    diaSemanaTexto = 'Sábado';
}
console.log(DiaSemana, diaSemanaTexto)
*/

switch (DiaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
        break;
}

console.log(DiaSemana, diaSemanaTexto)