var csstext = require("../lib/csstext")
var assert = require("assert")
it("parse", function(){
  var text = 'color: red; background-color: blue;'
  assert(csstext(text), {
    "color": "red",
    "background-color" : "blue"
  })
})
