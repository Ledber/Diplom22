



$('#example').DataTable(
	{
		"bFilter": false,
		"dom": '<"dt-buttons"Bf><"clear">',
	}
);
	//Delete buttons
	$('.dt-delete').each(function () {
		$(this).on('click', function(evt){
			$this = $(this);
			var idQ = $this.parents('tr');
			var valID = $(idQ).find('#quizID').html();
			var idIndex = +valID;
			localStorage.removeItem(idIndex);
			var dtRow = $this.parents('tr');
				var table = $('#example').DataTable();
				table.row(dtRow[0].rowIndex-1).remove().draw( false );
				var quizTable = $('#table-admin').html();
				localStorage.setItem("quizHTML",quizTable);
		});
	});

	$('.dt-result').each(function () {
		$(this).on('click', function(evt){
			$this = $(this);
			$('input[name="radio"]').prop('checked',false);
			$('input[name="radio"][value="3"]').prop('checked',true);
		
		});
	});

	$('.dt-more').each(function () {
		$(this).on('click', function(evt){
			$this = $(this);
			var idQ = $this.parents('tr');
			var valID = $(idQ).find('#quizID').html();
			var idIndex = +valID;
			var arr = JSON.parse(localStorage.getItem(idIndex));
			console.log(arr);

 	if (arr==null){
							 confirm('Викторина не найдена');
						 } else{
			var arName = arr[0];
			var arTime1 = arr[2][0];
			var arTime2 = arr[2][1];
			var arTotal = arr[1];
			$('#id-input-2').val('');
			$('.more-container-main').find('p').remove();
			$('.more-container-main').append($(
				'<p id="more-qName" >' +
				'Название Викторины: ' + arName +
			'</p>'+
			'<p id="more-qTime" >' + 
			 'Время прохождения: '+ + arTime1 +'ч ' + arTime2+'м' +
			'</p>'+
			'<p id="more-qTotal" >' +
				'Количество впросов: '+ + arTotal+
			 '</p>'
			 ));
		
			var arrQ = $.grep(arr, function(el,i){
				return (i>2);
			})
			console.log(arrQ);
			$('.more-container-questions').find('p').remove();
			 $.grep(arrQ, function(vals,index){
				var qN = vals[0];
				var qV1  =vals[1];
				var qV2  =vals[2];
				var qV3  =vals[3];
				var qV4  =vals[4];
				var qA  =vals[5];
				var qS  =vals[6];
				$('.more-container-questions').append($(
					'<p id="more-q" >' + 
					'Вопрос '+(index+1)+': '  + qN +
				'</p>'+
				'<p id="more-q-variant" >' +
				'Варианты ответа: ' +
			 '</p>' +
			'<p id="more-q-variant-1" >' +
				'A: ' + qV1+
			'</p>' +
			'<p id="more-q-variant-2" >' +
				'B: '+ qV2+
			 '</p>'+
			 '<p id="more-q-variant-3" >' +
				'C: '+ qV3+
			 '</p>'+
			'<p id="more-q-variant-4" >' +
				'D: '+ qV4+
			 '</p>'+
			'<p id="more-q-answer" >' +
			'Правильный ответ:   '+ qA+  
			 '</p>' +
			 '<p id="more-q-answer" class="qBorder"> '+
			 'Баллов за правильный ответ: '+ qS+
			'</p>'
				));
				console.log(qN);
				console.log(qV1);
				console.log(qV2);
				console.log(qV3);
				console.log(qV4);
				console.log(qA);
			 
			})
		}

			$('input[name="radio"]').prop('checked',false);
			$('input[name="radio"][value="4"]').prop('checked',true);
		
		});
	});

		$('#more-btn-id').on('click', function(){
			console.log('click');
			var idQ = $('#id-input-2').val();
			// console.log(idQ);
					 var idIndex = +idQ;
					 var arr = JSON.parse(localStorage.getItem(idIndex));
					 console.log(arr);
					 	if (arr==null){
							 confirm('Викторина не найдена');
						 } else{
			var arName = arr[0];
			var arTime1 = arr[2][0];
			var arTime2 = arr[2][1];
			var arTotal = arr[1];
		
			$('.more-container-main').find('p').remove();
			$('.more-container-main').append($(
				'<p id="more-qName" >' +
				'Название Викторины: ' + arName +
			'</p>'+
			'<p id="more-qTime" >' + 
			 'Время прохождения: '+ + arTime1 +'ч ' + arTime2+'м' +
			'</p>'+
			'<p id="more-qTotal" >' +
				'Количество впросов: '+ + arTotal+
			 '</p>'
			 ));
		
			var arrQ = $.grep(arr, function(el,i){
				return (i>2);
			})
			console.log(arrQ);
			$('.more-container-questions').find('p').remove();
			 $.grep(arrQ, function(vals,index){
				var qN = vals[0];
				var qV1  =vals[1];
				var qV2  =vals[2];
				var qV3  =vals[3];
				var qV4  =vals[4];
				var qA  =vals[5];
				var qS  =vals[6];
				$('.more-container-questions').append($(
					'<p id="more-q" >' + 
					'Вопрос '+(index+1)+': '  + qN +
				'</p>'+
				'<p id="more-q-variant" >' +
				'Варианты ответа: ' +
			 '</p>' +
			'<p id="more-q-variant-1" >' +
				'A: ' + qV1+
			'</p>' +
			'<p id="more-q-variant-2" >' +
				'B: '+ qV2+
			 '</p>'+
			 '<p id="more-q-variant-3" >' +
				'C: '+ qV3+
			 '</p>'+
			'<p id="more-q-variant-4" >' +
				'D: '+ qV4+
			 '</p>'+
			'<p id="more-q-answer" >' +
				'Правильный ответ:   '+ qA+  
			 '</p>' +
			 '<p id="more-q-answer" class="qBorder"> '+
			 'Баллов за правильный ответ: '+ qS+
			'</p>'
				));
			})
		}
		});

		
		const resSecond = document.querySelector('#table-id-1');
		resSecond.innerHTML='';

		$('#result-btn-id').on('click', function(){
			console.log('click');
			var idQ1 = $('#id-input').val();
			// console.log(idQ);
					 var idIndex1 = +idQ1;
					 let questionIndex = 0;
					 var arr1 = JSON.parse(localStorage.getItem('result-Teacher-table'+idIndex1));
					 console.log(arr1);
					 resSecond.innerHTML='';
					 if (arr1==null){
						confirm('Результаты или викторина не найдены');
					} else{

						let studentCode = 0;
						let studentName ='';
						let timeQuiz ='';
						let rA = '';
						let thisRes = 0;
						let score = 0;
						let winLose = '';

						let wlTemp='';
						let timeTemp='';
						let resTemp='';

						let hours=0;
						let minutes=0;
						let seconds =0;

						displayRes();
						function displayRes(){
							for (item of arr1[questionIndex]){
								studentCode = arr1[questionIndex][0][0];
								studentName = arr1[questionIndex][0][1];
								timeQuiz = arr1[questionIndex][0][2];
								rA = (arr1[questionIndex][0][3]) ;
								thisRes = (arr1[questionIndex][0][4]) ;
								score = arr1[questionIndex][0][5];
								hours =Math.floor(timeQuiz/60/60);
								minutes =Math.floor(timeQuiz/60);
								seconds = timeQuiz%60;
								console.log(studentCode);
								console.log(	studentName);
								console.log(timeQuiz);
								console.log(rA);
								console.log(thisRes);
								console.log(	score);

								if (thisRes>=0.5){
									wlTemp = `
									<td class="r-win">Прошел</td>
									`
								} else{
									wlTemp = `
									<td class="r-lose">Не прошел</td>
									`
								}

								if (hours<10){
									timeTemp = `<td> 0`+ hours+`:`
								} else{
									timeTemp = `<td>`+ hours+`:`
								}
								if (minutes<10){
									timeTemp += `0`+minutes+`:`
								} else{
									timeTemp += minutes+`:`
								}
								if (seconds<10){
									timeTemp += `0`+seconds+`</td>`
								} else{
									timeTemp += seconds+`</td>`
								}
					}
			
					resTemp = `
					<tr>
					<th scope="row">`+ studentCode+`</th>
					<td>`+ 	studentName+`</td>
					`+ timeTemp +`
					<td>`+ rA+`</td>
					<td>`+score +`</td>
					`+ 	wlTemp+`
				</tr>
					`;
					resSecond.innerHTML += resTemp;
if (questionIndex!==arr1.lenght){
	questionIndex++;
	displayRes();
}
						}
					}
		});

		$('.dt-result').each(function () {
			$(this).on('click', function(evt){
				$('#id-input').val('');
				$this = $(this);
				var idQ = $this.parents('tr');
				var valID = $(idQ).find('#quizID').html();
				var idIndex1 = +valID;
				var arr1 = JSON.parse(localStorage.getItem('result-Teacher-table'+idIndex1));
				console.log(arr1);
				resSecond.innerHTML='';
				let questionIndex = 0;
				if (arr1==null){
				 confirm('Результаты или викторина не найдены');
			 } else{

				 let studentCode = 0;
				 let studentName ='';
				 let timeQuiz ='';
				 let rA = '';
				 let thisRes = 0;
				 let score = 0;
				 let winLose = '';

				 let wlTemp='';
				 let timeTemp='';
				 let resTemp='';

				 let hours=0;
				 let minutes=0;
				 let seconds =0;

				 displayRes();
				 function displayRes(){
					 for (item of arr1[questionIndex]){
						 studentCode = arr1[questionIndex][0][0];
						 studentName = arr1[questionIndex][0][1];
						 timeQuiz = arr1[questionIndex][0][2];
						 rA = (arr1[questionIndex][0][3]) ;
						 thisRes = (arr1[questionIndex][0][4]) ;
						 score = arr1[questionIndex][0][5];
						 hours =Math.floor(timeQuiz/60/60);
						 minutes =Math.floor(timeQuiz/60);
						 seconds = timeQuiz%60;
						 console.log(studentCode);
						 console.log(	studentName);
						 console.log(timeQuiz);
						 console.log(rA);
						 console.log(thisRes);
						 console.log(	score);

						 if (thisRes>=0.5){
							 wlTemp = `
							 <td class="r-win">Прошел</td>
							 `
						 } else{
							 wlTemp = `
							 <td class="r-lose">Не прошел</td>
							 `
						 }

						 if (hours<10){
							 timeTemp = `<td> 0`+ hours+`:`
						 } else{
							 timeTemp = `<td>`+ hours+`:`
						 }
						 if (minutes<10){
							 timeTemp += `0`+minutes+`:`
						 } else{
							 timeTemp += minutes+`:`
						 }
						 if (seconds<10){
							 timeTemp += `0`+seconds+`</td>`
						 } else{
							 timeTemp += seconds+`</td>`
						 }
			 }
		 
			 resTemp = `
			 <tr>
			 <th scope="row">`+ studentCode+`</th>
			 <td>`+ 	studentName+`</td>
			 `+ timeTemp +`
			 <td>`+ rA+`</td>
			 <td>`+score +`</td>
			 `+ 	wlTemp+`
		 </tr>
			 `;
			 resSecond.innerHTML += resTemp;
if (questionIndex!==arr1.lenght){
	questionIndex++;
displayRes();
} 
				 }
			 }
			//  $('input[name="radio"]').prop('checked',false);
			//  $('input[name="radio"][value="4"]').prop('checked',true);
			})
			});
			