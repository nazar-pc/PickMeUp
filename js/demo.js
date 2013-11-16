$(function () {
	$('.single').pickmeup({
		flat	: true
	});
	$('.multiple').pickmeup({
		flat	: true,
		mode	: 'multiple'
	});
	$('.range').pickmeup({
		flat	: true,
		mode	: 'range'
	});
	var plus_5_days	= new Date;
	plus_5_days.addDays(5);
	$('.3-calendars').pickmeup({
		flat		: true,
		date		: [
			new Date,
			plus_5_days
		],
		mode		: 'range',
		calendars	: 3
	});
	var input	= $('input');
	input.pickmeup({
		position: 'right',
		before_show: function(){
			input.pickmeup('set_date', input.val(), true);
		},
		change: function(formated){
			input.val(formated);
		}
	});
});