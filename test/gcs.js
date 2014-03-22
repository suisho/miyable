var gcs = require("../index.js")
var fs = require('fs')
var html = fs.readFileSync("./fixture/demo.html", "utf-8")

it("", function(done){
  gcs(html, ["a", "div", ".foo"], function(err, result){
    console.log(result)
    done()
  })
})