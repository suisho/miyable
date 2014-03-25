var cheerio = require("../engine/cheerio.js")
var jsdom = require("../engine/jsdom.js")
var fs = require('fs')
var html = fs.readFileSync("./fixture/demo.html", "utf-8")
var async = require('async')
var assert = require('assert')

describe("", function(){
  it("", function(done){
    var selector = ["a", ".foo", "div"]
    async.map([jsdom, cheerio] , function(engine, next){
      engine(html, selector, function(err, result){
        next(err, result)
      })
    }, function(err, results){
      console.log(results[0], results[1])
      assert.deepEqual(results[0], results[1])
      done()
    })
  })
})