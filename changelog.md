2.0.0 (November 21, 2013)
* Large internal refactoring, hopefully code now is more clear,  consistent and understandable.
* `this` in any callback will be the same element, on which pickmeup() was called (actually, the same for internal functions).
* Current options (for whatever reason) can be accessed as `$('...').data('pickmeup-options')`.
* Root pickmeup element (jQuery collection object) can be accessed as `$('...').get(0).pickmeup` or directly `this.pickmeup` if inside callback.

1.0.0 (November 16, 2013)
Initial release