var qs = require('querystring')
// parse cssText and sorted property csstext
module.exports = function(cssText){
  if(typeof cssText === "string"){
    var parsed =  qs.parse(cssText,";", ":")
  }else{
    var parsed = cssText
  }
  // trim
  return Object.keys(parsed).sort().filter(function(key){
    return (key !== '')
  }).map(function(key){
    var value = parsed[key]
    if(typeof value == "string"){
      value = value.trim()
    }
    key = key.trim()
    return key + ":" + value
  }).join(";")
}