3.0.5 (09 September, 2016)
* Remove `.idea` from npm package
* Small fix for getting locales when parsing date
* Remove mentioning support for Opera 12.1 (didn't check it for a long time and never will)
* Fix for error when no options specified during initialization
* Fix for events being dispatched on instance element, rather than on target element, where PickMeUp was initialized, fixes [#134](https://github.com/nazar-pc/PickMeUp/issues/134)
* Fix for strange issue when showing datepicker in `click` event handler of another element didn't work, fixes [#135](https://github.com/nazar-pc/PickMeUp/issues/135)
* Fix for non-flat datepicker was closed immediately in `range` mode, fixes [#136](https://github.com/nazar-pc/PickMeUp/issues/136)

3.0.0 (02 September, 2016)
* PickMeUp is now standalone, no jQuery needed
* `.pmu-flat` and `.pmu-hidden` classes added
* Events are now native DOM events instead of callbacks in options
* Changing date in input field will immediately affect datepicker
* Defaults moved from `$.pickmeup` to `pickmeup.defaults`
* Internals (runtime options, events, etc.) are stored in `element.__pickmeup`
* `before_show` event removed as redundant
* Days/months/years rendering is now done in form of elements, which allows to customize contents in any possible way, while necessary data are stored in private properties of those elements
* New options `instance_template` and `instance_content_template` added
* Stop patching `Date.prototype`, use local wrappers instead
* `trigger_event` option was removed and styles adjusted to remove 300ms delay when clicking on touch devices
* Added support for multiple languages with ability to choose during initialization (using newly added option `locales` and changed option `locale`)
* Added gulp task for building minified file
* Files re-structuring
* Refactoring and smaller bug fixes
* Minified source become even smaller!

2.10.0 (31 August, 2016)
* Refactoring to `set_date` during initialization instead of duplicating code
* Added new option `current`, represents date that will be in the center of rendered calendar
* Fix for [#41](https://github.com/nazar-pc/PickMeUp/issues/41) (do not move months back and forth when selecting days)
* Refactoring towards unification and normalization (dates as `Date` objects)
* Fix for [#97](https://github.com/nazar-pc/PickMeUp/issues/97) and generally for setting date outside of limits
* Fix for setting date to empty array, to address underlying problem in [#121](https://github.com/nazar-pc/PickMeUp/issues/121)
* Make sass variables 'default' ([PR #313](https://github.com/nazar-pc/PickMeUp/pull/131))
* Tiny fix for `show` method being forced even when it shouldn't
* Do not update `<input>` value unless value really changed to avoid cursor jumping
* Small fixes

2.9.2 (05 August, 2016)
* Fix for [#120](https://github.com/nazar-pc/PickMeUp/issues/120) (when applied to multiple elements options might be changed during initialization of one element and then used in another, fixed by deep copy of options)
* Added support for numeric (Unix timestamp in milliseconds) dates

2.9.1 (24 June, 2016)
* Fix for Twitter Bootstrap and UIkit integration didn't work properly, fixes [#73](https://github.com/nazar-pc/PickMeUp/issues/73)
* In case of multiple dates open on the last one instead of the first (seems more natural), fixes first part of [#74](https://github.com/nazar-pc/PickMeUp/issues/74)
* Added support for `default: false` for `range` and `multiple` modes, fixes second part of [#74](https://github.com/nazar-pc/PickMeUp/issues/74) and [#89](https://github.com/nazar-pc/PickMeUp/issues/89)
* Fire `change` event when filling empty input on on first open, fixes [#77](https://github.com/nazar-pc/PickMeUp/issues/77)
* Small fix for `transparent` in SCSS
* Consistent use of namespaced events from configuration
* Added information about touch devices support to readme

2.9.0 (04 February, 2016)
* Added 'title_format' option
* Added NPM support

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
