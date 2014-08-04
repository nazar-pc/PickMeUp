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
