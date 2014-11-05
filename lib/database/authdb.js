var xport = require('node-xport')
  , CommonDB = require('./commondb')
  ;

function AuthDB(options) {
    this.options = CommonDB.cleanOptions(options, 'otaku-auth');
    
    this.connection = null;
    
    AuthDB.database = this;
}

AuthDB.database = null;

AuthDB.prototype.connectionString = function() {
    return CommonDB.connectionString(this);
};

AuthDB.prototype.connect = function() {
    CommonDB.connect(this);

    var db = this.connection;
};

AuthDB.prototype.disconnect = function(callback) {
    return CommonDB.disconnect(AuthDB.database, callback);
}

AuthDB.prototype.onError = function(error) {
    return CommonDB.onError(AuthDB.database, error);
};

AuthDB.prototype.onOpen = function() {
    return CommonDB.onOpen(AuthDB.database);
};

AuthDB.prototype.onClose = function() {
    return CommonDB.onClose(AuthDB.database);
};

xport(module, AuthDB);