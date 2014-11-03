var xport = require('../../xport')
  ;

var DBManager = (function() {
    function DBManager() {}

    DBManager.addRecord = function(modelType, record, callback) {
        var model = new modelType(record);
        model.save();
    };

    DBManager.updateRecord = function(modelType, record, callback) {
        modelType.update({ id: record.id }, record, { multi: false }, callback);
    };

    DBManager.removeRecord = function(modelType, recordId, callback) {
        modelType.remove({ id: recordId }, callback);
    };

    DBManager.getRecord = function(modelType, recordId, callback) {
        modelType.findOne({ id: recordId }, DBManager.clean(callback));
    };

    DBManager.findRecordByName = function(modelType, recordName, callback) {
        DBManager.internalFindRecord(modelType, { 'titles.translations': { $in: [ new RegExp(recordName, 'i') ] } }, DBManager.clean(callback));
    };

    DBManager.internalFindRecord = function(modelType, query, callback) {
        modelType.findOne(query, DBManager.clean(callback));
    };

    DBManager.clean = function(callback) {
        return function(error, result) {
            if (result) {
                result._id = undefined;
            }

            callback(error, result);
        };
    };

    return DBManager;
})();

/* Module Export */
xport(module, DBManager);