function tocaSomDePom () {
    document.querySelector('#som_tecla_pom').play();
}

//const pom = document.getElementById('som_tecla_pom');
const btn_pom = document.querySelector('.tecla_pom');

btn_pom.onclick = tocaSomDePom;

/*
const listaTeclado = document.querySelector('.teclado');
for(let i = 0; i < btn_pom.length; i++){
    btn_pom[i].addEventListener('click', () => {
        document.querySelector('#som_tecla_pom').play();
    });

}
*/


