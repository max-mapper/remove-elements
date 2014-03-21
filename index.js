var removeEl = require('remove-element')

module.exports = function removeEls(selector, scope) {
  scope = scope || window.document
  if (scope.length) {
    for (var i = 0; i < scope.length; i++) {
      removeEls(selector, scope[i])
    }
    return
  }
  var matched = scope.querySelectorAll(selector)
  for (var i = 0; i < matched.length; i++) {
    var el = matched[i]
    removeEl(el)
  }
}
