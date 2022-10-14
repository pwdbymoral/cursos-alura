'use strict'

var adicionar = document.querySelector('#adicionar-paciente');

adicionar.addEventListener('click', (event) => {
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona')
    //extrai info do form
    var paciente = createPaciente(form);
    
    var erros = validatePaciente(paciente);

    if(erros.length > 0) {
        alert('Paciente inválido! Tente novamente.')
    } else {
        //cria tr e td
        var pacienteTr = createTr(paciente);
    
        //adiciona o paciente na tabela
        var tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr);
    
        form.reset();
    }
    
});

function createPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function createTr(paciente) {
    //cria a tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //adiciona as tds na tr
    pacienteTr.appendChild(createTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(createTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(createTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(createTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(createTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function createTd(dado, classe) {
    var td = document.createElement('td');

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validatePaciente(paciente) {
    var erros= [];
    
    if(!validatePeso(paciente.peso)) {
        erros.push("O peso não é válido.");
    } 
    if(!validateAltura(paciente.altura)) {
        erros.push("A altura não é válida.")
    }

    return erros;
}
