var xport = require('node-xport')(module)
  , LogicAnime = require('./otaku/logicAnime')
  , LogicManga = require('./otaku/logicManga')
  , LogicNovel = require('./otaku/logicNovel')
  ;

function LogicOtaku() {}

LogicOtaku.initialize = function() {
    var otakuDB = require('../database/otakudb').database;
    
    LogicAnime.initialize(otakuDB);
    LogicManga.initialize(otakuDB);
    LogicNovel.initialize(otakuDB);
}

xport(LogicOtaku);