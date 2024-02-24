const notaTeste = document.querySelector('.input-1')
const notaTrabalho = document.querySelector('.input-2')
const botao = document.querySelector('.botao')
const aviso = document.querySelector(".aviso");

botao.addEventListener('click', function receberMedia() {
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
}