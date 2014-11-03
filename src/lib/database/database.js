var xport = require('../../xport')
  ;

var Database = (function() {
    function Database() {}

    Database.addRecord = function(modelType, record, callback) {
        var model = new modelType(record);
        model.save();
    };

    Database.updateRecord = function(modelType, record, callback) {
        modelType.update({ id: record.id }, record, { multi: false }, callback);
    };

    Database.removeRecord = function(modelType, recordId, callback) {
        modelType.remove({ id: recordId }, callback);
    };

    Database.getRecord = function(modelType, recordId, callback) {
        modelType.findOne({ id: recordId }, Database.clean(callback));
    };

    Database.findRecordByName = function(modelType, recordName, callback) {
        Database.internalFindRecord(modelType, { 'titles.translations': { $in: [ new RegExp(recordName, 'i') ] } }, Database.clean(callback));
    };

    Database.internalFindRecord = function(modelType, query, callback) {
        modelType.findOne(query, Database.clean(callback));
    };

    Database.clean = function(callback) {
        return function(error, result) {
            if (result) {
                result._id = undefined;
            }

            callback(error, result);
        };
    };

    return Database;
})();

/* Module Export */
xport(module, Database);