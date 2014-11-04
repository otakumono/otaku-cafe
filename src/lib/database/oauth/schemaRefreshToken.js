var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var schemaRefreshToken = mongoose.Schema({
    refreshToken: {
        type: String,
        require: true,
        unique: true
    },
    clientId: String,
    userId: {
        type: String,
        require: true
    },
    expires: Number
});

xport(module, schemaRefreshToken);