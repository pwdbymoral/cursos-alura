"use strict"

function playSound(selectorAudio) {
    const element = document.querySelector(selectorAudio);
    
    if (element && element.localName === 'audio') {
        element.play();
    }
    else if (!element) {
        console.log('O elemento não existe.');
    } else {
        console.log('O seletor é inválido.')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        playSound(idAudio);
    }

    tecla.onkeypress = function (event) {

        if (event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter') {
            tecla.classList.add('ativa')
        }
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
