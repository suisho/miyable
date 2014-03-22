var runner = require('runner')

window.gcs = module.exports = function(selectors, cb){
  runner(selectors, engine, function(err, result){
    cb(err, reuslt)
  })
}
