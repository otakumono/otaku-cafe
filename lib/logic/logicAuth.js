var xport = require('node-xport')(module)
  , oauthserver = require('oauth2-server')
  , LogicAuthBase = require('./auth/logicAuthBase')
  , LogicAuthClientCredentials = require('./auth/logicAuthClientCredentials')
  , LogicAuthCode = require('./auth/logicAuthCode')
  , LogicAuthPassword = require('./auth/logicAuthPassword')
  , LogicAuthRefreshToken = require('./auth/logicAuthRefreshToken')
  ;

function LogicAuth() {}

LogicAuth.submodels = [];

LogicAuth.initialize = function() {
    var authDB = require('../database/authdb').database;
    
    LogicAuth.submodels.push(LogicAuthBase);
    LogicAuth.submodels.push(LogicAuthClientCredentials);
    LogicAuth.submodels.push(LogicAuthCode);
    LogicAuth.submodels.push(LogicAuthPassword);
    LogicAuth.submodels.push(LogicAuthRefreshToken);

    for (var i in LogicAuth.submodels) {
        LogicAuth.submodels[i].initialize(authDB);
    }

    LogicAuth.server = oauthserver({
        model: LogicAuth.getModel(),
        grants: [ 'password', 'authorization_code', 'refresh_token', 'client_credentials' ],
        accessTokenLifetime: 3600,
        refreshTokenLifetime: 604800,
        authCodeLifetime: 60,
        clientIdRegex: /^[a-z0-9-_]{4,48}$/i,
        passthroughErrors: true,
        debug: true
    });
};

LogicAuth.getModel = function() {
    var model = {};
    var submodel = null;
    var property = null;

    for (var i in LogicAuth.submodels) {
        submodel = LogicAuth.submodels[i];
        for (var propertyKey in submodel) {
            property = submodel[propertyKey];
            if (typeof(property) === 'function') {
                if (propertyKey !== 'initialize') {
                    model[propertyKey] = property;
                }
            }
        }
    }

    return model;
};

xport(LogicAuth);