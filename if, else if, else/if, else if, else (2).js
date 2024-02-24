const numero = 9;

if (numero < 10) {
    console.log('Seu número é menor que 10.')
}
if (numero >= 0 && numero <= 5) {
    console.log('Seu número está entre 0 e 5');
} 
else if (numero >= 6 && numero <= 8) {
    console.log('Seu número está entre 6 e 8');
}
else if (numero >= 9 && numero <= 11) {
    console.log('Seu número está entre 9 e 11');
}
else {
    console.log('Seu número não está entre nenhum');
}