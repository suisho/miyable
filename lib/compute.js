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
    result[selector] = compute(window,selector)
  })
  return result
}
