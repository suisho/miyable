var jsdom = require('jsdom')
var computeStyles = require("../lib/compute.js")

module.exports = function(html, selectors, cb){
  jsdom.env(html, function(err, window){
    cb(null, computeStyles(window, selectors))
  })
}