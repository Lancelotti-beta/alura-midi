function tocaSomDePom (i) {
    document.querySelectorAll('.som')[i].play();
}

const btn = document.querySelectorAll('.tecla');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () => {
        tocaSomDePom(i);
    });

}



