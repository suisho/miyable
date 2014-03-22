var fs = require('fs')


module.exports = function(html, selectors, engine, cb){
  engine(html, selectors, function(err, result){
    cb(err, result)
  })
}