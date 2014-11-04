var xport = require('node-xport')
  ;

var Database = (function() {
    function Database() {}

    Database.add = function(modelType, document, callback) {
        new modelType(document).save(callback);
    };

    Database.update = function(modelType, conditions, document, updateMultiple, callback) {
        modelType.update(conditions, document, { multi: updateMultiple }, callback);
    };

    Database.remove = function(modelType, conditions, callback) {
        modelType.remove(conditions, callback);
    };

    Database.findAll = function(modelType, conditions, callback) {
        modelType.find(conditions, callback);
    };

    Database.findOne = function(modelType, conditions, callback) {
        modelType.findOne(conditions, callback);
    };

    return Database;
})();

/* Module Export */
xport(module, Database);