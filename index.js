var removeEl = require('remove-element')

module.exports = function(selector, scope) {
  scope = scope || window.document
  var matched = scope.querySelectorAll(selector)
  for (var i = 0; i < matched.length; i++) {
    var el = matched[i]
    removeEl(el)
  }
}
