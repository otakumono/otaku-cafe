var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var schemaAuthcode = mongoose.Schema({
    authcode: {
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

xport(module, schemaAuthcode);