import './vendor';
import './helpers';

function skillsCounter() {
	let sum = 0;
	let $arr = $('.checkbox-js').toArray();

	$.each($arr, (index, value) => {
		if ($(value).prop('checked')) {
			sum++;
		}
	});

	$('.footer__counter').text(sum);
	$('.footer__arrow').css('transform', `translateX(-100%) rotate(${-32 + sum * 180 / 3}deg)`);
}

$('.skills__item .checkbox-js').on('click', skillsCounter);
skillsCounter();
