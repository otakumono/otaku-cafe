var xport = require('node-xport')(module)
  , mongoose = require('../../../connections').oauth
  , schemaClient = require('./schemaClient')
  ;

var modelClient = mongoose.model('ModelClient', schemaClient, 'clients');

xport(modelClient);