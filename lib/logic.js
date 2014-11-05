var xport = require('node-xport')
  , LogicOtaku = require('./logic/logicOtaku')
  ;

function Logic() {}

Logic.initialize = function() {
    LogicOtaku.initialize();
}

xport(module, Logic);