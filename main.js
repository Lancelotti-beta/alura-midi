function tocaSom(idConcatenado) {
    //document.querySelectorAll('.som')[i].play(); => Minha resolução, bem amadora.
    const som = document.querySelector(idConcatenado);

    if((som) && (som.localName == "audio")) {
        som.play();
    } else {
        console.log(`Elemento ou Seletor invlido!`);
    }
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
        if(event.key === 'Enter' || event.key === 'Space'){
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
}



