function tocaSom(idConcatenado) {
    //document.querySelectorAll('.som')[i].play(); => Minha resolução, bem amadora.
    document.querySelector(idConcatenado).play();
}

const btn = document.querySelectorAll('.tecla');

for(let i = 0; i < btn.length; i++){
    const tecla = btn[i];
    const classeBotao = tecla.classList[1];

    const instrumento = `#som_${classeBotao}`;

    /* inha resolução, bem rude creio eu.
    btn[i].addEventListener('click', () => {
        tocaSom(i);
    });
    */

    tecla.onclick = function () {
        tocaSom(instrumento);
    };

    tecla.onkeydown = function (event) {
        let tecla = event.key;
        if(tecla == 'enter'){
            tecla.classList.add('ativa');
        } else if (tecla == 'backspace') {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function (event) {
        let tecla = event.key;
        if(tecla == 'enter'){
            tecla.classList.remove('ativa');
        } else if ( tecla == 'backspace') {
            tecla.classList.remove('ativa');
            
        }
    };
}



