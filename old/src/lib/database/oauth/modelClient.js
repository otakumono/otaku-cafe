var xport = require('node-xport')
  , mongoose = require('../../../connections').oauth
  , schemaClient = require('./schemaClient')
  ;

var modelClient = mongoose.model('ModelClient', schemaClient, 'clients');

xport(module, modelClient);