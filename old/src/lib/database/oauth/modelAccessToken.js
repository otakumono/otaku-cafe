var xport = require('node-xport')(module)
  , mongoose = require('../../../connections').oauth
  , schemaAccessToken = require('./schemaAccessToken')
  ;

var modelAccessToken = mongoose.model('ModelAccessToken', schemaAccessToken, 'accesstokens');

xport(modelAccessToken);