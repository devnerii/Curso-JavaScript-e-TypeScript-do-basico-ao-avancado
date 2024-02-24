const hora = 11;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
  console.log('Olá');
}

const saldo = 7

if (saldo >= 90) {
    console.log('Você tem dinheiro e pode sair de casa.')
}
else {
    console.log('Você não tem dinheiro, logo não pode sair de casa.')
}