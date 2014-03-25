var fs = require('fs')
var async = require('async')
var assert = require('assert')
var csstext = require('../lib/csstext')
var cheerio = require("../engine/cheerio.js")
var jsdom = require("../engine/jsdom.js")
var html = fs.readFileSync("./fixture/demo.html", "utf-8")

describe("", function(){
  it("", function(done){
    var selector = ["a", ".foo", "div"]
    async.map([jsdom, cheerio] , function(engine, next){
      engine(html, selector, function(err, result){
        next(err, result)
      })
    }, function(err, results){
      var jsdomResult = {}
      var cheerioResult = {}
      Object.keys(results[0]).forEach(function(selector){
        jsdomResult[selector] = csstext(results[0][selector])
      })
      Object.keys(results[1]).forEach(function(selector){
        cheerioResult[selector] = csstext(results[1][selector])
      })
      assert.deepEqual(jsdomResult, cheerioResult)
      done()
    })
  })
})