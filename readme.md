## PickMeUp - jQuery datepicker plugin

Really simple, powerful and customizable datepicker.

Author - Nazar Mokrynskyi

Based on DatePicker by Stefan Petre

It is very small:
* 14.8 KiB minified JavaScript (4.2 KiB gzip)
* 1.8 KiB minified CSS (650 B gzip)
* 0 KiB images

Browser support:
* IE 10+
* Opera 12.1+
* Latest versions of Firefox and Chrome

## [Demo](http://nazar-pc.github.io/PickMeUp)

## Getting started
You need only 2 files: `js/jquery.pickmeup.min.js` and `css/pickmeup.min.css`.

Then you can apply datepicker to any element:
```javascript
$('.date').pickmeup();
```
Global default settings are stored in `$.pickmeup`

They can be redefined during initialization:
```javascript
$('.date').pickmeup({
	format	: 'Y-m-d'
});
```

or with data-attributes with `pmu-` prefix:
```html
<div class="date" data-pmu-format="Y-m-d"></div>
```

## Configuration options
| Option        | Value                 | Default  | Description                                                                                               |
|---------------|-----------------------|----------|-----------------------------------------------------------------------------------------------------------|
| date          | array/object/string   | new Date | Selected date after initialization. Can be single date string/object or array depending on selection mode |
| flat          | boolean               | false    | Whatever if the date picker is appended to the element or triggered by an event                           |
| first_day     | 0/1                   | 1        | First day of week: 0 - Sunday, 1 - Monday                                                                 |
| prev          | string                | &#9664;  | Previous button content                                                                                   |
| next          | string                | &#9654;  | Next button content                                                                                       |
| mode          | single/multiple/range | single   | Date selection mode                                                                                       |
| view          | days/months/years     | days     | View mode after initialization                                                                            |
| calendars     | int                   | 1        | Number of calendars, that will be rendered                                                                |
| format        | string                | d-m-Y    | Date format (aAbBCdeHIjklmMpPsSuwyY are supported)                                                        |
| position      | top/right/bottom/left | bottom   | Date picker's position relative to the triggered element                                                  |
| trigger_event | string                | click    | Event to trigger the date picker                                                                          |
| class_name    | string                |          | Class to be added to root datepicker element                                                              |
| locale        | object                |          | Object, that contains localized days of week names and months                                             |

## Events callbacks
Also are specified as regular options:

##### object render (date)
Triggered on day element rendering, accepts date as argument and may return object with next properties:
* `selected`: if `true` - date will be selected
* `disabled`: if `true` - date will be disabled
* `class_name`: will be added to class of day element

##### change (formatted_date)
Triggered at date change, accepts formatted date as argument

##### before_show (jQuery pickmeup_datepicker_element)
Triggered before showing, accepts jQuery collection with root datepicker element

##### bool show (jQuery pickmeup_datepicker_element)
Triggered at showing, accepts jQuery collection with root datepicker element, if not `true` returned - datepicker will not be shown

##### bool hide (jQuery pickmeup_datepicker_element)
Triggered at hiding, accepts jQuery collection with root datepicker element, if not `true` returned - datepicker will not be hidden

## Methods
Methods allows external control on datepicker

##### Hide
```javascript
$('.date').pickmeup('hide');
```

##### Show
```javascript
$('.date').pickmeup('show');
```

##### Get date
```javascript
$('.date').pickmeup('get_date', formatted);
```
`formatted` - boolean (default `false`)

##### Set date
```javascript
$('.date').pickmeup('set_date', date);
```
`date` - can be single date string/object or array depending on selection mode

##### Clear multiple selection
```javascript
$('.date').pickmeup('clear');
```

##### Update datepicker
Is useful, for example, after input field change
```javascript
$('.date').pickmeup('update');
```

## Styling
If you want other colors - just change several variables in scss file.

To change size - adjust `font-size` for root datepicker element, everything will scale nicely.

## Contribution
Feel free to create issues and send pull requests, they are highly appreciated!

## License
MIT License, see license.txt