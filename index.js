var newlines = /\n/g
var signewlines = /\n.+/g
var stripcommentsandspaces = /\s*((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

/* regexs from Angular.js, (c) Google, MIT licensed */
var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /\s*,\s*/;



function info (fn) {
  var src = fn.toString()
  var params = src.match(FN_ARGS)[1]
  params = params ? params.split(FN_ARG_SPLIT) : [];
  params.loc = src.match(newlines).length + 1
  src = src.replace(stripcommentsandspaces, '')
  params.sloc = src.match(signewlines).length + 1
  return params
}

module.exports = info