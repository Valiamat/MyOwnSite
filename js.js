/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.getElementById('elem');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Главное не всё знать, а загуглить на английском')
})