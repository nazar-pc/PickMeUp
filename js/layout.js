(function($){
	var initLayout = function() {
		var hash = window.location.hash.replace('#', '');
		var currentTab = $('ul.navigationTabs a')
							.bind('click', showTab)
							.filter('a[rel=' + hash + ']');
		if (currentTab.size() == 0) {
			currentTab = $('ul.navigationTabs a:first');
		}
		showTab.apply(currentTab.get(0));
		$('#date').DatePicker({
			flat: true,
			date: '2008-07-31',
			current: '2008-07-31',
			calendars: 1,
			starts: 1,
			view: 'years'
		});
		var now = new Date();
		now.addDays(-10);
		var now2 = new Date();
		now2.addDays(-5);
		now2.setHours(0,0,0,0);
		$('#date2').DatePicker({
			flat: true,
			date: ['2008-07-31', '2008-07-28'],
			current: '2008-07-31',
			format: 'Y-m-d',
			calendars: 1,
			mode: 'multiple',
			onRender: function(date) {
				return {
					disabled: (date.valueOf() < now.valueOf()),
					className: date.valueOf() == now2.valueOf() ? 'datepickerSpecial' : false
				}
			},
			onChange: function(formated, dates) {
			},
			starts: 0
		});
		$('#clearSelection').bind('click', function(){
			$('#date3').DatePickerClear();
			return false;
		});
		$('#date3').DatePicker({
			flat: true,
			date: ['2009-12-28','2010-01-23'],
			current: '2010-01-01',
			calendars: 3,
			mode: 'range',
			starts: 1
		});
		$('.inputDate').DatePicker({
			format:'m/d/Y',
			date: $('#inputDate').val(),
			current: $('#inputDate').val(),
			starts: 1,
			position: 'right',
			onBeforeShow: function(){
				$('#inputDate').DatePickerSetDate($('#inputDate').val(), true);
			},
			onChange: function(formated, dates){
				$('#inputDate').val(formated);
				if ($('#closeOnSelect input').attr('checked')) {
					$('#inputDate').DatePickerHide();
				}
			}
		});
		var now3 = new Date();
		now3.addDays(-4);
		var now4 = new Date()
		$('#widgetCalendar').DatePicker({
			flat: true,
			format: 'd B, Y',
			date: [new Date(now3), new Date(now4)],
			calendars: 3,
			mode: 'range',
			starts: 1,
			onChange: function(formated) {
				$('#widgetField span').get(0).innerHTML = formated.join(' &divide; ');
			}
		});
		var state = false;
		$('#widgetField>a').bind('click', function(){
			$('#widgetCalendar').stop().animate({height: state ? 0 : $('#widgetCalendar div.datepicker').get(0).offsetHeight}, 500);
			state = !state;
			return false;
		});
		$('#widgetCalendar div.datepicker').css('position', 'absolute');
	};
	
	var showTab = function(e) {
		var tabIndex = $('ul.navigationTabs a')
							.removeClass('active')
							.index(this);
		$(this)
			.addClass('active')
			.blur();
		$('div.tab')
			.hide()
				.eq(tabIndex)
				.show();
	};
	
	EYE.register(initLayout, 'init');
})(jQuery)