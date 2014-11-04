var xport = require('node-xport')
  ;

var models = {
  'oauth': require('./oauth'),
  'users': require('./modelUser'),
  'client': require('./modelClient'),
  'mongoose': require('../../../connections')
};

xport(module, models);