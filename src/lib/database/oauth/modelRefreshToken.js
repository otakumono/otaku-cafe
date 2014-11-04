var xport = require('node-xport')
  , mongoose = require('../../../connections').oauth
  , schemaRefreshToken = require('./schemaRefreshToken')
  ;

var modelRefreshToken = mongoose.model('ModelRefreshToken', schemaRefreshToken, 'refreshtokens');

xport(module, modelRefreshToken);