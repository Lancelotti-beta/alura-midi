const listaTeclado = document.querySelector('.teclado');
const btn = listaTeclado.querySelectorAll('input[type="button"]');
let tel = document.querySelector('input[type="tel"]');

function imprimeNaTela(n){
	let valor = tel.value;
	//até aqui eu tenho o 'placeholder' com o valor do 'botão'
	valor = n;
}

for(let i = 0; i < btn.length; i++){
	let valorAtualDoBtn = btn[i].value;
	btn[i].addEventListener('click', () => {
		//Até aqui eu já pego o valor do input
		//console.log(valorAtualDoBtn);

		imprimeNaTela(valorAtualDoBtn);
	});
}


