var nativeEngine = require('./engine/native')
var runner = require('./lib/runner')

window.gcs = module.exports = function(selectors, cb){
  runner(selectors, nativeEngine, function(err, result){
    cb(err, reuslt)
  })
}
