const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
 if (numero === 2) {
    console.log('Número 2 skippado')
    continue;
 }
 if (numero === 5) {
    console.log('Número 5 skippado')
    continue;
 }

 if (numero === 9) {
    console.log('9 encontrado, saindo...')
    break;
 }
 console.log(numero)
}

// Continue pula para a próxima iteração porémm continua

// Break termina o laço