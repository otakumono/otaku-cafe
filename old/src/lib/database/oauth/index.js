var xport = require('node-xport')(module)
  ;

var models = {
  'oauth': require('./oauth'),
  'users': require('./modelUser'),
  'client': require('./modelClient'),
  'mongoose': require('../../../connections')
};

xport(models);