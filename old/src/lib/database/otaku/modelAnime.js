var xport = require('node-xport')(module)
  , mongoose = require('../../../connections').otaku
  , SchemaAnime = require('./schemaAnime')
  ;

var ModelAnime = mongoose.model('ModelAnime', SchemaAnime, 'anime');

/* Module Export */
xport(ModelAnime);