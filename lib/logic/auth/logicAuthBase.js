var xport = require('node-xport')(module)
  ;

function LogicAuthBase() {}

LogicAuthBase.initialize = function(authDB) {
    LogicAuthBase.database = authDB;    
};

LogicAuthBase.getAccessToken = function(bearerToken, callback) {

};

LogicAuthBase.getClient = function(clientId, clientSecret, callback) {

};

LogicAuthBase.grantTypeAllowed = function(clientId, grantType, callback) {

};

LogicAuthBase.saveAccessToken = function(accessToken, expires, user, callback) {

};

xport(LogicAuthBase);