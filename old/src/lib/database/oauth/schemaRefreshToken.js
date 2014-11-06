var xport = require('node-xport')(module)
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

xport(schemaRefreshToken);