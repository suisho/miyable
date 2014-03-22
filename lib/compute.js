function compute(window, selector){
  var elm = window.document.querySelector(selector)
  return window.getComputedStyle(elm).cssText
}
module.exports = function(window, selectors){
  var result = {}
  if(typeof selectors == "string"){
    selectors = [selectors]
  }
  selectors.forEach(function(selector){
    var cssText = compute(window,selector)
    result[selector] = cssText
  })
  return result
}
