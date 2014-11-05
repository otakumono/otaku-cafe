var xport = require('node-xport')
  , LogicAnime = require('./otaku/logicAnime')
  ;

function LogicOtaku() {}

LogicOtaku.initialize = function() {
    var otakuDB = require('../database/otakudb').database;
    
    LogicAnime.initialize(otakuDB);
}

xport(module, LogicOtaku);