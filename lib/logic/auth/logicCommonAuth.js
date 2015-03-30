var xport = require('node-xport')(module)
  , bcrypt = require('bcrypt')
  ;

function LogicCommonAuth() {}

LogicCommonAuth.generateHash = function(string, salt, callback) {
    callback = (callback || function(error, hash) {});
    
    if (typeof(salt) === 'function') {
        bcrypt.hash(string, 12, callback);
    }

    bcrypt.hash(string, salt, callback);
};

LogicCommonAuth.generateSalt = function(rounds, callback) {
    callback = (callback || function(error, salt) {});
    rounds = (rounds || 12);

    if (typeof(rounds) === 'function') {
        callback = rounds;
        rounds = 12;
    }

    bcrypt.genSalt(rounds, callback);
};