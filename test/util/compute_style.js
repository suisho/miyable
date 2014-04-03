/**
 *
 */
var async = require('async')

function getData(element, propery){
  // use dataset
  if(element.dataset){
    return elemnt.dataset[property]
  }
  // use attribute
  var dataProperty = "data-" + propery
  if(element.attributes){
    var prop = element.attributes[dataProperty]
    if(prop.value){
      return prop.value
    }
  }
  return null
}

function findElment(window, selector){
  var elms = window.document.querySelectorAll(selector)
  for(var i=0; i< elms.length;i++){
    var elm = elms[i]
    var dataSelector = getData(elm, "selector")
    if(dataSelector == selector){
      return elm
    }
  }
  return null
}

function compute(window, selector){
  var elm = findElment(window, selector)
  return window.getComputedStyle(elm).cssText
}

module.exports = function(window, selectors, cb){
  var result = {}
  if(typeof selectors == "string"){
    selectors = [selectors]
  }
  selectors.forEach(function(selector){
    var cssText = compute(window,selector)
    result[selector] = cssText
  })
  cb(null, result)
}
