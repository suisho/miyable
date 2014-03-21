var jsdom = require('jsdom')

function computeStyle(window, selectors){
  var document = window.document

  var result = {}
  selectors.forEach(function(selector){
    var elm = document.querySelector(selector)
    result[selector] = window.getComputedStyle(elm).cssText
  })
  return result
}

module.exports = function(html, selectors, cb){
  jsdom.env(html, function(err, window){
    cb(null, computeStyle(window, selectors))
  })
}