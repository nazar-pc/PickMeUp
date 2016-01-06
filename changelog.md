2.x.x (Unreleased yet)
* Added 'title_format' option

2.8.0 (08 April, 2015)
* Added support for no default date [#70](https://github.com/nazar-pc/PickMeUp/pull/70), thanks to Amar Syla for pull request!

2.7.0 (31 March, 2015)
* Added UMD support [#63](https://github.com/nazar-pc/PickMeUp/pull/63), thanks to Przemysław Piątek for pull request!

2.6.5 (24 March, 2015)
* Mobile Safari issue, fixes [#50](https://github.com/nazar-pc/PickMeUp/issues/50)

2.6.4 (04 March, 2015)
* Method 'set_date' does not update input value, fixes [#53](https://github.com/nazar-pc/PickMeUp/issues/53)
* Fix for input+range+hide_on_select, fixes [#56](https://github.com/nazar-pc/PickMeUp/issues/56)
* Fix for disabled dates + bootstrap, fixes [#59](https://github.com/nazar-pc/PickMeUp/issues/59)

2.6.3 (21 January, 2015)
* Protect modification of internal date in `render` event callback.
* Fix for `update` event on `flat: true` instances.

2.6.2 (15 January, 2015)
* Fix for bug when `min` and `max` were not specified and forced datepicker to stuck at 1970, fixes [#49](https://github.com/nazar-pc/PickMeUp/issues/49)

2.6.1 (13 January, 2015)
* Fix for bug when specified `max` date in the middle of the month caused inability to switch to that month

2.6.0 (13 December, 2014)
* New parameter `$background-hover` added to `scss` style file
* Fix wrong class on selected months and years (`pmu-today` instead of `pmu-selected`)
* New `default_date` option
* Fix for `$background-hover` default color
* Fix for resetting interval to 1 date with combination of `flat:false` and `hide_on_select:true`

2.5.1 (08 September, 2014)
* Single mode check if options.date is array (take first element of array) [#35](https://github.com/nazar-pc/PickMeUp/pull/35)

2.5.0 (23 August, 2014)
* Fix for The month before min date should not display [#32](https://github.com/nazar-pc/PickMeUp/issues/32)
* events namespacing
* touch support (`trigger_event` option defaults to `click touchstart`)
* `destroy` method, fixes [#30](https://github.com/nazar-pc/PickMeUp/issues/30)
* current date highlighting in range mode
* new option `select_day` (also `select_month` no longer depends on `select_year`), fixes [#29](https://github.com/nazar-pc/PickMeUp/issues/29)
* account min/max options in months and years views
* huge refactoring and fixes for various found small bugs
* Fix for pmu-{next || prev} clicktarget unreachable with icon, issue [#33](https://github.com/nazar-pc/PickMeUp/issues/33)

2.4.3 (05 August, 2014)
* Fix for broken date parsing in last version

2.4.2 (16 July, 2014)
* More correct fix for NaN instead of dates and months names when wrong data placed in input field

2.4.1 (11 July, 2014)
* Fix for NaN instead of dates and months names when wrong data placed in input field, fixes [#26](https://github.com/nazar-pc/PickMeUp/issues/26) and [#27](https://github.com/nazar-pc/PickMeUp/issues/27)

2.4.0 (01 July, 2014)
* Add methods prev/next for external call

2.3.0 (29 June, 2014)
* new options `select_year` and `select_month`
* bower config added
* New event `fill` event added
* New scss parameter for color of selected date
* UIkit integration
* Fix for issue [#20](https://github.com/nazar-pc/PickMeUp/issues/20): Invoking clear in range mode
* Fix for parsing formatted date when using months
* Correct cyrillic and any other symbols support in months names
* Added support of custom format in `formatted` argument for `get_date` method
* Twitter Bootstrap integration
* Hide previous/next buttons when necessary if min/max options specified, closes [#17](https://github.com/nazar-pc/PickMeUp/issues/17)

2.2.3 (January 18, 2014)
* Fix for issue [#7](https://github.com/nazar-pc/PickMeUp/issues/7): Doesn't close when focus is lost from input field
* Fix for issue [#8](https://github.com/nazar-pc/PickMeUp/issues/8): NaN is appearing instead of numbers

2.2.2 (January 11, 2014)
* update, get_date, set_date methods are not working

2.2.1 (January 08, 2014)
* Fix for issue [#4](https://github.com/nazar-pc/PickMeUp/issues/4)): Callbacks only apply to first of original selector

2.2.0 (January 08, 2014)
* Automatic getting and setting value when applied to input (fixes issue [#3](https://github.com/nazar-pc/PickMeUp/issues/3))
* New `separator` option.

2.1.2 (November 29, 2013)
* Positioning fix

2.1.1 (November 25, 2013)
* Fixed typo

2.1.0 (November 21, 2013)
* Current day marked with class `pmu-today` and has its own color settings
* Bad input ignored, today's date assumed
* Disabled text selection
* Arrows only on first and last calendars
* New `min` and `max` options
* New `hide_on_select` option

2.0.1 (November 21, 2013)
* Large internal refactoring, hopefully code now is more clear,  consistent and understandable.
* `this` in any callback will be the same element, on which pickmeup() was called (actually, the same for internal functions).
* Current options (for whatever reason) can be accessed as `$('...').data('pickmeup-options')`.
* Root pickmeup element (jQuery collection object) can be accessed as `$('...').get(0).pickmeup` or directly `this.pickmeup` if inside callback.

1.0.0 (November 16, 2013)
* Initial release
