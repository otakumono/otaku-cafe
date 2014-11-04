var xport = require('node-xport')
  , mongoose = require('../../../connections').oauth
  , schemaAccessToken = require('./schemaAccessToken')
  ;

var modelAccessToken = mongoose.model('ModelAccessToken', schemaAccessToken, 'accesstokens');

xport(module, modelAccessToken);