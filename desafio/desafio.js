const btn = document.querySelectorAll('input[type="button"]');
const tel = document.querySelector('input[type="tel"]');


for(let i = 0; i < btn.length; i++){
	const indiceDoBtn = btn[i];
	const valorAtualDoBtn = indiceDoBtn.value;

	//Teneti criar uma variavel para armazenar o '.value' do input 'tel' dentro do laço 'for'
	//mas só me retornava 'undefined', não entendo o motivo ainda mas logo mais descubro.
	indiceDoBtn.onclick = () => {
		tel.value = tel.value + valorAtualDoBtn
	};
}


