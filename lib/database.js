var xport = require('node-xport')
  , AuthDB = require('./database/authdb')
  , OtakuDB = require('./database/otakudb')
  ;

function Database() {}

Database.AuthDB = null;
Database.OtakuDB = null;

Database.initialize = function(databases) {
    Database.AuthDB = new AuthDB(databases.authentication);
    Database.OtakuDB = new OtakuDB(databases.content);
};

Database.connect = function() {
    Database.AuthDB.connect();
    Database.OtakuDB.connect();
};

Database.disconnect = function() {
    Database.AuthDB.disconnect();
    Database.OtakuDB.disconnect();
};

xport(module, Database);