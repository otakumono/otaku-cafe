var xport = require('node-xport')(module)
  ;

function LogicCommonOtaku() {}

LogicCommonOtaku.retrieve = function(model, id, callback) {
    model.findOne({ 'id': id }, createIntercept(callback));
};

LogicCommonOtaku.lookup = function(model, name, callback) {
    if (!name) {
        return doesNotExist(callback);
    }

    model.findOne(queryByName(name), createIntercept(callback));
};

LogicCommonOtaku.search = function(model, name, callback) {
    if (!name) {
        return doesNotExist(callback);
    }

    model.findOne(queryByName(name), { 'id': 1 }, createIntercept(callback));
};

LogicCommonOtaku.update = function(model, id, document, callback) {
    
};

LogicCommonOtaku.add = function(model, index, document, callback) {
    
};

LogicCommonOtaku.remove = function(model, index, id, callback) {
    
};

var queryByName = function(name) {
    name = name.replace(/\+/g, ' ');

    return { 'titles.translations': { $in: [ new RegExp(name, 'i') ] } };
};

var doesNotExist = function(callback) {
    return callback(null, { 'id': -1 });
};

var createIntercept = function(callback) {
    return function(error, result) {
        if (!result) {
            return doesNotExist(callback);
        }

        return callback(error, result);
    };
};

xport(LogicCommonOtaku);