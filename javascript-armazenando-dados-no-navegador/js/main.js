'use strict'
const form = document.getElementById('novoItem');
const lista = document.querySelector('.lista');

const itens = JSON.parse(localStorage.getItem('itens')) || [];
itens.forEach(elemento => {
    criaElemento(elemento);
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];
    
    const existeItem = itens.find( elemento => elemento.nome === nome.value);
    
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if(existeItem) {
        itemAtual.id = existeItem.id;

        atualizaElemento(itemAtual);
    } else {
        itemAtual.id = itens.length;

        criaElemento(itemAtual);
        itens.push(itemAtual);
    }
    
    localStorage.setItem('itens', JSON.stringify(itens));
    
    nome.value = '';
    quantidade.value = '';
});

function criaElemento(item) {
    const elemento = document.createElement('li');
    elemento.classList.add('item');

    const numero = document.createElement('strong');
    numero.innerHTML = item.quantidade;
    numero.dataset.id = item.id;
    elemento.appendChild(numero);

    elemento.innerHTML += item.nome;

    lista.appendChild(elemento);
}

function atualizaElemento(item) {
    const itemAntigo = document.querySelector('[data-id="'+item.id+'"]')
    itemAntigo.innerHTML = item.quantidade;
}
