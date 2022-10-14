'use strict'


//calculando imc de quem já está na tabela
var pacientes = document.querySelectorAll('.paciente');

for (var i=0; i<pacientes.length; i++) {
    let paciente = pacientes[i];
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    
    let pesoValido = validatePeso(peso);
    let alturaValida = validateAltura(altura);

    if (!pesoValido) {
        paciente.querySelector('.info-imc').textContent = 'Peso inválido';
        pesoValido = false;
    }
    if (!alturaValida) {
        paciente.querySelector('.info-imc').textContent = 'Altura inválida';
        alturaValida = false;
    }
    if (!alturaValida || !pesoValido) {
        paciente.classList.add('paciente-invalido')
    }
    if (pesoValido && alturaValida) {
        paciente.querySelector('.info-imc').textContent = calculaImc(peso, altura);
    }
}

function validatePeso(peso) {
    if (peso >= 0 && peso < 500) {
        return true;
    } else {
        return false;
    }
}

function validateAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = peso / (altura**2);
    return imc.toFixed(2);
}



