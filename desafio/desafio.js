const listaTeclado = document.querySelector('.teclado');
const btn = listaTeclado.querySelectorAll('input[type="button"]');

const tel = document.querySelector('input[type="tel"]');
//console.log(tel);

for(let i = 0; i < btn.length; i++){
	let valorAtualDoBtn = btn[i].value;
	btn[i].addEventListener('click', () => {
		//Até aqui eu já pego o valor do input
		console.log(valorAtualDoBtn);
	});
}


