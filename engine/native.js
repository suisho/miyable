var computeStyles = require("../lib/compute.js")

module.exports = function(html, selectors, cb){
  var err = null
  var result = computeStyles(window, selectors)
  cb(err, result)
}