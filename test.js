var test = require('tape')
var remove = require('./')

test('removes element', function(t) {
  var div = document.createElement('div')
  div.classList.add('foo')
  document.body.appendChild(div)
  remove('.foo')
  var match = document.querySelector('.foo')
  t.notOk(match)
  t.end()
})