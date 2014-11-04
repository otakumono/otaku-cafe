var xport = require('node-xport')
  , mongoose = require('../../../connections').oauth
  , schemaAuthcode = require('./schemaAuthcode')
  ;

var modelAuthcode = mongoose.model('ModelAuthcode', schemaAuthcode, 'authcodes');

xport(module, modelAuthcode);