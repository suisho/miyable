var jsdomEngine = require('./engine/jsdom')
var cheerioEngine = require('./engine/cheerio')

var engine = cheerioEngine

module.exports = function(selectors, cb){
  engine(selectors, function(err, result){
    cb(err, result)
  })
}
