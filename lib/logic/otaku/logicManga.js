var xport = require('node-xport')
  , LogicCommonOtaku = require('./logicCommonOtaku')
  ;

function LogicManga() {}

LogicManga.initialize = function(otakuDB) {
    LogicManga.Manga = otakuDB.modelManga;
    LogicManga.IndexManga = otakuDB.modelIndexManga;
};

LogicManga.retrieve = function(id, callback) {
    LogicCommonOtaku.retrieve(LogicManga.Manga, id, callback);
};

LogicManga.lookup = function(name, callback) {
    LogicCommonOtaku.lookup(LogicManga.Manga, name, callback);
};

LogicManga.search = function(name, callback) {
    LogicCommonOtaku.search(LogicManga.Manga, name, callback);
};

LogicManga.update = function(id, document, callback) {
    LogicCommonOtaku.update(LogicManga.Manga, id, document, callback);
};

LogicManga.add = function(document, callback) {
    LogicCommonOtaku.add(LogicManga.Manga, LogicManga.IndexManga, document, callback);
};

LogicManga.remove = function(id, callback) {
    LogicCommonOtaku.remove(LogicManga.Manga, LogicManga.IndexManga, id, callback);
};

xport(module, LogicManga);