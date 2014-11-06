var xport = require('node-xport')(module)
  , mongoose = require('../../../connections').oauth
  , schemaRefreshToken = require('./schemaRefreshToken')
  ;

var modelRefreshToken = mongoose.model('ModelRefreshToken', schemaRefreshToken, 'refreshtokens');

xport(modelRefreshToken);