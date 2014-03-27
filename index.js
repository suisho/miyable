var jsdomEngine = require('./engine/jsdom')
var cheerioEngine = require('./engine/cheerio')
var runner = require('./lib/runner')

//var engine = cheerioEngine
var engine = jsdomEngine
module.exports = function(html, selectors, cb){
  engine(html, selectors, function(err, result){
    cb(err, result)
  })
}
