var xport = require('node-xport')(module)
  , mongoose = require('mongoose')
  ;

var schemaClient = mongoose.Schema({
    clientId: String,
    clientSecret: String,
    redirectUri: String
});

xport(schemaClient);