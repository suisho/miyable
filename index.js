var fs = require('fs')
var csstext = require('./lib/csstext')
var jsdomEngine = require('./engine/jsdom')


module.exports = function(html, selectors, cb){
  jsdomEngine(html, selectors, function(err, result){
    Object.keys(result).map(function(key){
      result[key] = csstext(result[key])
    })
    cb(err, result)
  })
}