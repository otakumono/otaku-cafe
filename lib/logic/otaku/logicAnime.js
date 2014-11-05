var xport = require('node-xport')
  , LogicCommonOtaku = require('./logicCommonOtaku')
  ;

function LogicAnime() {}

LogicAnime.initialize = function(otakuDB) {
    LogicAnime.Anime = otakuDB.modelAnime;
    LogicAnime.IndexAnime = otakuDB.modelIndexAnime;
};

LogicAnime.retrieve = function(id, callback) {
    console.log("id: " + id);
    LogicCommonOtaku.retrieve(LogicAnime.Anime, id, callback);
};

LogicAnime.lookup = function(name, callback) {
    console.log("name: " + name);
    LogicCommonOtaku.lookup(LogicAnime.Anime, name, callback);
};

LogicAnime.search = function(name, callback) {
    console.log("name: " + name);
    LogicCommonOtaku.search(LogicAnime.Anime, name, callback);
};

xport(module, LogicAnime);