var jsdomEngine = require('./engine/jsdom')
var runner = require('./runner')

module.exports = function(html, selectors, cb){
  runner(html, selectors, jsdomEngine, function(err, result){
    cb(err, result)
  })
}