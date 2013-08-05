# fninfo
get basic info about a function

## installation

    $ npm install fninfo

## usage
```js
var fninfo = require('fninfo')

var a = function (foo, bar, baz) {/*

  */

  // comment
  baz = foo + bar
  return baz
}

fninfo(a)
// => {
//      params: ['foo', 'bar', 'baz']
//      loc: 8
//      sloc: 4
//    }
```

## running the tests

From package root,

`$ npm install`
`$ npm test`

## license

MIT (c) 2013 jden <jason@denizac.org>. See LICENSE.md