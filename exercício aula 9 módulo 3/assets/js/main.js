document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("#calculoForm");
    const aviso = document.querySelector(".aviso");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        aviso.innerHTML = "";

        const peso = parseFloat(document.querySelector("#Peso").value);
        // Converter o valor de Altura para um número decimal
        const altura = parseFloat(document.querySelector("#Altura").value.replace(',', '.')); // Substitua ',' por '.' para garantir o ponto decimal
        const calculo = peso / (altura * altura);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || peso === null || altura === null) {
            aviso.classList.add("erro");
            aviso.innerHTML = "Peso ou Altura inválidos";
        } else if (peso > 220 || altura > 2.20) {
            aviso.classList.add("erro");
            aviso.innerHTML = `Peso/altura ultrapassou o limite`;
        } else if (calculo < 18.5) {
            aviso.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Abaixo do peso)`;
        } else if (calculo >= 18.5 && calculo <= 24.9) {
            aviso.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Peso normal)`;
        } else if (calculo >= 25 && calculo <= 29.99) {
            aviso.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Sobrepeso)`;
        } else if (calculo >= 30 && calculo <= 34.9) {
            aviso.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 1)`;
        } else if (calculo >= 35 && calculo <= 39.99) {
            aviso.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 2)`;
        } else {
            aviso.innerHTML = `Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 3)`;
        }
    });
});
