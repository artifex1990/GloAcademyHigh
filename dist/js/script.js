const filterByType = (type, ...values) => values.filter(value => typeof value === type), // получаем тип переменной и значения(причем значения расспаковываются с помощью ...), для дальнейшей фильтрации значений по переданному типу

	hideAllResponseBlocks = () => { //скрыть блоки ответа
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block')); //получаем диалоговые блоки и конвертируем из NodeList в Array
		responseBlocksArray.forEach(block => block.style.display = 'none'); // Скрываем каждый выбранный диалоговый блок
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => { // отобразить
		hideAllResponseBlocks();//вызываем сокрытие всех блоков с ответами
		document.querySelector(blockSelector).style.display = 'block'; // показать блок который передали в blockSelector
		if (spanSelector) { 
			document.querySelector(spanSelector).textContent = msgText; //если не пустой селектор в spanSelector то показываем селектор с текстом из msgText
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'), //отобразить блок с cелектором error

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'), //отобразить блок с cелектором ok

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), // просто поле со стандартным загловком

	tryFilterByType = (type, values) => { // метод фильтрации по значениям и типу
		try {
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", "); //функция eval выполняет код содержающийся в строке, в данном случае мы получаем массив отсортированный по типу переданного аргумента и далее склеиваем все с помощью ','
			const alertMsg = (valuesArray.length) ? // проверяем пустая ли строка и выводи, то или иное сообщение
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			showResults(alertMsg); //отображаем диалоговый блок успешно найденного значения
		} catch (e) {
			showError(`Ошибка: ${e}`); //отображаем диалоговый блок не успешно найденного значения
		}
	};

const filterButton = document.querySelector('#filter-btn'); // получаем кнопку обработки фильтра

filterButton.addEventListener('click', e => { // вешаем обработчик собыйтий по клику на кнопке для фильтрации 
	const typeInput = document.querySelector('#type'); // Получем тип из селекта с выбором типа переменных
	const dataInput = document.querySelector('#data'); // получаем переданную строку со значениями

	if (dataInput.value === '') { // Если занчения пустые вешаем стандартный месседж об ошибке setCustomValidity - отвечает за оповещение и если в нем не пустая строка значит, что-то не так. В нашем случае служит обычной заглушкой, если мы ничего не передали
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		showNoResults(); // сообщить в стандартном поле
	} else {
		dataInput.setCustomValidity(''); // очищаем setCustomValidity
		e.preventDefault(); // убираем стандартное поведение нажатия на кнопку
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); // передаем в метод для фильтрации и вывода результата из dataInput
	}
});

