var botao = document.querySelector('#buscar-pacientes');
botao.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    var erroAjax = document.querySelector("#erro-ajax");
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
    xhr.send();
    xhr.addEventListener('load', function() {
        if(xhr.status === 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente => {
                addPaciente(paciente);
            });
            erroAjax.classList.add('invisivel')
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove('invisivel')
        }
        
    })
})