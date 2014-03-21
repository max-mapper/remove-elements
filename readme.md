# remove-elements 

Removes elements from the DOM by CSS selector. Very simple but helps reduce a bit of
boilerplate and might spare somebody some Googling if they forget.

Uses https://github.com/hughsk/remove-element by @hughsk

[![testling badge](https://ci.testling.com/maxogden/remove-elements.png)](https://ci.testling.com/maxogden/remove-elements)

## Usage

[![remove-elements](https://nodei.co/npm/remove-elements.png)](https://nodei.co/npm/remove-elements)

### `remove(cssSelectorString, [scope])`

Removes all matching elements from the DOM, if they are attached.
If `scope` is not defined it will use `document.querySelectorAll`.
If `scope` is an element it will use `scope.querySelectorAll`, if
it is an array (or [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList))
it will iterate over it and use `scope[i].querySelectorAll`.

## License

BSD
