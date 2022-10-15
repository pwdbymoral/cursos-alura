'use strict'

var adicionar = document.querySelector('#adicionar-paciente');

adicionar.addEventListener('click', (event) => {
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona')
    //extrai info do form
    var paciente = createPaciente(form);
    
    var erros = validatePaciente(paciente);

    if(erros.length > 0) {
        showsErrorMessage(erros);
    } else {
        addPaciente(paciente);
        form.reset();
        document.querySelector(".errorlist").innerHTML = "";
    }
    
});

function addPaciente(paciente) {
    var pacienteTr = createTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

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
    var errors= [];
    
    if(paciente.nome.length === 0) {
        errors.push("O nome não pode ser em branco.")
    }
    if(!validatePeso(paciente.peso)) {
        errors.push("O peso não é válido.");
    } 
    if(paciente.peso.length === 0) {
        errors.push("O peso não pode ser em branco.")
    }
    if(!validateAltura(paciente.altura)) {
        errors.push("A altura não é válida.")
    }
    if(paciente.altura.length === 0) {
        errors.push("A altura não pode ser em branco.")
    }
    if(paciente.gordura.length === 0) {
        errors.push("A gordura não pode ser em branco.")
    }

    return errors;
}

function showsErrorMessage(erros) {
    var errorlist = document.querySelector('.errorlist');
    errorlist.innerHTML = "";

    erros.forEach(erro => {
	    var li = document.createElement('li');
	    li.textContent = erro;
        errorlist.appendChild(li);
});
}
