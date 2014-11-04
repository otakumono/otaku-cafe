var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var schemaClient = mongoose.Schema({
    clientId: String,
    clientSecret: String,
    redirectUri: String
});

xport(module, schemaClient);