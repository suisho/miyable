var sortSpecificity = require('../lib/sort_specificity')
var assert = require('assert')
describe('specificity', function(){
  it('sort', function(){
    var input = [
      "a .d b#foo",
      "b",
      "a .d b.d",
      "a b",
      "a .d b",
    ]
    var result = sortSpecificity(input)
    var expect = [
      "a .d b#foo",
      "a .d b.d",
      "a .d b",
      "a b",
      "b"
    ]
    assert.deepEqual(result, expect)
  })
  it('sort', function(){
    var input = [
      "a",
      ".foo",
      "div"
    ]
    var result = sortSpecificity(input)
    var expect = [
      ".foo",
      "a",
      "div"
    ]
    assert.deepEqual(result, expect)
  })
})