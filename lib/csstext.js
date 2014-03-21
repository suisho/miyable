var qs = require('querystring')
module.exports = function(cssText){
  var parsed =  qs.parse(cssText,";", ":")
  var result = {}
  Object.keys(parsed).forEach(function(key){
    var value = parsed[key]
    if(key === ''){
      return
    }
    if(typeof value == "string"){
      value = value.trim()
    }
    result[key] = value

  })
  return result
}