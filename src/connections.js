var xport = require('./xport')
  , config = require('./config')
  , mongoose = require('mongoose')
  ;

var connections = (function() {
    function Connections() {}

    Connections.oauth = null;
    Connections.otaku = null;

    Connections.connect = function() {
        Connections.oauth = Connections.createConnection(config.get('database:oauth'));
        Connections.otaku = Connections.createConnection(config.get('database:otaku'));
    };

    Connections.dbOnError = function(error) {
        console.log(error + ' while attempting to open the database, exiting.');
        process.exit(1);
    };

    Connections.dbOnOpen = function() {
        console.log('Connection to the database established.');
    };

    Connections.createConnection = function(database) {
        var database = mongoose.createConnection('mongodb://' + database.host + ':' + database.port + '/' + database.name);
        
        database.on('error', Connections.dbOnError);
        database.on('open', Connections.dbOnOpen);

        return database;
    };

    Connections.connect();

    return Connections;
})();

xport(module, connections);