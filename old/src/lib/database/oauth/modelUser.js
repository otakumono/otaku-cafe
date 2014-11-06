var xport = require('node-xport')(module)
  , mongoose = require('../../../connections').oauth
  , schemaUser = require('./schemaUser')
  ;

var modelUser = mongoose.model('ModelUser', schemaUser, 'users');

xport(modelUser);