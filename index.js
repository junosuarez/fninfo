var newlines = /\n/g
var signewlines = /\n.+/g
var stripcommentsandspaces = /\s*((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

/* regexs from Angular.js, (c) Google, MIT licensed */
var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /\s*,\s*/;

function info (fn) {
  var src = fn.toString()
  var out = []

  var loc = matches(src, newlines) + 1
  src = src.replace(stripcommentsandspaces, '')
  var sloc = matches(src, signewlines) + 1

  var params = src.match(FN_ARGS)
  params = params && params[1] ? params[1].trim().split(FN_ARG_SPLIT) : [];

  params.sloc = sloc
  params.loc = loc

  return params
}

function matches(str, regex) {
  var m = str.match(regex)
  return m ? m.length : 0
}

module.exports = info