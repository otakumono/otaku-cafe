var xport = require('node-xport')
  , LogicCommonOtaku = require('./logicCommonOtaku')
  ;

function LogicAnime() {}

LogicAnime.initialize = function(otakuDB) {
    LogicAnime.Anime = otakuDB.modelAnime;
    LogicAnime.IndexAnime = otakuDB.modelIndexAnime;
};

LogicAnime.retrieve = function(id, callback) {
    LogicCommonOtaku.retrieve(LogicAnime.Anime, id, callback);
};

LogicAnime.lookup = function(name, callback) {
    LogicCommonOtaku.lookup(LogicAnime.Anime, name, callback);
};

LogicAnime.search = function(name, callback) {
    LogicCommonOtaku.search(LogicAnime.Anime, name, callback);
};

xport(module, LogicAnime);