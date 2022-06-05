const enterBtn = document.querySelector('#enterStudent');

enterBtn.addEventListener('click', (e) =>{
	
	let apStud = document.getElementById('ap-stud').value;
	let apFIO = document.getElementById('ap-fio').value;
	console.log('clickk');
	console.log(apStud);
	console.log(apFIO);
	if (apStud && apFIO){
		
		sessionStorage.setItem('FIO',apFIO );
		sessionStorage.setItem('Stud', apStud);
		window.location.href = 'student-start.html'
	} else{
		confirm('Введите данные')
	}
		
	
})