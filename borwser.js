var fs = require('fs')
var csstext = require('./lib/csstext')
var computeStyles = require("./lib/compute.js")

window.gcs = function(selectors, cb){
  var result = computeStyles(window, selectors)
  var err = null
  Object.keys(result).map(function(key){
    result[key] = result[key]
  })
  cb(err, result)
}
