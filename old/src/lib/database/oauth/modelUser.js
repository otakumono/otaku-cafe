var xport = require('node-xport')
  , mongoose = require('../../../connections').oauth
  , schemaUser = require('./schemaUser')
  ;

var modelUser = mongoose.model('ModelUser', schemaUser, 'users');

xport(module, modelUser);