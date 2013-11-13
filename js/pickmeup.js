/**
 *
 * Date picker
 * Author: Stefan Petre www.eyecon.ro
 *
 * Dual licensed under the MIT and GPL licenses
 *
 */
(function ($) {
	var pickmeup = function () {
		var	views = {
				years: 'pmu-view-years',
				moths: 'pmu-view-months',
				days: 'pmu-view-days'
			},
			tpl = {
				wrapper: '<div class="pickmeup"></div>',
				head: [
					'<div class="pmu-instance">',
						'<nav>' +
							'<div class="pmu-prev pmu-button"><%=prev%></div>',
							'<div class="pmu-next pmu-button"><%=next%></div>' +
							'<div class="pmu-month pmu-button"></div>',
						'</nav>',
						'<nav class="pmu-day-of-week">',
							'<div><%=week%></div>',
							'<div><%=day1%></div>',
							'<div><%=day2%></div>',
							'<div><%=day3%></div>',
							'<div><%=day4%></div>',
							'<div><%=day5%></div>',
							'<div><%=day6%></div>',
							'<div><%=day7%></div>',
						'</nav>',
					'</div>'
				],
				days: [
					'<div class="pmu-days">',
						'<div>',
							'<div class="pmu-week pmu-button"><%=weeks[0].week%></div>',
							'<div class="<%=weeks[0].days[0].classname%> pmu-button"><%=weeks[0].days[0].text%></div>',
							'<div class="<%=weeks[0].days[1].classname%> pmu-button"><%=weeks[0].days[1].text%></div>',
							'<div class="<%=weeks[0].days[2].classname%> pmu-button"><%=weeks[0].days[2].text%></div>',
							'<div class="<%=weeks[0].days[3].classname%> pmu-button"><%=weeks[0].days[3].text%></div>',
							'<div class="<%=weeks[0].days[4].classname%> pmu-button"><%=weeks[0].days[4].text%></div>',
							'<div class="<%=weeks[0].days[5].classname%> pmu-button"><%=weeks[0].days[5].text%></div>',
							'<div class="<%=weeks[0].days[6].classname%> pmu-button"><%=weeks[0].days[6].text%></div>',
						'</div>',
						'<div>',
							'<div class="pmu-week pmu-button"><%=weeks[1].week%></div>',
							'<div class="<%=weeks[1].days[0].classname%> pmu-button"><%=weeks[1].days[0].text%></div>',
							'<div class="<%=weeks[1].days[1].classname%> pmu-button"><%=weeks[1].days[1].text%></div>',
							'<div class="<%=weeks[1].days[2].classname%> pmu-button"><%=weeks[1].days[2].text%></div>',
							'<div class="<%=weeks[1].days[3].classname%> pmu-button"><%=weeks[1].days[3].text%></div>',
							'<div class="<%=weeks[1].days[4].classname%> pmu-button"><%=weeks[1].days[4].text%></div>',
							'<div class="<%=weeks[1].days[5].classname%> pmu-button"><%=weeks[1].days[5].text%></div>',
							'<div class="<%=weeks[1].days[6].classname%> pmu-button"><%=weeks[1].days[6].text%></div>',
						'</div>',
						'<div>',
							'<div class="pmu-week pmu-button"><%=weeks[2].week%></div>',
							'<div class="<%=weeks[2].days[0].classname%> pmu-button"><%=weeks[2].days[0].text%></div>',
							'<div class="<%=weeks[2].days[1].classname%> pmu-button"><%=weeks[2].days[1].text%></div>',
							'<div class="<%=weeks[2].days[2].classname%> pmu-button"><%=weeks[2].days[2].text%></div>',
							'<div class="<%=weeks[2].days[3].classname%> pmu-button"><%=weeks[2].days[3].text%></div>',
							'<div class="<%=weeks[2].days[4].classname%> pmu-button"><%=weeks[2].days[4].text%></div>',
							'<div class="<%=weeks[2].days[5].classname%> pmu-button"><%=weeks[2].days[5].text%></div>',
							'<div class="<%=weeks[2].days[6].classname%> pmu-button"><%=weeks[2].days[6].text%></div>',
						'</div>',
						'<div>',
							'<div class="pmu-week pmu-button"><%=weeks[3].week%></div>',
							'<div class="<%=weeks[3].days[0].classname%> pmu-button"><%=weeks[3].days[0].text%></div>',
							'<div class="<%=weeks[3].days[1].classname%> pmu-button"><%=weeks[3].days[1].text%></div>',
							'<div class="<%=weeks[3].days[2].classname%> pmu-button"><%=weeks[3].days[2].text%></div>',
							'<div class="<%=weeks[3].days[3].classname%> pmu-button"><%=weeks[3].days[3].text%></div>',
							'<div class="<%=weeks[3].days[4].classname%> pmu-button"><%=weeks[3].days[4].text%></div>',
							'<div class="<%=weeks[3].days[5].classname%> pmu-button"><%=weeks[3].days[5].text%></div>',
							'<div class="<%=weeks[3].days[6].classname%> pmu-button"><%=weeks[3].days[6].text%></div>',
						'</div>',
						'<div>',
							'<div class="pmu-week pmu-button"><%=weeks[4].week%></div>',
							'<div class="<%=weeks[4].days[0].classname%> pmu-button"><%=weeks[4].days[0].text%></div>',
							'<div class="<%=weeks[4].days[1].classname%> pmu-button"><%=weeks[4].days[1].text%></div>',
							'<div class="<%=weeks[4].days[2].classname%> pmu-button"><%=weeks[4].days[2].text%></div>',
							'<div class="<%=weeks[4].days[3].classname%> pmu-button"><%=weeks[4].days[3].text%></div>',
							'<div class="<%=weeks[4].days[4].classname%> pmu-button"><%=weeks[4].days[4].text%></div>',
							'<div class="<%=weeks[4].days[5].classname%> pmu-button"><%=weeks[4].days[5].text%></div>',
							'<div class="<%=weeks[4].days[6].classname%> pmu-button"><%=weeks[4].days[6].text%></div>',
						'</div>',
						'<div>',
							'<div class="pmu-week pmu-button"><%=weeks[5].week%></div>',
							'<div class="<%=weeks[5].days[0].classname%> pmu-button"><%=weeks[5].days[0].text%></div>',
							'<div class="<%=weeks[5].days[1].classname%> pmu-button"><%=weeks[5].days[1].text%></div>',
							'<div class="<%=weeks[5].days[2].classname%> pmu-button"><%=weeks[5].days[2].text%></div>',
							'<div class="<%=weeks[5].days[3].classname%> pmu-button"><%=weeks[5].days[3].text%></div>',
							'<div class="<%=weeks[5].days[4].classname%> pmu-button"><%=weeks[5].days[4].text%></div>',
							'<div class="<%=weeks[5].days[5].classname%> pmu-button"><%=weeks[5].days[5].text%></div>',
							'<div class="<%=weeks[5].days[6].classname%> pmu-button"><%=weeks[5].days[6].text%></div>',
						'</div>',
					'</div>'
				],
				months: [
					'<div class="<%=className%>">',
						'<div>',
							'<div class="pmu-button"><%=data[0]%></div>',
							'<div class="pmu-button"><%=data[1]%></div>',
							'<div class="pmu-button"><%=data[2]%></div>',
							'<div class="pmu-button"><%=data[3]%></div>',
						'</div>',
						'<div>',
							'<div class="pmu-button"><%=data[4]%></div>',
							'<div class="pmu-button"><%=data[5]%></div>',
							'<div class="pmu-button"><%=data[6]%></div>',
							'<div class="pmu-button"><%=data[7]%></div>',
						'</div>',
						'<div>',
							'<div class="pmu-button"><%=data[8]%></div>',
							'<div class="pmu-button"><%=data[9]%></div>',
							'<div class="pmu-button"><%=data[10]%></div>',
							'<div class="pmu-button"><%=data[11]%></div>',
						'</div>',
					'</div>'
				]
			},
			defaults = {
				flat: false,
				starts: 1,
				prev: '&#9664;',
				next: '&#9654;',
				lastSel: false,
				mode: 'single',
				view: 'days',
				calendars: 1,
				format: 'Y-m-d',
				position: 'bottom',
				eventName: 'click',
				onRender: function(){return {};},
				onChange: function(){return true;},
				onShow: function(){return true;},
				onBeforeShow: function(){return true;},
				onHide: function(){return true;},
				locale: {
					days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					weekMin: 'wk'
				}
			},
			fill = function(cal) {
				cal = $(cal);
				var options = cal.data('pickmeup');
				var currentCal = Math.floor(options.calendars/2), date, data, dow, month, cnt = 0, week, days, indic, indic2, html, tblCal;
				cal.find('.pmu-instance > :not(nav)').remove();
				for (var i = 0; i < options.calendars; i++) {
					date = new Date(options.current);
					date.addMonths(-currentCal + i);
					tblCal = cal.find('.pmu-instance').eq(i);
					switch (cal[0].className.match(/pmu-view-days|pmu-view-months|pmu-view-years/)[0]) {
						case 'pmu-view-days':
							dow = formatDate(date, 'B, Y');
							break;
						case 'pmu-view-months':
							dow = date.getFullYear();
							break;
						case 'pmu-view-years':
							dow = (date.getFullYear()-6) + ' - ' + (date.getFullYear()+5);
							break;
					}
					tblCal.find('.pmu-month').text(dow);
					dow = date.getFullYear()-6;
					data = {
						data: [],
						className: 'pmu-years'
					};
					for ( var j = 0; j < 12; j++) {
						data.data.push(dow + j);
					}
					html = tmpl(tpl.months.join(''), data);
					date.setDate(1);
					data = {weeks:[], test: 10};
					month = date.getMonth();
					dow = (date.getDay() - options.starts) % 7;
					date.addDays(-(dow + (dow < 0 ? 7 : 0)));
					week = -1;
					cnt = 0;
					while (cnt < 42) {
						indic = parseInt(cnt/7,10);
						indic2 = cnt%7;
						if (!data.weeks[indic]) {
							week = date.getWeekNumber();
							data.weeks[indic] = {
								week: week,
								days: []
							};
						}
						data.weeks[indic].days[indic2] = {
							text: date.getDate(),
							classname: []
						};
						if (month != date.getMonth()) {
							data.weeks[indic].days[indic2].classname.push('pmu-not-in-month');
						}
						if (date.getDay() == 0) {
							data.weeks[indic].days[indic2].classname.push('pmu-sunday');
						}
						if (date.getDay() == 6) {
							data.weeks[indic].days[indic2].classname.push('pmu-saturday');
						}
						var fromUser = options.onRender(date);
						var val = date.valueOf();
						if (fromUser.selected || options.date == val || $.inArray(val, options.date) > -1 || (options.mode == 'range' && val >= options.date[0] && val <= options.date[1])) {
							data.weeks[indic].days[indic2].classname.push('pmu-selected');
						}
						if (fromUser.disabled) {
							data.weeks[indic].days[indic2].classname.push('pmu-disabled');
						}
						if (fromUser.className) {
							data.weeks[indic].days[indic2].classname.push(fromUser.className);
						}
						data.weeks[indic].days[indic2].classname = data.weeks[indic].days[indic2].classname.join(' ');
						cnt++;
						date.addDays(1);
					}
					html = tmpl(tpl.days.join(''), data) + html;
					data = {
						data: options.locale.monthsShort,
						className: 'pmu-months'
					};
					html = tmpl(tpl.months.join(''), data) + html;
					tblCal.append(html);
				}
			},
			parseDate = function (date, format) {
				if (date.constructor == Date) {
					return new Date(date);
				}
				var parts = date.split(/\W+/);
				var against = format.split(/\W+/), d, m, y, h, min, now = new Date();
				for (var i = 0; i < parts.length; i++) {
					switch (against[i]) {
						case 'd':
						case 'e':
							d = parseInt(parts[i],10);
							break;
						case 'm':
							m = parseInt(parts[i], 10)-1;
							break;
						case 'Y':
						case 'y':
							y = parseInt(parts[i], 10);
							y += y > 100 ? 0 : (y < 29 ? 2000 : 1900);
							break;
						case 'H':
						case 'I':
						case 'k':
						case 'l':
							h = parseInt(parts[i], 10);
							break;
						case 'P':
						case 'p':
							if (/pm/i.test(parts[i]) && h < 12) {
								h += 12;
							} else if (/am/i.test(parts[i]) && h >= 12) {
								h -= 12;
							}
							break;
						case 'M':
							min = parseInt(parts[i], 10);
							break;
					}
				}
				return new Date(
					y === undefined ? now.getFullYear() : y,
					m === undefined ? now.getMonth() : m,
					d === undefined ? now.getDate() : d,
					h === undefined ? now.getHours() : h,
					min === undefined ? now.getMinutes() : min,
					0
				);
			},
			formatDate = function(date, format) {
				var m = date.getMonth();
				var d = date.getDate();
				var y = date.getFullYear();
				var wn = date.getWeekNumber();
				var w = date.getDay();
				var s = {};
				var hr = date.getHours();
				var pm = (hr >= 12);
				var ir = (pm) ? (hr - 12) : hr;
				var dy = date.getDayOfYear();
				if (ir == 0) {
					ir = 12;
				}
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var parts = format.split(''), part;
				for ( var i = 0; i < parts.length; i++ ) {
					part = parts[i];
					switch (parts[i]) {
						case 'a':
							part = date.getDayName();
							break;
						case 'A':
							part = date.getDayName(true);
							break;
						case 'b':
							part = date.getMonthName();
							break;
						case 'B':
							part = date.getMonthName(true);
							break;
						case 'C':
							part = 1 + Math.floor(y / 100);
							break;
						case 'd':
							part = (d < 10) ? ("0" + d) : d;
							break;
						case 'e':
							part = d;
							break;
						case 'H':
							part = (hr < 10) ? ("0" + hr) : hr;
							break;
						case 'I':
							part = (ir < 10) ? ("0" + ir) : ir;
							break;
						case 'j':
							part = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy;
							break;
						case 'k':
							part = hr;
							break;
						case 'l':
							part = ir;
							break;
						case 'm':
							part = (m < 9) ? ("0" + (1+m)) : (1+m);
							break;
						case 'M':
							part = (min < 10) ? ("0" + min) : min;
							break;
						case 'p':
						case 'P':
							part = pm ? "PM" : "AM";
							break;
						case 's':
							part = Math.floor(date.getTime() / 1000);
							break;
						case 'S':
							part = (sec < 10) ? ("0" + sec) : sec;
							break;
						case 'u':
							part = w + 1;
							break;
						case 'w':
							part = w;
							break;
						case 'y':
							part = ('' + y).substr(2, 2);
							break;
						case 'Y':
							part = y;
							break;
					}
					parts[i] = part;
				}
				return parts.join('');
			},
			extendDate = function(options) {
				if (Date.prototype.tempDate) {
					return;
				}
				Date.prototype.tempDate = null;
				Date.prototype.months = options.months;
				Date.prototype.monthsShort = options.monthsShort;
				Date.prototype.days = options.days;
				Date.prototype.daysShort = options.daysShort;
				Date.prototype.getMonthName = function(fullName) {
					return this[fullName ? 'months' : 'monthsShort'][this.getMonth()];
				};
				Date.prototype.getDayName = function(fullName) {
					return this[fullName ? 'days' : 'daysShort'][this.getDay()];
				};
				Date.prototype.addDays = function (n) {
					this.setDate(this.getDate() + n);
					this.tempDate = this.getDate();
				};
				Date.prototype.addMonths = function (n) {
					if (this.tempDate == null) {
						this.tempDate = this.getDate();
					}
					this.setDate(1);
					this.setMonth(this.getMonth() + n);
					this.setDate(Math.min(this.tempDate, this.getMaxDays()));
				};
				Date.prototype.addYears = function (n) {
					if (this.tempDate == null) {
						this.tempDate = this.getDate();
					}
					this.setDate(1);
					this.setFullYear(this.getFullYear() + n);
					this.setDate(Math.min(this.tempDate, this.getMaxDays()));
				};
				Date.prototype.getMaxDays = function() {
					var tmpDate = new Date(Date.parse(this)),
						d = 28, m;
					m = tmpDate.getMonth();
					d = 28;
					while (tmpDate.getMonth() == m) {
						d ++;
						tmpDate.setDate(d);
					}
					return d - 1;
				};
				Date.prototype.getFirstDay = function() {
					var tmpDate = new Date(Date.parse(this));
					tmpDate.setDate(1);
					return tmpDate.getDay();
				};
				Date.prototype.getWeekNumber = function() {
					var tempDate = new Date(this);
					tempDate.setDate(tempDate.getDate() - (tempDate.getDay() + 6) % 7 + 3);
					var dms = tempDate.valueOf();
					tempDate.setMonth(0);
					tempDate.setDate(4);
					return Math.round((dms - tempDate.valueOf()) / (604800000)) + 1;
				};
				Date.prototype.getDayOfYear = function() {
					var now = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
					var then = new Date(this.getFullYear(), 0, 0, 0, 0, 0);
					var time = now - then;
					return Math.floor(time / 24*60*60*1000);
				};
			},
			layout = function (el) {
				var options = $(el).data('pickmeup');
				var cal = $('#' + options.id);
				var tbl = cal.find('.pmu-instance');
				var width = 0;
				tbl.each(function () {
					width	+= $(this).outerWidth();
				});
				var height = tbl.outerHeight();
				cal.css({
					width: width + 'px',
					height: height + 'px'
				});
			},
			click = function(e) {
				var el = $(e.target);
				if (el.hasClass('pmu-button')) {
					if (el.hasClass('pmu-disabled')) {
						return false;
					}
					var options = $(this).data('pickmeup');
					var instance = el.parentsUntil('.pickmeup');
					var root = instance.parent();
					var tblIndex = $('.pmu-instance', this).index(root.get(0)) - 1;
					var tmp = new Date(options.current);
					var changed = false;
					var fillIt = false;
					if (el.parent().is('nav')) {
						if (root.hasClass('pmu-week') && options.mode == 'range' && !el.next().hasClass('pmu-disabled')) {
							var val = parseInt(instance.next().text(), 10);
							tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
							if (instance.next().hasClass('pmu-not-in-month')) {
								tmp.addMonths(val > 15 ? -1 : 1);
							}
							tmp.setDate(val);
							options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
							tmp.setHours(23,59,59,0);
							tmp.addDays(6);
							options.date[1] = tmp.valueOf();
							fillIt = true;
							changed = true;
							options.lastSel = false;
						} else if (el.hasClass('pmu-month')) {
							tmp.addMonths(tblIndex - Math.floor(options.calendars / 2));
							if (root.hasClass('pmu-view-years')) {
								root.removeClass('pmu-view-years').addClass('pmu-view-days');
								el.text(formatDate(tmp, 'B, Y'));
							} else if (root.hasClass('pmu-view-months')) {
								root.removeClass('pmu-view-months').addClass('pmu-view-years');
								el.text((tmp.getFullYear()-6) + ' - ' + (tmp.getFullYear()+5));
							} else if (root.hasClass('pmu-view-days')) {
								root.removeClass('pmu-view-days').addClass('pmu-view-months');
								el.text(tmp.getFullYear());
							}
						} else {
							if (root.hasClass('pmu-view-years')) {
								options.current.addYears(instance.hasClass('pmu-prev') ? -12 : 12);
							} else if (root.hasClass('pmu-view-months')) {
								options.current.addYears(instance.hasClass('pmu-prev') ? -1 : 1);
							} else if (root.hasClass('pmu-view-days')) {
								options.current.addMonths(instance.hasClass('pmu-prev') ? -1 : 1);
							}
							fillIt = true;
						}
					} else if (!instance.hasClass('pmu-disabled')) {
						if (root.hasClass('pmu-view-years')) {
							options.current.setFullYear(parseInt(el.text(), 10));
							root.get(0).className = 'pmu-view-months';
						} else if (root.hasClass('pmu-view-months')) {
							options.current.setMonth(root.find('.pmu-months > div').index(instance));
							options.current.setFullYear(parseInt(root.find('.pmu-month').text(), 10));
							options.current.addMonths(Math.floor(options.calendars/2) - tblIndex);
							root.get(0).className = 'pmu-view-days';
						} else {
							var val = parseInt(el.text(), 10);
							tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
							if (instance.hasClass('pmu-not-in-month')) {
								tmp.addMonths(val > 15 ? -1 : 1);
							}
							tmp.setDate(val);
							switch (options.mode) {
								case 'multiple':
									val = (tmp.setHours(0,0,0,0)).valueOf();
									if ($.inArray(val, options.date) > -1) {
										$.each(options.date, function(nr, dat){
											if (dat == val) {
												options.date.splice(nr,1);
												return false;
											}
										});
									} else {
										options.date.push(val);
									}
									break;
								case 'range':
									if (!options.lastSel) {
										options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
									}
									val = (tmp.setHours(23,59,59,0)).valueOf();
									if (val < options.date[0]) {
										options.date[1] = options.date[0] + 86399000;
										options.date[0] = val - 86399000;
									} else {
										options.date[1] = val;
									}
									options.lastSel = !options.lastSel;
									break;
								default:
									options.date = tmp.valueOf();
									break;
							}
						}
						fillIt = true;
						changed = true;
					}
					if (fillIt) {
						fill(this);
					}
					if (changed) {
						options.onChange.apply(this, prepareDate(options));
					}
				}
				return false;
			},
			prepareDate = function (options) {
				var tmp;
				if (options.mode == 'single') {
					tmp = new Date(options.date);
					return [formatDate(tmp, options.format), tmp, options.el];
				} else {
					tmp = [[],[], options.el];
					$.each(options.date, function(nr, val){
						var date = new Date(val);
						tmp[0].push(formatDate(date, options.format));
						tmp[1].push(date);
					});
					return tmp;
				}
			},
			getViewport = function () {
				return {
					l : window.pageXOffset || document.documentElement.scrollLeft,
					t : window.pageYOffset || document.documentElement.scrollTop,
					w : window.innerWidth || document.documentElement.clientWidth,
					h : window.innerHeight || document.documentElement.clientHeight
				};
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			show = function () {
				var cal = $('#' + $(this).data('pickmeupId'));
				if (!cal.is(':visible')) {
					var calEl = cal.get(0);
					fill(cal);
					var options = cal.data('pickmeup');
					options.onBeforeShow.apply(this, [cal.get(0)]);
					var pos = $(this).offset();
					var viewPort = getViewport();
					var top = pos.top;
					var left = pos.left;
					cal.css({
						visibility: 'hidden',
						display: 'block'
					});
					layout(calEl);
					switch (options.position){
						case 'top':
							top -= calEl.offsetHeight;
							break;
						case 'left':
							left -= calEl.offsetWidth;
							break;
						case 'right':
							left += this.offsetWidth;
							break;
						case 'bottom':
							top += this.offsetHeight;
							break;
					}
					if (top + calEl.offsetHeight > viewPort.t + viewPort.h) {
						top = pos.top  - calEl.offsetHeight;
					}
					if (top < viewPort.t) {
						top = pos.top + this.offsetHeight + calEl.offsetHeight;
					}
					if (left + calEl.offsetWidth > viewPort.l + viewPort.w) {
						left = pos.left - calEl.offsetWidth;
					}
					if (left < viewPort.l) {
						left = pos.left + this.offsetWidth
					}
					cal.css({
						visibility: 'visible',
						display: 'block',
						top: top + 'px',
						left: left + 'px'
					});
					if (options.onShow.apply(this, [cal.get(0)]) != false) {
						cal.show();
					}
					$(document).bind('mousedown', {cal: cal, trigger: this}, hide);
				}
				return false;
			},
			hide = function (ev) {
				if (ev.target != ev.data.trigger && !isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('pickmeup').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			};
		return {
			init: function(options){
				options = $.extend({}, defaults, options||{});
				extendDate(options.locale);
				options.calendars = Math.max(1, parseInt(options.calendars,10)||1);
				options.mode = /single|multiple|range/.test(options.mode) ? options.mode : 'single';
				return this.each(function(){
					if (!$(this).data('pickmeup')) {
						options.el = this;
						if (options.date.constructor == String) {
							options.date = parseDate(options.date, options.format);
							options.date.setHours(0,0,0,0);
						}
						if (options.mode != 'single') {
							if (options.date.constructor != Array) {
								options.date = [options.date.valueOf()];
								if (options.mode == 'range') {
									options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
								}
							} else {
								for (var i = 0; i < options.date.length; i++) {
									options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
								}
								if (options.mode == 'range') {
									options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
								}
							}
						} else {
							options.date = options.date.valueOf();
						}
						if (!options.current) {
							options.current = new Date();
						} else {
							options.current = parseDate(options.current, options.format);
						}
						options.current.setDate(1);
						options.current.setHours(0,0,0,0);
						var id = 'pickmeup_' + parseInt(Math.random() * 1000), cnt;
						options.id = id;
						$(this).data('pickmeupId', options.id);
						var cal = $(tpl.wrapper).attr('id', id).bind('click', click).data('pickmeup', options);
						if (options.className) {
							cal.addClass(options.className);
						}
						var html = '';
						for (var i = 0; i < options.calendars; i++) {
							cnt = options.starts;
							html += tmpl(tpl.head.join(''), {
									week: options.locale.weekMin,
									prev: options.prev,
									next: options.next,
									day1: options.locale.daysMin[(cnt++)%7],
									day2: options.locale.daysMin[(cnt++)%7],
									day3: options.locale.daysMin[(cnt++)%7],
									day4: options.locale.daysMin[(cnt++)%7],
									day5: options.locale.daysMin[(cnt++)%7],
									day6: options.locale.daysMin[(cnt++)%7],
									day7: options.locale.daysMin[(cnt++)%7]
								});
						}
						cal
							.addClass(views[options.view]).append(html);
						fill(cal);
						if (options.flat) {
							cal.appendTo(this).show().css('position', 'relative');
							layout(cal.get(0));
						} else {
							cal.appendTo(document.body);
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('pickmeupId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('pickmeupId')) {
						$('#' + $(this).data('pickmeupId')).hide();
					}
				});
			},
			setDate: function(date, shiftTo){
				return this.each(function(){
					if ($(this).data('pickmeupId')) {
						var cal = $('#' + $(this).data('pickmeupId'));
						var options = cal.data('pickmeup');
						options.date = date;
						if (options.date.constructor == String) {
							options.date = parseDate(options.date, options.format);
							options.date.setHours(0,0,0,0);
						}
						if (options.mode != 'single') {
							if (options.date.constructor != Array) {
								options.date = [options.date.valueOf()];
								if (options.mode == 'range') {
									options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
								}
							} else {
								for (var i = 0; i < options.date.length; i++) {
									options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
								}
								if (options.mode == 'range') {
									options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
								}
							}
						} else {
							options.date = options.date.valueOf();
						}
						if (shiftTo) {
							options.current = new Date (options.mode != 'single' ? options.date[0] : options.date);
						}
						fill(cal);
					}
				});
			},
			getDate: function(formated) {
				if (this.size() > 0) {
					return prepareDate($('#' + $(this).data('pickmeupId')).data('pickmeup'))[formated ? 0 : 1];
				}
			},
			clear: function(){
				return this.each(function(){
					if ($(this).data('pickmeupId')) {
						var cal = $('#' + $(this).data('pickmeupId'));
						var options = cal.data('pickmeup');
						if (options.mode != 'single') {
							options.date = [];
							fill(cal);
						}
					}
				});
			},
			fixLayout: function(){
				return this.each(function(){
					if ($(this).data('pickmeupId')) {
						var cal = $('#' + $(this).data('pickmeupId'));
						var options = cal.data('pickmeup');
						if (options.flat) {
							layout(cal.get(0));
						}
					}
				});
			}
		};
	}();
	$.fn.extend({
		pickmeup: pickmeup.init,
		pickmeupHide: pickmeup.hidePicker,
		pickmeupShow: pickmeup.showPicker,
		pickmeupSetDate: pickmeup.setDate,
		pickmeupGetDate: pickmeup.getDate,
		pickmeupClear: pickmeup.clear,
		pickmeupLayout: pickmeup.fixLayout
	});
})(jQuery);

(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();