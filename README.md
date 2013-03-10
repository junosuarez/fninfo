# fninfo
get basic info about a function

## installation

    $ npm install fninfo

## usage

    var fninfo = require('fninfo')

    var a = function (foo, bar, baz) {/*
      
      */

      // comment
      baz = foo + bar
      return baz
    }

    fninfo(a)
    // => ['foo', 'bar', 'baz']
    // other properties set on the returned array:
    // .loc => 8
    // .sloc => 4

## license

MIT (c) 2013 jden <jason@denizac.org>. See LICENSE.md