const paragrafos = document.querySelector('.paragrafo')
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundolorBody = estiloBody.backgroundColor
console.log(backgroundolorBody)

for (let p of ps) {
 p.style.backgroundColor = backgroundolorBody
 p.style.color = '#FFFFFF'
}