'use strict'

var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

function calculaIMC(paciente) {
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;

    let pesoValido = true;
    let alturaValida = true;
    if (peso < 0 || peso > 500) {
        paciente.querySelector('.info-imc').textContent = 'Peso inválido';
        pesoValido = false;
    }
    if (altura < 0 || altura > 3) {
        paciente.querySelector('.info-imc').textContent = 'Altura inválida';
        alturaValida = false;
    }
    if (!alturaValida || !pesoValido) {
        paciente.classList.add('paciente-invalido')
    }
    if (pesoValido && alturaValida) {
        let imc = peso / (altura**2);
        paciente.querySelector('.info-imc').textContent = imc.toFixed(2);
    }
}

for (var i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];
    calculaIMC(paciente);
}

var adicionar = document.querySelector('#adicionar-paciente');

adicionar.addEventListener('click', (event) => {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona')
    var nome = form.nome.value;
    var peso = form.peso.value; 
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    form.nome.value = '';
    form.peso.value = '';
    form.altura.value = '';
    form.gordura.value = '';

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = '';

    nomeTd.classList.add('info-nome')
    pesoTd.classList.add('info-peso')
    alturaTd.classList.add('info-altura')
    gorduraTd.classList.add('info-gordura')
    imcTd.classList.add('info-imc')

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    calculaIMC(pacienteTr)

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
});
//imc = peso / altura²