var nativeEngine = require('./engine/native')
var runner = require('./lib/runner')

window.gcs = module.exports = function(selectors, cb){
  runner(null, selectors, nativeEngine, function(err, result){
    cb(err, result)
  })
}
