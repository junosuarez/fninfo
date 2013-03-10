var fninfo = require('../index')
var assert = require('assert')

var a = function (foo, bar, baz) {/*
  
  */

  // comment
  baz = foo + bar
  return baz
}

var ainfo = fninfo(a)

assert.equal(ainfo[0], 'foo')
assert.equal(ainfo[1], 'bar')
assert.equal(ainfo[2], 'baz')
assert.equal(ainfo.loc, 8)
assert.equal(ainfo.sloc, 4)

var b = function () {
  return true
}

var binfo = fninfo(b)

assert.equal(binfo.length, 0)
assert.equal(binfo.sloc, 3)
assert.equal(binfo.loc, 3)

console.log('tests ok')