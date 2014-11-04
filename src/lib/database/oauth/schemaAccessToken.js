var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var schemaAccessToken = mongoose.Schema({
    accessToken: {
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

xport(module, schemaAccessToken);