module.exports = function(window, selectors){
  var document = window.document

  var result = {}
  selectors.forEach(function(selector){
    var elm = document.querySelector(selector)
    var computed
    try{
      computed = window.getComputedStyle(elm).cssText
    }catch(e){
      console.log(selector, e)
      computed = e
    }
    result[selector] = computed
  })
  return result
}
