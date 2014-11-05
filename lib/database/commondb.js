var xport = require('node-xport')
  , Datatype = require('../datatype')
  , mongoose = require('mongoose')
  ;

function CommonDB() {}

CommonDB.connectionString = function(self) {
    return 'mongodb://' + CommonDB.userString(self) + CommonDB.hostString(self) + '/' + self.options.name;
};

CommonDB.connect = function(self) {
    self.connection = mongoose.createConnection(self.connectionString());
    self.connection.on('error', self.onError);
    self.connection.on('open', self.onOpen);
    self.connection.on('close', self.onClose);
};

CommonDB.disconnect = function(self, callback) {
    self.connection.disconnect(callback || function() {});
}

CommonDB.onError = function(self, error) {
    console.log('Failed to connect to: "%s"', CommonDB.connectionString(self));
    console.log('This is a critical failure, application will exit. More information below.');
    console.log('Error: ' + error);
    process.exit(1);
};

CommonDB.onOpen = function(self) {
    console.log('Established connection to: "%s"', CommonDB.connectionString(self));
};

CommonDB.onClose = function(self) {
    console.log('Disconnected from: "%s"', CommonDB.connectionString(self));
};

CommonDB.cleanOptions = function(options, defaultName) {
    options = (options || {});
    
    options.host = (options.host || 'localhost');
    options.port = (Datatype.asNumber(options.port) || 27017);
    options.name = (options.name || defaultName);
    options.user = (options.user || null);
    options.pass = (options.pass || null);

    return options;
}

CommonDB.userString = function(self) {
    var options = self.options;

    if (!options || !options.user) {
        return '';
    }

    if (!options.pass) {
        return options.user + '@';
    }

    return options.user + ':' + options.pass + '@';
}

CommonDB.hostString = function(self) {
    var options = self.options;

    if (!options || !options.host) {
        return 'localhost';
    }

    if (!options.port) {
        return options.host + ':' + 27017;
    }

    return options.host + ':' + options.port;
}

xport(module, CommonDB);