var jsdomEngine = require('./engine/jsdom')
var cheerioEngine = require('./engine/cheerio')
var runner = require('./lib/runner')


module.exports = function(html, selectors, cb){
  runner(html, selectors, cheerioEngine, function(err, result){
    cb(err, result)
  })
}
