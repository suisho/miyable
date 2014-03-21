var fs = require('fs')
var jsdom = require('jsdom')
var cheerio = require('cheerio')
var html = fs.readFileSync('./fixture/demo.html', 'utf-8')


function getComputedStyle(window, selector, pseudo){
  var document = window.document

  var elm = document.querySelector(selector)
  return window.getComputedStyle(elm, pseudo)
}

// with jsdom
/*
jsdom.env(html, function(err, window){
  console.log("JSDOOOOOOOOOOOM")
  //var elm = document.querySelector('div')
  //var elm_a = document.querySelector('a')
  console.log("computed:", getComputedStyle(window, "div"))
  console.log("computed:", getComputedStyle(window, "a"))
  console.log("computed:", getComputedStyle(window, "a", ":hover"))
  //console.log("style:", elm.style)
  //console.log("current style:", elm.currentStyle)
})

// cheerio
/*console.log("$$$$$$$$$$$$")
var $ = cheerio.load(html)
console.log($("div").css("color"))
*/

// phantom
var phantom = require('phantom')
phantom.create(function(ph){
  ph.createPage(function(page){
    page.open('./fixture/demo.html', function(){
      page.evaluate(function(){
        var elm = document.querySelector("div")
        return window.getComputedStyle(elm)
      }, function(result){
        console.log(result)
        page.render("tmp/foo.png")
        ph.exit()
      })
    })
  })
})

