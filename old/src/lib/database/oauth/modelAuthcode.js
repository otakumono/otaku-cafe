var xport = require('node-xport')(module)
  , mongoose = require('../../../connections').oauth
  , schemaAuthcode = require('./schemaAuthcode')
  ;

var modelAuthcode = mongoose.model('ModelAuthcode', schemaAuthcode, 'authcodes');

xport(modelAuthcode);