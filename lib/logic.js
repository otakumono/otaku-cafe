var xport = require('node-xport')(module)
  , LogicAuth = require('./logic/logicAuth')
  , LogicOtaku = require('./logic/logicOtaku')
  ;

function Logic() {}

Logic.initialize = function() {
    LogicAuth.initialize();
    LogicOtaku.initialize();
}

xport(Logic);