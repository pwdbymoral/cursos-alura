var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('tbody');
tabela.addEventListener('dblclick', (event) => {
   
    event.target.parentNode.classList.add('fadeout');
    setTimeout(() => {
        event.target.parentNode.remove();

    },400);

});
