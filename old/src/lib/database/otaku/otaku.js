var xport = require('node-xport')(module)
  , Database = require('../database')
  ;

var otaku = (function() {
    function Otaku() {}

    Otaku.add = function(modelType, document, callback) {
        Database.add(modelType, document, callback);
    };

    Otaku.update = function(modelType, document, callback) {
        Database.update({ id: document.id }, document, false, callback);
    };

    Otaku.remove = function(modelType, documentId, callback) {
        Database.remove(modelType, { id: documentId }, callback);
    };

    Otaku.get = function(modelType, documentId, callback) {
        Database.findOne(modelType, { id: documentId }, callback);
    };

    Otaku.findByName = function(modelType, name, callback) {
        Database.findOne(modelType, { 'titles.translations': { $in: [ new RegExp(name, 'i') ] } }, callback);
    };

    return Otaku;
})();

xport(otaku);