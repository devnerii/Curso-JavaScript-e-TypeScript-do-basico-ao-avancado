const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
 if (e.keyCode === 13) {
 if (!inputTarefa) return;
    criaTarefa(inputTarefa.value)
 }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus()
}

function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
   // botaoApagar.classList.add('apagar');
   botaoApagar.setAttribute('class', 'apagar'); 
   botaoApagar.setAttribute('title', 'Apagar esta tarefa');
   li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa) return;
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listadeTarefas = []
    for (let tarefa of listadeTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listadeTarefas.push(tarefaTexto)
    }
    const tarefasJson = JSON.stringify(listadeTarefas)
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas)
    for (let tarefa of listadeTarefas)
    criaTarefa(tarefa);
}

adicionaTarefasSalvas();

/* const paragrafos = document.querySelector('.paragrafo')
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundolorBody = estiloBody.backgroundColor
console.log(backgroundolorBody)

for (let p of ps) {
 p.style.backgroundColor = backgroundolorBody
 p.style.color = '#FFFFFF'
} */