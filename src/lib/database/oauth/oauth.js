var xport = require('node-xport')
  , Database = require('../database')
  , modelUser = require('./modelUser')
  , modelClient = require('./modelClient')
  , modelAuthcode = require('./modelAuthcode')
  , modelAccessToken = require('./modelAccessToken')
  , modelRefreshToken = require('./modelRefreshToken')
  , bcrypt = require('bcrypt')
  , crypto = require('crypto')
  ;

var oauth = (function() {
    function OAuth() {}

    OAuth.hash = function(password) {
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    OAuth.register = function(user, callback) {
        user.hashword = OAuth.hash(user.password);
        delete user.password;

        new modelUser(user).save(callback);

    };

    OAuth.getUser = function(email, password, callback) {
        OAuth.authenticate(email, password, function(error, result) {
            if (error || !result) {
                return callback(error);
            }

            callback(null, user.email);
        });
    };

    OAuth.authenticate = function(email, password, callback) {
        modelUser.findOne({ 'email': email }, function(error, result) {
            if (error || !result) {
                return callback(error);
            }

            callback(null, bcrypt.compareSync(password, result.hashword) ? result : null);
        });
    };

    OAuth.getClient = function(clientId, callback) {
        Database.findOne(modelClient, { id: clientId }, callback);
    };

    OAuth.grantAllowed = function(clientId, grant, callback) {
        if (grant === 'password' || grant === 'authorization_code') {
            return callback(false, [ 'papers3', 'papers3-mac' ].indexOf(clientId) > -1);
        }

        callback(false, true);
    };

    OAuth.getAuthcode = function(authcode, callback) {
        Database.findOne(modelAuthcode, { 'authcode': authcode }, callback);
    };

    OAuth.saveAuthcode = function(authcode, clientId, expires, userId, callback) {
        var fields = {
            'clientId': clientId,
            'userId': userId,
            'expires': expires
        };

        Database.update(modelAuthcode, { 'authcode': authcode }, fields, { upsert: true }, function(error) {
            if (error) {
                console.error(error);
            }

            callback(error);
        });
    };

    OAuth.getAccessToken = function(token, callback) {
        Database.findOne(modelAccessToken, { 'accessToken': token }, callback);
    };

    OAuth.saveAccessToken = function(token, clientId, expires, userId, callback) {
        var fields = {
            'clientId': clientId,
            'userId': userId,
            'expires': expires
        };

        Database.update(modelAccessToken, { 'accessToken': token }, fields, { upsert: true }, function(error) {
            if (error) {
                console.error(error);
            }

            callback(error);
        });
    };

    OAuth.getRefreshToken = function(token, callback) {
        Database.findOne(modelRefreshToken, { 'refreshToken': token }, function(error, result) {
            if (result) {
                result.user = result.userId;
            }

            callback(error, result);
        });
    };

    OAuth.saveRefreshToken = function(token, clientId, expires, userId, callback) {
        if (userId.id) {
            userId = userId.id;
        }

        new modelRefreshToken({
            'refreshToken': token,
            'clientId': clientId,
            'userId': userId,
            'expires': expires
        }).save(callback);
    };

    return OAuth;
})();

xport(module, oauth);