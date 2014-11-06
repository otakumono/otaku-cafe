var xport = require('node-xport')(module)
  , LogicCommonOtaku = require('./logicCommonOtaku')
  ;

function LogicNovel() {}

LogicNovel.initialize = function(otakuDB) {
    LogicNovel.Novel = otakuDB.modelNovel;
    LogicNovel.IndexNovel = otakuDB.modelIndexNovel;
};

LogicNovel.retrieve = function(id, callback) {
    LogicCommonOtaku.retrieve(LogicNovel.Novel, id, callback);
};

LogicNovel.lookup = function(name, callback) {
    LogicCommonOtaku.lookup(LogicNovel.Novel, name, callback);
};

LogicNovel.search = function(name, callback) {
    LogicCommonOtaku.search(LogicNovel.Novel, name, callback);
};

LogicNovel.update = function(id, document, callback) {
    LogicCommonOtaku.update(LogicNovel.Novel, id, document, callback);
};

LogicNovel.add = function(document, callback) {
    LogicCommonOtaku.add(LogicNovel.Novel, LogicNovel.IndexNovel, document, callback);
};

LogicNovel.remove = function(id, callback) {
    LogicCommonOtaku.remove(LogicNovel.Novel, LogicNovel.IndexNovel, id, callback);
};

xport(LogicNovel);