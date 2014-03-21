var removeEl = require('remove-element')

module.exports = function(selector) {
  var matched = window.document.querySelectorAll(selector)
  for (var i = 0; i < matched.length; i++) {
    var el = matched[i]
    removeEl(el)
  }
}
