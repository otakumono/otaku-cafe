var xport = require('node-xport')(module)
  ;

function LogicAuthRefreshToken() {}

LogicAuthRefreshToken.initialize = function(authDB) {
    
    
};

LogicAuthRefreshToken.saveRefreshToken = function(refreshToken, clientId, expires, user, callback) {

};

LogicAuthRefreshToken.getRefreshToken = function(refreshToken, callback) {

};

LogicAuthRefreshToken.revokeRefreshToken = function(refreshToken, callback) {

};

xport(LogicAuthRefreshToken);