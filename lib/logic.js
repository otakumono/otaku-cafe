var xport = require('node-xport')(module)
  , LogicOtaku = require('./logic/logicOtaku')
  ;

function Logic() {}

Logic.initialize = function() {
    LogicOtaku.initialize();
}

xport(Logic);