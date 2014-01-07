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
	$('input').pickmeup({
		position		: 'right',
		hide_on_select	: true,
		before_show		: function () {
			var $this	= $(this);
			$this.pickmeup('set_date', $this.val());
		},
		change			: function (formatted) {
			$(this).val(formatted);
		}
	});
});
