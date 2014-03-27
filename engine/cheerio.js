var jsdom = require('jsdom')
var computeStyles = require("../lib/compute_style.js")
var cheerio = require('cheerio')
var sortSpecificity = require('../lib/sort_specificity')
var parse = require('css').parse


module.exports = function(html, selectors, cb){
  var $ = cheerio.load(html)

  // expose style
  var rules = parse($("style").text()).stylesheet.rules
  var selectorStyles = {}
  rules.forEach(function(rule){
    rule.selectors.forEach(function(selector){
      selectorStyles[selector] = rule.declarations
    })
  })
  // applicate style
  selectors = sortSpecificity(selectors).reverse()

  selectors.forEach(function(selector){
    var styles = selectorStyles[selector]
    if(!styles) return
    $(selector).each(function(){
      var self = this
      styles.forEach(function(style){
        $(self).css(style.property, style.value)
      })
    })
  })
  // import
  selectors.forEach(function(selector){
    var styles = selectorStyles[selector]
    if(!styles) return
    $(selector).each(function(){
      var self = this
      styles.forEach(function(style){
        if(/\!important/.test(style.value)){
          $(self).css(style.property, style.value)
        }
      })
    })
  })


  // get styles
  var result = {}
  selectors.forEach(function(selector){
    var find = function($, selector){
      var $item;
      $(selector).each(function(i){
        var dataSelector = $(this).data('selector')
        if(selector == dataSelector){
          $item = $(this)
        }
      })
      return $item
    }
    var $elm = find($, selector)
    result[selector] = $elm.css()
  })

  cb(null, result)

}
