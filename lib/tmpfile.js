var tmp = require('tmp');
var fs = require('fs')
// generate tmp file
module.exports = function(str, cb){
  tmp.file(function(err, path){
    if(err){
      cb(err)
      return
    }
    fs.writeFile(str, function(err){
      cb(err, path)
    })
  })
}