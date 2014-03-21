# remove-elements 

Removes elements from the DOM by CSS selector. Very simple but helps reduce a bit of
boilerplate and might spare somebody some Googling if they forget.

Uses https://github.com/hughsk/remove-element by @hughsk

[![testling badge](https://ci.testling.com/maxogden/remove-elements.png)](https://ci.testling.com/maxogden/remove-elements)

## Usage

[![remove-elements](https://nodei.co/npm/remove-elements.png)](https://nodei.co/npm/remove-elements)

### `remove(cssSelectorString, [scope])`

Removes all matching elements from the DOM, if they are attached.
If `scope` is defined it uses `scope.querySelectorAll` otherwise `document.querySelectorAll`.

## License

BSD
