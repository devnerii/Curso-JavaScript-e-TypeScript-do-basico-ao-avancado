const conta = document.querySelector('.input-1')
const gorjeta = document.querySelector('.input-2')
const botao = document.querySelector('.botao')
const aviso = document.querySelector(".aviso");
const predefinido1 = document.getElementById("1")
const predefinido2 = document.getElementById("2")
const predefinido3 = document.getElementById("3")
const predefinido4 = document.getElementById("4")

predefinido1.addEventListener('click', function () {
     // Certifique-se de que 'gorjeta' seja uma referência válida para o campo de entrada.
     const gorjeta = document.querySelector('.input-2'); // Substitua '#gorjeta' pelo seletor correto do seu campo de entrada.
         gorjeta.value = '10';
})

predefinido2.addEventListener('click', function () {
    // Certifique-se de que 'gorjeta' seja uma referência válida para o campo de entrada.
    const gorjeta = document.querySelector('.input-2'); // Substitua '#gorjeta' pelo seletor correto do seu campo de entrada.
        gorjeta.value = '15';
})

predefinido3.addEventListener('click', function () {
    // Certifique-se de que 'gorjeta' seja uma referência válida para o campo de entrada.
    const gorjeta = document.querySelector('.input-2'); // Substitua '#gorjeta' pelo seletor correto do seu campo de entrada.
        gorjeta.value = '20';
})

predefinido4.addEventListener('click', function () {
    // Certifique-se de que 'gorjeta' seja uma referência válida para o campo de entrada.
    const gorjeta = document.querySelector('.input-2'); // Substitua '#gorjeta' pelo seletor correto do seu campo de entrada.
        gorjeta.value = '30';
})


botao.addEventListener('click', function receberMedia() {
    const conta1 = parseFloat(conta.value);
    const conta2 = parseFloat(gorjeta.value);

    if (isNaN(conta1) || isNaN(conta2)) {
        exibirErro();
    }
    else {
        const media = calcularTotal(conta1, conta2)
    }
})

function calcularTotal(conta1, conta2) {
    const total = conta1 + (conta1 * conta2)
    console.log(total)
    exibirMedia(total)
}
 
function exibirErro() {
    aviso.classList.add("erro");
    aviso.innerHTML = "O input deve ser um número.";
}

function exibirMedia(total) {
    aviso.classList.remove("erro");
    aviso.classList.add("aviso");
    aviso.innerHTML = `Sua conta total é: ${total}`;
}

// const total = conta1 + (conta1 * conta2)


/* botao.addEventListener('click', function receberMedia() {
    const valor1 = parseFloat(notaTeste.value);
    const valor2 = parseFloat(notaTrabalho.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        exibirErro(); // Se o input não for um número, exibirá o erro!
    } else {
        const media = calcularMedia(valor1, valor2);
        exibirMedia(media);
    }
    console.log('Botão clicado.');
})

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    console.log(media)
    exibirMedia(media)
    return media;
}

function exibirErro() {
    aviso.classList.add("erro");
    aviso.innerHTML = "O input deve ser um número.";
}
function exibirMedia(media) {
    aviso.classList.remove("erro");
    aviso.classList.add("aviso");
    aviso.innerHTML = `A média dos seus inputs é de: ${media}`;
} */