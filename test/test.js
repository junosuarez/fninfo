var fninfo = require('../index')
var assert = require('assert')
var chai = require('chai')
chai.should()

describe('fninfo', function () {
  it('parses parameter list', function () {

    var a = function (foo, bar, baz) {/*

      */

      // comment
      baz = foo + bar
      return baz
    }

    var ainfo = fninfo(a)

    ainfo.params.length.should.equal(3)
    ainfo.params.should.deep.equal(['foo','bar','baz'])

    assert.equal(ainfo.loc, 8)
    assert.equal(ainfo.sloc, 4)

  })

  it('works with nullary functions', function () {
    var b = function () {
      return true
    }

    var binfo = fninfo(b)

    assert.equal(binfo.params.length, 0)
    assert.equal(binfo.sloc, 3)
    assert.equal(binfo.loc, 3)

  })

  it('supports comments in parameter list', function () {

    var c = function (x /* can be anything */) { return !x }

    var cinfo = fninfo(c)

    assert.equal(cinfo.params.length, 1)
    assert.equal(cinfo.params[0], 'x')
    assert.equal(cinfo.sloc, 1)
    assert.equal(cinfo.loc, 1)

  })

  it('should handle overriden `toString`', function () {

    var d = function (a, b, c) {}
    d.toString = function () { return 'foo' }

    var dinfo = fninfo(d)

    assert.equal(dinfo.params.length, 0)
    assert.equal(dinfo.sloc, 1)
    assert.equal(dinfo.loc, 1)

  })

  it('handles multiline parameter lists', function () {
    var fn = function (z,
      a,
      b,
      c,
      d
    ){}
    var info = fninfo(fn)
    info.params.length.should.equal(5)
    info.params.should.deep.equal(['z','a','b','c','d'])
  })

  it('passes through .name', function () {
    fninfo(function foo () {

    }).name.should.equal('foo')
  })

})
